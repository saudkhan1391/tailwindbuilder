import React, { useState, useRef } from 'react'
import uuid from 'uuid/v4';
import Head from 'next/head'
import Sample1, { Sample2 } from '../components/DraggableComponents/sample1'

import { initialData2 } from "../components/DragLogic/initial_data";
import Column from "../components/DragLogic/column";
import { DragDropContext } from "react-beautiful-dnd-next";
import FileSaver from 'file-saver';
import Canvas1 from '../components/DragLogic/Canvas1';
const Home = () => {
    function download() {
        var pageHTML = window.document.getElementById('main-canvas').outerHTML;
        let blob = new Blob([pageHTML], { type: 'data:attachment/text,' });
        // let blob = new Blob([window.hyee.innerHTML], { type: 'data:attachment/text,' });
        saveAs(blob, "helloworld.html");
    }

    const [selectedOption, setSelectedOption] = useState("");
    const [clickedComponent, setClickedComponent] = useState("");
    const menuDetails = (selectedOption) => {
        switch (selectedOption) {
            case "Navigations":
                return (<div> <Sample1 title="Navigations" /> <Sample2 /> </div>)
            case "Headers":
                return (<div> <Sample1 title="Headers" /> <Sample2 /> </div>)
            case "Contents":
                return (<div> <Sample1 title="Contents" /> <Sample2 /> </div>)
            case "Features":
                return (<div> <Sample1 title="Features" /> <Sample2 /> </div>)
            case "How":
                return (<div> <Sample1 title="How it works ?" /> <Sample2 /> </div>)
            case "Testimonials":
                return (<div> <Sample1 title="Testimonials" /> <Sample2 /> </div>)
            case "Portfolio":
                return (<div> <Sample1 title="Portfolio" /> <Sample2 /> </div>)
            case "Team":
                return (<div> <Sample1 title="Team" /> <Sample2 /> </div>)
            case "Pricing":
                return (<div> <Sample1 title="Pricing" /> <Sample2 /> </div>)
            case "Facts":
                return (<div> <Sample1 title="Facts" /> <Sample2 /> </div>)
            case "Contacts":
                return (<div> <Sample1 title="Contracts" /> <Sample2 /> </div>)
            case "Footers":
                return (<div> <Sample1 title="Footers" /> <Sample2 /> </div>)
            default:
                // return 
                return (<div>Null</div>)
        }
    }
    const [initialData, setInitialData] = useState(initialData2);
    const [canvasData, setCanvasData] = useState(initialData2);
    // console.log(initialData, "initial data");
    const onDragEnd = result => {
        console.log(result, "result 1");
        const { destination, source, draggableId } = result;
        if (!destination) {
            console.log(" ! destination")
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            console.log("destination = source")
            return;
        }

        const start = initialData.columns[source.droppableId];
        const finish = canvasData.columns[destination.droppableId];
        if (start === finish) {
            // const newTaskIds = Array.from(initialData.columns[source.index].rows);
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            // console.log("new task ids : ", newTaskIds)
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };
            // console.log("new column", newColumn)
            const newState = {
                ...initialData,
                columns: {
                    ...initialData.columns,
                    [newColumn.id]: newColumn
                }
            };
            setInitialData(newState);
            // console.log("new state of initial data ", newState)
            return;
        }
        else{
        const startTaskids = Array.from(start.taskIds);
        if (clickedComponent != "column-1") {
            startTaskids.splice(source.index, 1);
        }
        const newStart = { ...start, taskIds: startTaskids };

        const finishTaskids = Array.from(finish.taskIds);
        // finishTaskids.splice(destination.index, 0, draggableId);
        // finishTaskids.splice(destination.index, 0, "task-5");
        let uniqueId= uuid()
        finishTaskids.splice(destination.index, 0, "task-5");
        // finishTaskids[destination.index]=draggableId;
        // finishTaskids.push(draggableId+1);
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        // const item = sourceClone[droppableSource.index];
        const droppableSource = destination.droppableId;
        const item = sourceClone[droppableSource.index];

        // destClone.splice(destination.index, 0, { ...item, id: "task-5" });
        destClone.splice(destination.index, 0, { ...item, id: uuid() });
        // return destClone;
        // finishTaskids.push(454);
        const newFinish = { ...finish, taskIds: finishTaskids };
        // const newFinish = { ...finish, taskIds: destClone };
        let tasks = (canvasData.tasks);
        // let newTasks= {...tasks,"task-5": { id: "task-5", content: "Cook dinner 5" }}
        let newTasks = { ...tasks, "task-55": { id: "task-5", content: "Cook dinner 5" } }

        const newState = {
            ...initialData, columns: {
                ...initialData.columns,
                //   [newStart.id]: newStart,
                [newFinish.id]: newFinish
            },
            tasks: newTasks
        }

        console.log("newfinish 1 : ", newFinish);
        console.log("new tasks 1 : ", newTasks)
        console.log("nwestate 1 : ", newState)
        console.log("draggable id  : ", draggableId)
        // var column2 = initialData.columns["column-2"];
        // column2.taskIds
        // setInitialData(newState)
        setCanvasData(newState)
    }
}
    const sample = () => {
        return (
            <div className="font-bold ">
                <h1>
                    Sample Component {" "}
                    {selectedOption}
                </h1>
            </div>
        )
    }
    function draggableComponnents() {
        const column = initialData.columns["column-1"];
        let tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
        // if (clickedComponent == "column-1") {
        // }
        var arraytasks = Object.values(initialData.tasks);
        var filteredTasks = column.taskIds.map((taskId) => {
            var findTasks = arraytasks.find(tsk => {
                // return (tsk.id == canvasData.tasks[taskId].id)
                return (tsk.id == taskId)
            })
            return findTasks
        })
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
    }
    function canvas() {
        const column = canvasData.columns["column-2"];
        const tasks = column.taskIds.map((taskId) => canvasData.tasks[taskId]);
        var arraytasks = Object.values(canvasData.tasks);
        // const tasks =  arraytasks.forEach((tsk)=> {tsk.id == taskId  } ) ;
        var filteredTasks = column.taskIds.map((taskId) => {

            var findTasks = arraytasks.find(tsk => {

                var canvasDatadot = canvasData.tasks;
                var taskIdDot = taskId;
                console.log("tsk and task id", tsk, taskIdDot);
                console.log("cavanvasdata.tasks :", canvasDatadot);
                // console.log("tasks only", tasks);
                console.log("tsk.id", tsk.id);
                // if (canvasData.tasks[taskId]) {
                // console.log("all details 2", tsk.id, canvasData.tasks[taskId]);
                // console.log("result", tsk.id == canvasData.tasks[taskId].id);
                // return (tsk.id == canvasData.tasks[taskId].id)
                return (tsk.id == taskId)
                // }
            })
            console.log(" find tasks ", findTasks);
            return findTasks
        })
        console.log("filter tasks ", filteredTasks)
        // const tasks = column.taskIds.map((taskId) => { if (canvasData.tasks.id == taskId) { return (canvasData.tasks[taskId]) } });
        return <Canvas1 key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
    }
    return <div className="bg-gray-100 h-screen" style={selectedOption ? { backgroundColor: "rgba(0,0,0,0.4)" } : {}}>
        <DragDropContext

            onDragEnd={result => {
                onDragEnd(result);
            }}
            onDragStart={(result) => {
                console.log("ondrag start ", result);
                setClickedComponent(result.source.droppableId);
                // const { source, draggableId } = result;
                // const start = initialData.columns[source.droppableId];

                // const startTaskids = Array.from(start.taskIds);
                // if (clickedComponent != "column-1") {
                //   startTaskids.splice(source.index, 0,draggableId);
                // }
                // const newStart = { ...start, taskIds: startTaskids };

                // const newState = {
                //   ...initialData, columns: {
                //     ...initialData.columns,
                //     [newStart.id]: newStart,
                //   }
                // }
                // setInitialData(newState)

            }}
        // onMouseDown={(a) => { console.log("on mouse donw", a) }}
        >
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Nav /> */}
            <div onMouseLeave={() => { setSelectedOption("") }} className="flex w-2/5 " >
                <div className="flex" >
                    <div className="flex flex-col w-56 bg-gray-100 h-screen" >
                        <div className=" border border-b-0 border-gray-400 bg-grey">
                            <img src="/logo.png" className="w-32 m-6 " />
                        </div>
                        <div className="sidenav1  overflow-scroll border border-gray-400 flex flex-col " style={{}}>
                            {/* <a href="#" className="closebtn">&times;</a> */}
                            <h4 href="#" className="text-gray-500 font-bold p-1 ml-8 text-lg "  >Base</h4>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300 text-black" onMouseOver={() => { setSelectedOption("Navigations"); }}  >Navigations</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Headers"); }}>Headers</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Contents"); }}>Contents</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Features"); }}>Features</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("How"); }}>How it works ?</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Testimonials"); }}>Testimonials</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Portfolio"); }}>Portfolio</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Team"); }}>Team</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Pricing"); }}>Pricing</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Facts"); }}>Facts</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Contacts"); }}>Contacts</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline duration-300" onMouseOver={() => { setSelectedOption("Footers"); }}>Footers</a>

                            <h4 href="#" className="text-gray-500 font-bold mt-5  p-1 ml-8 text-lg">Pages</h4>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline" >Sign In</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline" >BLog</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline" >Ecoomerce</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline" >Admin</a>
                            <a href="#" className="p-1 text-lg ml-8 hover:bg-gray-300 no-underline" >HTTP Codes</a>

                            <h4 href="#" className="text-gray-500 font-bold mt-5 p-1 ml-8 text-lg" >Utils</h4>
                            <a href="#" className="p-1 text-lg ml-8  hover:bg-gray-300 no-underline">Cookies</a>
                            <a href="#" className="p-1 text-lg ml-8  hover:bg-gray-300 no-underline">Call to action</a>
                            <a href="#" className="p-1 text-lg ml-8  hover:bg-gray-300 no-underline">Gallery</a>
                            <a href="#" className="p-1 text-lg ml-8  hover:bg-gray-300 no-underline">Grid</a>
                            <a href="#" className="p-1 text-lg ml-8  hover:bg-gray-300 no-underline">Pagination</a>
                        </div>
                        {/* <div className="h-32 w-10  bg-black" >sdsd </div> */}
                    </div>
                    {selectedOption && <div className=" bg-gray-100 h-screen z-10" >
                        <div className="h-5 " />
                        <h5 className="text-center text-grey-100 text-lg mt-5 mb-5">Select a component and drag it to the canvas</h5>
                        {/* {menuDetails(selectedOption)} */}
                        {draggableComponnents()}
                    </div>}
                </div>

                <div className="flex absolute w-full justify-end">
                    <button className="bg-blue-600 h-12 rounded w-32  mt-5 mr-10 text-white font-bold"
                        onClick={() => { download() }}
                    >
                        Export Project
          </button>
                </div>
                <div className="flex  flex-col " ref={(iref) => window.hyee = iref} id="abc" >
                    {canvas()}
                </div>
            </div>
        </DragDropContext>
    </div>
}

export default Home
