import "./App.css";
import React, {useState} from "react"
import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode , setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) => {
      setAlert({
        msg: message,
        msgtype: type,
      })
      setTimeout(() => {
        setAlert(null)
      }, 1200)
  }

  const handleDarkMode = () => {
     if ( mode == 'light'){
       setMode('dark')
       document.body.style.backgroundColor = '#343434'
       showAlert("Enabled Dark Mode Successfully", "success")
     }
     else {
       setMode('light')
       document.body.style.backgroundColor = '#fff'
       showAlert("Enabled Light Mode Successfully", "success")
     }
  }

  return (
    <>
      <Navbar  title="Hiren" mode={mode} handleDarkMode={handleDarkMode}/>
      <Alert alert="this is alert" alert={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
