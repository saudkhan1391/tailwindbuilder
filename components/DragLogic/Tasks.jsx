import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd-next";
export default function Tasks(props) {
  console.log(props, "props of tasks ");
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshtot) => (
          <div className={`p-8 m-2 border  ${snapshtot.isDragging ? "bg-blue-200" : "bg-white"}`} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshtot.isDragging}
          >
            <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
            {props.myData()}
            {props.task.content}
          </div>
        )}
      </Draggable>
    </div>
  );
}
