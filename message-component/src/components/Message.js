import React from "react";

const Message = () => {
  return (
    // <div className="card" style="width: 18rem;">
    //   <div className="card-body">
    //     <h5 className="card-title">Card title</h5>
    //     <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //     <a href="#" className="card-link">
    //       Card link
    //     </a>
    //     <a href="#" className="card-link">
    //       Another link
    //     </a>
    //   </div>
    //  </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <span style={{ paddingRight: "10px" }}> Odkaz: </span>
        <a href="#" className="card-link">
          www.bla.la
        </a>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <span className="badge alert-danger">Nesplneno</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
