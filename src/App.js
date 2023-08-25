import { useEffect, useState } from "react";

function Message({ numberOfAdvices }) {
  return (
    <p>
      {" "}
      you have recived <strong>{numberOfAdvices}</strong> advices{" "}
    </p>
  );
}

export default function App() {
  const [advice, setAdvice] = useState("");
  const [numberOfAdvices, setNumberOfAdvices] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setNumberOfAdvices((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message numberOfAdvices={numberOfAdvices} />
    </div>
  );
}
