import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const addLike = () => {
    setLike((prevV) => prevV + 1);
  };

  const addDislike = () => {
    setDislike((prevV) => {
      return prevV + 1;
    });
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{like}</div>
          <Button name="LIKE" onButtonClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <Button name="DISLIKE" onButtonClick={addDislike} />
          <div className="result">{dislike}</div>
        </div>
      </div>
      <Button name="RESET RESULTS" onButtonClick={resetResults} />
    </div>
  );
}

export default Feedback;
