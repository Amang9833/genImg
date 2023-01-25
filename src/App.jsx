import { useState } from "react"
import './css/app.css'


function App() {
  const [input, setInput] = useState("");
  const [ouput, setOuput] = useState('')
  const [time, setTime] = useState(false)
  const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String("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")
        },
        body: JSON.stringify({
          'prompt': input,
          'temperature': 0.2,
          'max_tokens': 256,
          'top_p': 1,
        })
  };
  const gen = async () => {
    setTime(true)
    fetch('https://api.openai.com/v1/engines/code-davinci-002/completions', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data.choices[0].text);
      setOuput(data.choices[0].text);
      setTime(false)
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className="cont">
      <div className="navbar">
        <div className="head">KrazzyBot</div>
        {time ? <div className="loading">Loading...</div> : ""}
      </div>
      <div className="response">
        <div className="res">want a help!!! lorem40</div>
        {ouput === '' ? (<></>) : (<div className="res leftSide">kdkd {ouput} </div>)}
      </div>
      <div className="input">
        <input
          type="text"
          className="inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="SendBtn" onClick={gen}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App
