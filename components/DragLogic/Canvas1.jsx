import React, { useState, useEffect } from "react";
import Task, { Tasks2 } from "./Tasks";
import { Droppable, Draggable } from "react-beautiful-dnd-next";
import { AiOutlineMobile, AiOutlineDesktop, AiOutlineTablet, FiCopy, AiOutlineCopy } from 'react-icons/ai';
export default function Canvas1(props) {
    let { FileName, setFileName } = props;
    const [canvasWidth, setCanvasWidth] = useState(1100);
    const [variableTop, setVariableTop] = useState(100);
    const [variableLeft, setVariableLeft] = useState(330);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [currentSize, setCurrentSize] = useState("desktop");
    const [Preview, setPreview] = useState(true);
    const [render, reRender] = useState(1);
    const [test, setTest] = useState("test");
    const [tasks2Loaded, setTasks2Loaded] = useState(false);
    var x = 0;
    useEffect(() => {
        // resizeDivOnDrag();
        reRender(render)
    }, [render, Preview, tasks2Loaded])
    function resizeDivOnDrag() {
        setTest("into the divdrag function called by useefect :" + x + 1);
        const BORDER_SIZE = 4;
        const panel = document.getElementById("my-canvas");

        let m_pos;
        function resize(e) {
            setTest("into the resize function :" + x + 1);
            const dx = m_pos - e.x;
            m_pos = e.x;
            let CanvasWidthInNum = (parseInt(getComputedStyle(panel, '').width) - 0);
            // if (CanvasWidthInNum > 549 ) {
            if (CanvasWidthInNum > 549 && CanvasWidthInNum < 1290) {
                setTest("condition true resize function :" + x + 1);
                panel.style.width = (parseInt(getComputedStyle(panel, '').width) - dx) + "px";
                reRender(render + 1);
            }
            // else {
            if (CanvasWidthInNum > 1290) {
                (panel.style.width = 1250 + "px")
                reRender(render + 1);
            }
            if (CanvasWidthInNum < 550) {
                (panel.style.width = 551 + "px")
            }
            // }
        }

        panel.addEventListener("mousedown", function (e) {
            setTest("into the mousedown event :" + x + 1);
            if (e.offsetX < BORDER_SIZE) {
                m_pos = e.x;
                setTest("condition true in mousedown event :" + x + 1);
                document.addEventListener("mousemove", resize, false);
            }
        }, false);

        document.addEventListener("mouseup", function () {
            setTest("into the mouse up event :" + x + 1);
            document.removeEventListener("mousemove", resize, false);
        }, false);
    }
    const changeScreenSize = (screenType) => {
        const panel = document.getElementById("my-canvas");
        const screenBtn = document.getElementById(screenType);
        setCurrentSize(screenType);
        switch (screenType) {
            case "desktop":
                // return (panel.style.width = 1600 + "px")
                return (panel.style.width = 75 + "vw")
            case "medium":
                return (panel.style.width = 700 + "px")
            case "small":
                return (panel.style.width = 550 + "px")
            default:
                return panel.style.width = "1100px"
        }
    }

    return (
        /// <Container1>
        <div className=" flex justify-center items-center w-screen h-screen z-1 pl-32 absolute" id="mydiv">
            {/* <h1 className="text-4xl">{test}</h1> */}
            {/* <div className="flex z-1 fixed border w-3/4 h-11/12 resize-x overflow-auto md:max-w-screen-xl sm:max-w-screen-xl lg:max-w-screen-xl " */}
            <div className="flex z-0  border w-3/4 h-11/12 resize-x overflow-auto max-w-screen-xl"
                style={{ minWidth: "550px" }}
                // style={{ top: "13vh", left: "19vw", minWidth: "550px" }}
                id="my-canvas" >
                <div className=" border border-solid border-gray-400 flex flex-col w-full "  >
                    <div className="bg-gray-100 h-12 border-b border-gray-400 justify-between flex items-center pl-4 pr-4">
                        <div className="flex w-20 justify-between">
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                            <div className="w-5 bg-gray-400 h-5 rounded-full" />
                        </div>
                        <div className="w-40" />
                        <div className="bg-white w-64 h-8 flex justify-center items-center border ml-2 mr-2">
                            {/* <h4>index.html</h4> */}
                            <input onChange={(text) => { setFileName(text.target.value) }} value={FileName}
                                placeholder="FIle Name" className="h-full w-full text-center" />
                        </div>
                        <div className="flex w-48 justify-around items-center">
                            <h1 onClick={() => { setPreview(true) }}
                                className={` text-xl cursor-pointer hover:bg-gray-300 ${Preview ? "text-blue-600 " : "text-gray-600"} `}>Preview</h1>
                            <h1 onClick={() => { setPreview(false) }}
                                className={` text-xl cursor-pointer hover:bg-gray-300 ${!Preview ? "text-blue-600 " : "text-gray-600"} `}>Code</h1>
                            {!Preview && tasks2Loaded && <div onClick={() => {
                                const panel = document.getElementById("my-canvas");
                                const textField = document.createElement('textarea');
                                textField.style.height = "1px";
                                textField.style.overflow = "hidden"
                                textField.innerText = panel.outerHTML;
                                document.body.appendChild(textField);
                                textField.select();
                                document.execCommand('copy');
                                alert("Copied");
                            }}
                                className="cursor-pointer hover:bg-gray-400" >  <AiOutlineCopy size={24} />
                            </div>}
                        </div>
                        <div className="flex w-24 justify-between items-center">
                            <AiOutlineDesktop size={26} onClick={() => { changeScreenSize("desktop") }} className={`${currentSize == "desktop" && "bg-gray-300"}`} />
                            <AiOutlineTablet size={25} onClick={() => { changeScreenSize("medium") }} className={`${currentSize == "medium" && "bg-gray-300"}`} />
                            <AiOutlineMobile size={22} onClick={() => { changeScreenSize("small") }} className={`${currentSize == "small" && "bg-gray-300"}`} />
                        </div>
                    </div>
                    <Droppable droppableId={props.column.id}>
                        {provided => {
                            return (
                                <div>
                                    {/* {!Preview && <div className="z-30 absolute bg-gray-600"style={{ height: "70vh" }} > code </div>} */}
                                    <div className="bg-white overflow-scroll border h-full " style={{ height: "70vh" }} id={"main-canvas"}>
                                        {/* <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link> */}
                                        <link href="./tailwind.min.css" rel="stylesheet"></link>
                                        <div className={`p-8 m-2   ${props.isDraggingOver ? "bg-blue-400" : "bg-white"}`}
                                            ref={provided.innerRef} {...provided.droppalbeProps}>
                                            <div id="test3">
                                                {props.tasks == "" && <div className="mt-12 mt-32 mb-32 ">
                                                    <h1 className="text-xl text-center">Start Creating a Template by selecting relevent UI Components</h1>
                                                    <h1 className="text-md text-center text-gray-600 mt-5">Drag & drop them here. You can change the default tailwind styles by clicking the change styles button.</h1>
                                                </div>}
                                                {props.tasks.map((task, index) => {
                                                    // console.log("tasks in canvas mapped ", props)
                                                    if (Preview)
                                                        return (
                                                            <Task key={task.id} task={task} index={index} myData={props.myData} Preview={Preview} reRender={reRender} render={render} ></Task>
                                                        )
                                                    else {

                                                        return (
                                                            <div className=" h-0 overflow-hidden" id="allTasks">
                                                                <Tasks2 key={task.id} task={task} index={index} myData={props.myData} Preview={Preview} setTasks2Loaded={setTasks2Loaded} reRender={reRender} render={render}></Tasks2>
                                                                {/* <code className="text-xl text-blue-600">{document.getElementById('task_id2').innerHTML} </code> */}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                {/* {!Preview && tasks2Loaded && <code className="text-xl text-blue-600">{document.getElementById("allTasks").outerHTML} </code>} */}
                                            </div>
                                            {!Preview && tasks2Loaded && <code className="text-xl text-blue-600">{document.getElementById("test3").outerHTML} </code>}
                                            {/* {!Preview && document.getElementById("test3").outerHTML} */}
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                    </Droppable>
                </div>
                {/* <span className="myCursor border bg-gray-500 w-2 " /> */}
            </div>

            <style jsx>{`
            .myCursor {
                cursor: w-resize;
            }
             `}</style>
        </div>
        // </Container1>
    );
}
