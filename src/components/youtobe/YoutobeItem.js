import React from "react";

const YoutobeItem = (props) => {
  return (
    <div className={`youtobe-item ${props.className}`}>
      <div className="youtobe-image">
        <img src={props.image || "This is example of image"} alt="" />
      </div>
      <div className="youtobe-content">
        <img src={props.contentimg} alt="" className="youtobe-avatar" />
        <p className="youtobe-info">
          {props.info || "This is example of info"}
        </p>
      </div>
      <div className="youtobe-footer d-block">
        <p className="youtobe-maker">
          {props.maker || "This is example of maker"}
        </p>
        <div className="number-viewer d-flex">
          {props.numberview || "This is example of number view"} luot xem
          <div className="youtobe-time">1 nam truoc</div>
        </div>
      </div>
    </div>
  );
};

export default YoutobeItem;
