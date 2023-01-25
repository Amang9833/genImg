import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [ouput, setOuput] = useState("");
  const [time, setTime] = useState(false);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        String("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"),
    },
    body: JSON.stringify({
      prompt: input,
      temperature: 0.2,
      max_tokens: 256,
      top_p: 1,
    }),
  };
  const gen = async () => {
    setTime(true);
    fetch(
      "https://api.openai.com/v1/engines/code-davinci-002/completions",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].text);
        setOuput(data.choices[0].text);
        setTime(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="10"
      />
      <div className="output">
        {" "}
        output : {time ? "just a moment buddy :)" : ouput}{" "}
      </div>
      {time ? (
        <div style={{ marginTop: "10px" }}>Button will appear shortly...</div>
      ) : (
        <button style={{ marginTop: "10px" }} onClick={gen}>
          ans de
        </button>
      )}
    </div>
  );
}

export default App;
