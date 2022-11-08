import './App.css';
import {useEffect,useState} from "react"
import axios from 'axios'

function App() {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
        // fetch('http://localhost:5000/testApi')
        // .then(res=>res.text())
        // .then(res=>setApiResponse)
        axios.get('http://localhost:5000/testApi', (res, req)=> {
             res.send(setApiResponse)
        })
        .then(res=>res.text)
        
  }, [])
  return (
    
    <div className="App">
        <p> {apiResponse}</p>
    </div>
  );
}

export default App;
