import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
import { Draggable as Draggable2 } from 'react-draggable';
import { useEffect } from "react";
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
  margin-right:1px;
  // flex-grow: 1;
  min-height: 100px;
`;
export default function Canvas(props) {
  const [canvasWidth, setCanvasWidth] = useState(1000);
  const [variableTop, setVariableTop] = useState(100);
  const [variableLeft, setVariableLeft] = useState(400);
  const [mouseMoving, setMouseMoving] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  useEffect(() => {

  })

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var elmnt;
  function dragElement(elmnt2) {
    elmnt = elmnt2;
    // if (window.document.getElementById(elmnt.id + "header")) {
    if (window.document.getElementById("mydivheader")) {
      /* if present, the header is where you move the DIV from:*/
      window.document.getElementById("mydivheader").onmousedown = dragMouseDown();
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown();
      console.log("else mouse down")
    }
  }
  function dragMouseDown(e) {

    e = e || window.event;
    console.log("eee", e)
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    window.document.onmouseup = closeDragElement();
    // window.document.onmouseup = ()=>{console.log("mouse up")};
    // call a function whenever the cursor moves:
    window.document.onmousemove = elementDrag();
    // window.document.onmousemove = ()=>{console.log("mouse move")};;
    console.log("postioss of cursor on drag Down :", pos1, pos2, pos3, pos4)
  }
  var checkdirection = 0;

  function elementDrag(e) {
    console.log("mouse down", mouseDown);
    if (mouseDown) {
      // alert("Asdfasdf")
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log("postioss of cursor :", pos1, pos2, pos3, pos4);
      // window.document.onmouseup = closeDragElement();
      // window.document.onmouseup = closeDragElement();
      // setCanvasWidth(canvasWidth - pos1)
      if (pos1 < 0) {
        setCanvasWidth(canvasWidth - 1)
      }
      else {
        setCanvasWidth(canvasWidth + 1)
      }
      // set the element's new position:
      // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      // setVariableTop( (elmnt.offsetTop - pos2) + "px");
      // setVariableTop((variableTop - pos2));
      // setVariableLeft(variableLeft - pos1)
      // checkdirection = pos3;
      // if (checkdirection <= pos3) {
      //   setVariableLeft(variableLeft - 1)
      //   checkdirection = e.clientX;
      // }
      // // else{
      // if (checkdirection >= pos3) {
      //   setVariableLeft(variableLeft + 1);
      //   checkdirection = e.clientX;
      // }
      // }
      // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    window.document.onmouseup = null;
    window.document.onmousemove = null;
    setMouseDown(false)
    console.log("postioss of cursor on drag up :", pos1, pos2, pos3, pos4)
  }
  console.log(props,"canavs")
  return (
    // <Container1>
    <div className="flex justify-center  " id="mydiv">
      <div className="flex absolute z-1" style={{ top: variableTop, left: variableLeft, width: canvasWidth, }} id="my-canvas" >
        {/* <div className="flex " id="my-canvas" > */}
        <div className=" m-8 mr-1  border border-solid border-gray-400 flex flex-col" style={{ width: canvasWidth }}>
          <div className="bg-gray-100 h-12 border-b border-gray-400 justify-between flex items-center pl-4 pr-4">
            <div className="flex w-20 justify-between">
              <div className="w-5 bg-gray-400 h-5 rounded-full" />
              <div className="w-5 bg-gray-400 h-5 rounded-full" />
              <div className="w-5 bg-gray-400 h-5 rounded-full" />
            </div>
            <div className="bg-white w-64 h-8 flex justify-center items-center border">
              <h4>index.html</h4>
            </div>
            <div>
            </div>
          </div>
          {/* <Title>{props.column.title}</Title> */}
          <Droppable droppableId={props.column.id}>
            {provided => (
              <div className="bg-white">

                <TaskList ref={provided.innerRef} {...provided.droppalbeProps}>
                  <div>
                   { props.tasks == "" && <div className="mt-12 mt-32 mb-32">
                      <h1 className="text-xl text-center">Start Creating a Template by selecting relevent UI Components</h1>
                      <h1 className="text-md text-center text-gray-600 mt-5">Drag & drop them here. You can change the default tailwind styles by clicking the change styles button.</h1>
                    </div>}
                    {props.tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} myData={props.myData}></Task>
                    ))}
                  </div>
                  {provided.placeholder}
                </TaskList>
              </div>
            )}
          </Droppable>
        </div>
        <button className="w-4 bg-gray-400 mt-8 mb-8" id="mydivheader" onClick={() => {
          // var mydiv = window.document.getElementById("mydiv");
          // dragElement(mydiv);
        }}

          onMouseDown={() => {
            var mydiv = window.document.getElementById("mydiv");
            // dragElement(mydiv);
            setMouseDown(true)
            // dragMouseDown();
          }}
          onMouseUp={() => { setMouseDown(false); closeDragElement(); onmouseup = null; onmousemove = null; }}
          onMouseMove={() => { elementDrag() }}
        // onMouseMove={() => { setMouseMoving(true) }}
        />
      </div>



    </div>
    // </Container1>
  );
}
