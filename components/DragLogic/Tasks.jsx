import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd-next";
const Container3 = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen': 'white')}
`;
// export default class Tasks extends React.Component {
export default function Tasks (props) {
  // render() {
    console.log(props, "props of tasks ");
    return (
      // <div>
      //   <h1>sdfsdf</h1>
      //   </div>
        // <div >
        <Draggable draggableId={props.task.id} index={props.index}>
          {(provided,snapshtot) => (
            <Container3
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshtot.isDragging}
            >
              {props.myData()}
              {props.task.content}
              {/* {props.task.title}{" "} */}
              {/* {props.task.description} */}
            </Container3>
          )}
        </Draggable>
            // </div>
    );
  // }
}
