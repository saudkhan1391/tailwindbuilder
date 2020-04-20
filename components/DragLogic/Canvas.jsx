import React from "react";
import styled from "styled-components";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
const Container1 = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 380px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 28px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  // flex-grow: 1;
  min-height: 100px;
`;
export default function Canvas(props) {
  return (
    // <Container1>
    <div className=" m-8 border border-solid border-gray-400 flex flex-col" style={{width:800}} id="my-canvas">
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {provided => (
          <TaskList ref={provided.innerRef} {...provided.droppalbeProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} myData={props.myData}></Task>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      </div>
    // </Container1>
  );
}
