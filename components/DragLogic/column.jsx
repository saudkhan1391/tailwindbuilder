import React from "react";
import styled from "styled-components";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
const Container1 = styled.div`
  margin: 8px;
  // border: 1px solid lightgrey;
  border-radius: 2px;
  width: 380px;
  display: flex;
  flex-direction: column;
  // background-color: #f8f9fa;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  // padding: 28px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  // flex-grow: 1;
  min-height: 100px;
  // align-self:center;
  margin-left:15px;
  margin-right:15px;

`;
export default function Column(props) {
  return (
    // <Container1>
    <div style={{ backgroundColor: "#f8f9fa", width: 400 }} className="">
      {/* <Title>{props.column.title}</Title> */}
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