import React, { useState, useRef, useEffect } from 'react'
import uuid from 'uuid/v4';
import Head from 'next/head'
import Sample1, { Sample2 } from '../components/DraggableComponents/sample1'
import { initialData2 } from "../components/DragLogic/initial_data";
import Column from "../components/DragLogic/column";
import { DragDropContext } from "react-beautiful-dnd-next";
import FileSaver from 'file-saver';
import Canvas1 from '../components/DragLogic/Canvas1';
import JSZip from 'jszip';
import FeatureSection from '../components/DraggableComponents/FeatureSections';
// import tailwindMinCss from "../node_modules/tailwindcss/dist/tailwind.min.css"
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [MouseOverMenu, setMouseOverMenu] = useState(false);
  const [clickedComponent, setClickedComponent] = useState("");
  const [FileName, setFileName] = useState("Index.html");
  const [minCssFile, setMinCssFile] = useState("Index.zip");
  const [initialData, setInitialData] = useState(initialData2);
  const [canvasData, setCanvasData] = useState(initialData2);
  const [render, reRender] = useState(1);
  useEffect(() => {
    fetch("../static/tailwind.min.css").then(res => res.text())
      .then(res => { setMinCssFile(res) });
    reRender(render + 1);
  }, [selectedOption])
  function download() {
    var pageHTML = window.document.getElementById('main-canvas').innerHTML;
    // let blob = new Blob([pageHTML], { type: 'data:attachment/text,' });
    // saveAs(blob, "helloworld.html");

    // var blob = new Blob(["sdsdds"], { type: "application/zip" });
    // saveAs(blob, "data.zip");
    var zip = new JSZip();
    zip.file(FileName, pageHTML);
    zip.file("tailwind.min.css", minCssFile);
    // zip.file("Hello.css", MyTailwind);

    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        saveAs(content, "ProjectTB.zip");
      });
  }
  const menuDetails = (selectedOption) => {
    switch (selectedOption) {
      case "Navigations":
        return <FeatureSection />
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

  const onDragEnd = result => {
    // console.log(result, "result 1");
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
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn
        }
      };
      setInitialData(newState);
      return;
    }
    else {
      const startTaskids = Array.from(start.taskIds);
      if (clickedComponent != "column-1") {
        startTaskids.splice(source.index, 1);
      }
      const newStart = { ...start, taskIds: startTaskids };
      const finishTaskids = Array.from(finish.taskIds);
      const uniqueId = uuid()
      finishTaskids.splice(destination.index, 0, uniqueId);
      const sourceClone = Array.from(source);
      const destClone = Array.from(destination);
      const droppableSource = destination.droppableId;
      const item = sourceClone[droppableSource.index];
      destClone.splice(destination.index, 0, { ...item, id: "task-5" });
      const newFinish = { ...finish, taskIds: finishTaskids };
      let tasks = (canvasData.tasks);
      let task = tasks[draggableId];
      tasks[uniqueId] = { ...task, id: uniqueId };
      if (clickedComponent == "column-1") {
        const newState = {
          ...initialData, columns: {
            ...initialData.columns,
            // [newStart.id]: newStart,
            [newFinish.id]: newFinish
          },
          tasks: tasks
        }
        setCanvasData(newState)
      }
      else {
        const finishTaskids2 = Array.from(finish.taskIds);
        finishTaskids2.splice(source.index, 1);
        finishTaskids2.splice(destination.index, 0, uniqueId);
        const newFinish2 = { ...finish, taskIds: finishTaskids2 };
        const newState2 = {
          ...initialData, columns: {
            ...initialData.columns,
            // [newStart.id]: newStart,
            [newFinish2.id]: newFinish2
          },
          // tasks: tasks
        }

        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
          ...start,
          taskIds: newTaskIds
        };
        const newState = {
          ...initialData,
          columns: {
            ...initialData.columns,
            [newColumn.id]: newColumn
          }
        };

        //
        setCanvasData(newState2)
      }
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
    var filteredTasks = [];
    switch (selectedOption) {
      case "Navigations":
        filteredTasks = [initialData.tasks["task-1"], initialData.tasks["task-2"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Headers":
        filteredTasks = [initialData.tasks["task-3"], initialData.tasks["task-4"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Contents":
        filteredTasks = [initialData.tasks["task-5"], initialData.tasks["task-6"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Features":
        filteredTasks = [initialData.tasks["task-7"], initialData.tasks["task-8"]]
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "How":
        filteredTasks = [initialData.tasks["task-14"]]
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Testimonials":
        filteredTasks = [initialData.tasks["task-11"], initialData.tasks["task-12"]]
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Portfolio":
        filteredTasks = [initialData.tasks["task-13"], initialData.tasks["task-14"]]
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Team":
        filteredTasks = [initialData.tasks["task-1"], initialData.tasks["task-2"]]
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Pricing":
        filteredTasks = [initialData.tasks["task-3"], initialData.tasks["task-4"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Facts":
        filteredTasks = [initialData.tasks["task-5"], initialData.tasks["task-6"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Contacts":
        filteredTasks = [initialData.tasks["task-7"], initialData.tasks["task-8"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      case "Footers":
        filteredTasks = [initialData.tasks["task-10"]];
        return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      // default:
      // return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
      // filteredTasks = [initialData.tasks["task-4"], initialData.tasks["task-5"]]
    }
    // return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
    //     else {
    //   const column = initialData.columns["column-1"];
    //   // let tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
    //   var arraytasks = Object.values(initialData.tasks);
    //   var filteredTasks = column.taskIds.map((taskId) => {
    //     var findTasks = arraytasks.find(tsk => {
    //       return (tsk.id == taskId)
    //     })
    //     return findTasks
    //   })
    //   return <Column key={column.id} column={column} tasks={filteredTasks} myData={sample} />;
    // }
  }
  function canvas() {
    const column = canvasData.columns["column-2"];
    // const tasks = column.taskIds.map((taskId) => canvasData.tasks[taskId]);
    var arraytasks = Object.values(canvasData.tasks);
    // const tasks =  arraytasks.forEach((tsk)=> {tsk.id == taskId  } ) ;
    var filteredTasks = column.taskIds.map((taskId) => {
      var findTasks = arraytasks.find(tsk => {
        return (tsk.id == taskId)
      })
      return findTasks
    })
    // console.log("filter tasks ", filteredTasks)
    // console.log("canvas columns task Ids", column.taskIds)
    return <Canvas1 key={column.id} column={column} tasks={filteredTasks} myData={sample} FileName={FileName} setFileName={setFileName} />;
  }
  return <div className="bg-gray-100 h-screen " style={MouseOverMenu ? { backgroundColor: "rgba(0,0,0,0.4)" } : {}}>
    {MouseOverMenu && <div className="bg-gray-900 z-10 absolute w-screen h-screen opacity-75" />}
    {/* <div class="resize-x border  h-32 w-64 bg-gray-500 overflow-auto">s</div> */}
    <DragDropContext

      onDragEnd={result => {
        onDragEnd(result);
      }}
      onDragStart={(result) => {
        // console.log("ondrag start ", result);
        setClickedComponent(result.source.droppableId);
        // setSelectedOption("")
        setMouseOverMenu(false)
      }}
    // onMouseDown={(a) => { console.log("on mouse donw", a) }}
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}
      <div onMouseLeave={() => { setMouseOverMenu(false) }} className="flex w-2/5" >
        <div className="flex" >
          <div className="flex flex-col bg-gray-100 h-screen z-20" >
            <div className=" border border-b-0 border-gray-400 bg-grey">
              <img src="/logo.png" className="w-32 m-6 " />
            </div>
            <div onMouseOver={() => { setMouseOverMenu(true) }} className="sidenav1  overflow-scroll border border-gray-400 flex flex-col " style={{}}>
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
          </div>
          {<div className={MouseOverMenu ? "bg-gray-100 h-screen z-10 overflow-scroll w-4/5" : "overflow-hidden w-0  "}>
            {/* {selectedOption && <div className=" bg-gray-100 h-screen z-10" > */}
            <div className="h-5 " />
            {MouseOverMenu && <h5 className="text-center text-grey-100 text-lg mt-5 mb-5">Select a component and drag it to the canvas</h5>}
            {/* {menuDetails(selectedOption)} */}
            {<div > {draggableComponnents()}</div>}
            {/* {<div className={!selectedOption && "opacity-0"}> {draggableComponnents()}</div>} */}
          </div>}
        </div>

        <div className="flex absolute z-20 w-full justify-end">
          <button className="bg-blue-600 h-12 rounded w-32  mt-5 mr-10 text-white font-bold"
            onClick={() => { download() }}
          >
            Export Project
          </button>
        </div>
        {/* <div className="flex  flex-col " ref={(iref) => window.hyee = iref} id="abc" > */}
        {canvas()}
        {/* </div> */}
      </div>
    </DragDropContext>
  </div>
}

export default Home
