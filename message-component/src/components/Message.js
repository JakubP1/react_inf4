import React, { useState } from "react";

const Message = () => {
  const [isVisited, setIsVisited] = useState(false);
  const [vistiedText, setVisitedText] = useState("Nesplneno");
  const [checked, setChecked] = useState(false);

  const isVisitedClickHandler = () => {
    setIsVisited(true);
    setChecked(true);
    setVisitedText("Splneno");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <span style={{ paddingRight: "10px" }}> Odkaz: </span>
        <a href="#" className="card-link" onClick={isVisitedClickHandler}>
          www.bla.la
        </a>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
                checked={checked}
              />
            </div>
          </div>
          <span
            className={`badge ${isVisited ? "alert-success" : "alert-danger"}`}
          >
            {vistiedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
