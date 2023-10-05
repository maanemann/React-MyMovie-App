import "./App.css";
import { Outlet } from "react-router-dom";
// Til dark mode switch :
import { useState } from 'react'
import Switch from "react-switch";

function App() {
  // Til dark mode switch :
  const [checked, setChecked] = useState(false)
  // function handleChange(){
  //   setChecked(!checked)
  // }

  return (
    // Ja, mellemrummet i "app " skal være der
    <div className={"app " + (checked && "dark")}>
      <div className="dark:bg-black">
        <Outlet context={[checked, setChecked]} />
      </div>
    </div>
  );
}

export default App;
