import React, { useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd-next";
export default function Tasks(props) {

  let { Preview, reRender, render } = props;
  useEffect(() => {
    // reRender(render + 1)
  }, [Preview, render]);
  const Container3 = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen': 'yellow')}
`;
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshot) => {
          return (
            <div id="task_id">
              <Container3 className={`p-8 m-2 border  ${snapshot.isDragging ? "bg-blue-200" : "bg-white"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}

              >
                <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
                {props.myData()}
                {props.task.content}
              </Container3>
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
export function Tasks2(props) {
  let { Preview, setTasks2Loaded,render ,reRender} = props;
  useEffect(() => {
    // reRender(render + 1);
  }, [Preview, render])
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshot) => {
          setTasks2Loaded(true)
          reRender(render+1)
          return (
            <div id="task_id2">
              <div className={`p-8 m-2 border  ${snapshot.isDragging ? "bg-blue-200" : "bg-white"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}

              >
                <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
                {props.myData()}
                {props.task.content}
                {props.children}
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
