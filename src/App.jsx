import React, {useState} from "react";

import sm1 from "./img/1sm.png";
import sm2 from "./img/2sm.png";
import sm3 from "./img/3sm.png";

import SmileBlock from "./components/smile_block/SmileBlock";
import Button from "./components/btn/Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([
    {id: 1, count: 0, src: sm1},
    {id: 2, count: 0, src: sm2},
    {id: 3, count: 0, src: sm3},
  ]);

  const [showWinner, setShowWinner] = useState(false);

  function updateState(ent) {
    const i = counter.findIndex((el) => el.id === ent.id);
    counter[i].count = ent.count + 1;
    setCounter([...counter]);
  }

  function generateSmileBlockList() {
    return counter.map((ent) => (
      <SmileBlock key={ent.id} ent={ent} onClick={() => updateState(ent)} />
    ));
  }

  function generateWinnersBlock() {
    const maxCount = counter.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    ).count;

    const winners = counter.filter((el) => el.count === maxCount);

    return showWinner && maxCount > 0
      ? winners.map((ent) => <SmileBlock key={ent.id} ent={ent} />)
      : null;
  }

  return (
    <>
      <div className="vote">{generateSmileBlockList()}</div>

      <div className="winners">
        <div className="btns">
          <Button onClick={() => setShowWinner(true)}>Show Results</Button>
          <Button onClick={() => setShowWinner(false)}>Сlear Results</Button>
        </div>
        <div className="winners-block">{generateWinnersBlock()}</div>
      </div>
    </>
  );
}

export default App;
