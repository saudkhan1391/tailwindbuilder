import React from "react";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
export default function Column(props) {
  return (
    <div style={{ backgroundColor: "#f8f9fa", width: 400 }} className="">
      <Droppable droppableId={props.column.id}>
        {provided => (
          <div className={`p-8 m-2 border  ${props.isDraggingOver ? "bg-blue-400" : "bg-white"}`}  ref={provided.innerRef} {...provided.droppalbeProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} myData={props.myData}></Task>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
