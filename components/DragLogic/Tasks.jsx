import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd-next";
export default function Tasks(props) {
let {Preview} = props;
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshot) => {
          // console.log("Provided : ", provided)
          // console.log("snapshot : ", snapshot)
          return (
            <div id="task_id">
              <div className={`p-8 m-2 border  ${snapshot.isDragging ? "bg-blue-200" : "bg-white"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}

              >
                <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
                {props.myData()}
                {props.task.content}
              </div>
              {/* {snapshot.isDragging && (
                <div className={`p-8 m-2 border  ${snapshot.isDragging=="4ever" ? "bg-blue-200" : "bg-white"}`} >
                  <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
                  {props.myData()}
                  {props.task.content}
                </div>
              )} */}

            </div>
          )
        }}
      </Draggable>
    </div>
  );
}
