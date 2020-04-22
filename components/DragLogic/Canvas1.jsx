import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
import { Draggable as Draggable2 } from 'react-draggable';
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
export default function Canvas1(props) {
    const [canvasWidth, setCanvasWidth] = useState(1000);
    const [variableTop, setVariableTop] = useState(100);
    const [variableLeft, setVariableLeft] = useState(400);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    useEffect(() => {
        resizeDivOnDrag();
    })
    function resizeDivOnDrag() {
        const BORDER_SIZE = 4;
        // const panel = window.document.getElementById("right_panel");
        const panel = document.getElementById("my-canvas");

        let m_pos;
        function resize(e) {
            const dx = m_pos - e.x;
            m_pos = e.x;
            panel.style.width = (parseInt(getComputedStyle(panel, '').width) + dx) + "px";
        }

        panel.addEventListener("mousedown", function (e) {
            if (e.offsetX < BORDER_SIZE) {
                m_pos = e.x;
               document.addEventListener("mousemove", resize, false);
            }
        }, false);

        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", resize, false);
        }, false);
    }
    console.log(props, "canavs")
    return (
        // <Container1>
        <div className=" flex justify-center  " id="mydiv">
            <div className="  flex absolute z-1" style={{ top: variableTop, left: variableLeft, width: canvasWidth, }} id="my-canvas" >
             {/* <div  id="right_panel">Hello</div> */}
                <div className=" m-8   border border-solid border-gray-400 flex flex-col" style={{ width: canvasWidth }}>
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
                    <Droppable droppableId={props.column.id}>
                        {provided => (
                            <div className="bg-white">

                                <TaskList ref={provided.innerRef} {...provided.droppalbeProps}>
                                    <div>
                                        {props.tasks == "" && <div className="mt-12 mt-32 mb-32">
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

                {/* <button className="w-4 bg-gray-400 mt-8 mb-8" id="mydivheader" onClick={() => {
                }}
                    onMouseDown={() => {
                    }}
                /> */}
            </div>
            <style jsx>{`
            #my-canvas:after {
                content: " ";
                background-color: #ccc;
                position: absolute;
                // right: 0;
                // margin-left: 25px;
                width: 9px;
                height: 86%;
                cursor: w-resize;
                margin-top:34px;
                // margin-bottom:150px;
            }  
             `}</style>
        </div>
        // </Container1>
    );
}
