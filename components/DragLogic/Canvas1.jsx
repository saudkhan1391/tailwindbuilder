import React, { useState, useEffect } from "react";
import Task from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
import { AiOutlineMobile, AiOutlineDesktop, AiOutlineTablet } from 'react-icons/ai';
export default function Canvas1(props) {
    const [canvasWidth, setCanvasWidth] = useState(1000);
    const [variableTop, setVariableTop] = useState(100);
    const [variableLeft, setVariableLeft] = useState(400);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [currentSize, setCurrentSize] = useState("desktop");
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
    const changeScreenSize = (screenType) => {
        const panel = document.getElementById("my-canvas");
        const screenBtn = document.getElementById(screenType);
        setCurrentSize(screenType);
        switch (screenType) {
            case "desktop":
                return (panel.style.width = 1000 + "px")
            case "medium":
                return (panel.style.width = 700 + "px")
            case "small":
                return (panel.style.width = 300 + "px")
            default:
                return panel.style.width = "1000px"
        }
    }
    console.log(props, "canavs")
    return (
        // <Container1>
        <div className=" flex justify-center  " id="mydiv">

            <div className="  flex absolute z-1 after:bg-black after:w-32 after:h-32 " style={{ top: variableTop, left: variableLeft, width: canvasWidth, }} id="my-canvas" >
                {/* <div  id="right_panel">Hello</div> */}
                <div className=" m-8   border border-solid border-gray-400 flex flex-col" style={{ width: canvasWidth }}>
                    <div className="bg-gray-100 h-12 border-b border-gray-400 justify-between flex items-center pl-4 pr-4">
                        <div className="flex w-20 justify-between">
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                        </div>
                        <div className="bg-white w-64 h-8 flex justify-center items-center border ml-2 mr-2">
                            <h4>index.html</h4>
                        </div>
                        <div className="flex w-24 justify-between items-center">
                            <AiOutlineDesktop size={26} onClick={() => { changeScreenSize("desktop") }} className={`${currentSize == "desktop" && "bg-gray-300"}`} />
                            <AiOutlineTablet size={25} onClick={() => { changeScreenSize("medium") }} className={`${currentSize == "medium" && "bg-gray-300"}`} />
                            <AiOutlineMobile size={22} onClick={() => { changeScreenSize("small") }} className={`${currentSize == "small" && "bg-gray-300"}`} />
                        </div>
                    </div>
                    <Droppable droppableId={props.column.id}>
                        {provided => (
                            <div className="bg-white">

                                <div className={`p-8 m-2 border  ${props.isDraggingOver ? "bg-blue-400" : "bg-white"}`} ref={provided.innerRef} {...provided.droppalbeProps}>
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
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
            <style jsx>{`
            #my-canvas:after {
                content: " ";
                background-color: #ccc;
                position: absolute;
                width: 9px;
                height: 86%;
                cursor: w-resize;
                margin-top:34px;
            }  
             `}</style>
        </div>
        // </Container1>
    );
}
