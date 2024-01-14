import React, { Component } from "react";
import YoutobeItem from "./YoutobeItem";
import { YoutobeData } from "../../data";

const YoutobeList = () => {
  return (
    <div className="youtobe-list">
      {YoutobeData.map((item, index) => {
        let newClass = index == 0 ? "abc" : "";
        return (
          <YoutobeItem
            key={item.id}
            image={item.image}
            info={item.info}
            maker={item.maker}
            numberview={item.numberview}
            contentimg={item.contentimg}
            className={newClass}
          ></YoutobeItem>
        );
      })}
    </div>
  );
};

export default YoutobeList;
