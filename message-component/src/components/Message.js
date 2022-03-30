import React, { useState } from "react";

const Message = (props) => {
  const visited = props.visited;
  const [isVisited, setIsVisited] = useState(visited);
  const [vistiedText, setVisitedText] = useState("Nesplneno");
  const [checked, setChecked] = useState(visited);

  const checkedChnage = () => {
    setChecked(true);
  };
  const isVisitedClickHandler = () => {
    if (visited == false) {
      setIsVisited(true);
      checkedChnage();
      setVisitedText("Splneno");

      props.onMessChange(props.id);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <span style={{ paddingRight: "10px" }}> Odkaz: </span>
        <a href="#" className="card-link" onClick={isVisitedClickHandler}>
          {props.link}
        </a>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
                checked={checked}
                onChange={checkedChnage}
              />
            </div>
          </div>
          <span
            className={`badge ${visited ? "alert-success" : "alert-danger"}`}
          >
            {vistiedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
