import React, { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Sample1, { Sample2 } from '../components/DraggableComponents/sample1'

import { initialData2 } from "../components/DragLogic/initial_data";
import Column from "../components/DragLogic/column";
import { DragDropContext } from "react-beautiful-dnd-next";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const menuDetails = (selectedOption) => {
    // alert("asdfsdf");
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
  console.log(initialData, "initial data");
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
    const finish = initialData.columns[destination.droppableId];
    if (start === finish) {
      // const newTaskIds = Array.from(initialData.columns[source.index].rows);
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      console.log("new task ids : ", newTaskIds)
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      console.log("new column", newColumn)
      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn
        }
      };
      setInitialData(newState);
      console.log("new state of initial data ", newState)
      return;
    }
    const startTaskids = Array.from(start.taskIds);
    startTaskids.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskids };

    const finishTaskids = Array.from(finish.taskIds);
    finishTaskids.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskids };
    const newState = {
      ...initialData, columns: {
        ...initialData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    setInitialData(newState)
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
    const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} myData={sample} />;
  }
  function canvas() {
    const column = initialData.columns["column-2"];
    const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} myData={sample}  />;
  }
  return <div>
    <DragDropContext
      onDragEnd={result => {
        onDragEnd(result);
      }
      }
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}
      <div className="md:flex">
        <div className="sidenav">
          <a href="#" className="closebtn">&times;</a>
          <a href="#" style={{ color: "grey" }} >Base</a>
          <a href="#" onClick={() => { setSelectedOption("Navigations"); }}>Navigations</a>
          <a href="#" onClick={() => { setSelectedOption("Headers"); }}>Headers</a>
          <a href="#" onClick={() => { setSelectedOption("Contents"); }}>Contents</a>
          <a href="#" onClick={() => { setSelectedOption("Features"); }}>Features</a>
          <a href="#" onClick={() => { setSelectedOption("How"); }}>How it works ?</a>
          <a href="#" onClick={() => { setSelectedOption("Testimonials"); }}>Testimonials</a>
          <a href="#" onClick={() => { setSelectedOption("Portfolio"); }}>Portfolio</a>
          <a href="#" onClick={() => { setSelectedOption("Team"); }}>Team</a>
          <a href="#" onClick={() => { setSelectedOption("Pricing"); }}>Pricing</a>
          <a href="#" onClick={() => { setSelectedOption("Facts"); }}>Facts</a>
          <a href="#" onClick={() => { setSelectedOption("Contacts"); }}>Contacts</a>
          <a href="#" onClick={() => { setSelectedOption("Footers"); }}>Footers</a>

          <a href="#" style={{ color: "grey", marginTop: 10 }}>Pages</a>
          <a href="#">Sign In</a>
          <a href="#">BLog</a>
          <a href="#">Ecoomerce</a>
          <a href="#">Admin</a>
          <a href="#">HTTP Codes</a>

          <a href="#" style={{ color: "grey", marginTop: 10 }}>Utils</a>
          <a href="#">Cookies</a>
          <a href="#">Call to action</a>
          <a href="#">Gallery</a>
          <a href="#">Grid</a>
          <a href="#">Pagination</a>
        </div>

        {selectedOption && <div className="componentsWithMenu">
          <h5 className="text-center text-grey-100 text-lg mt-5 mb-5">Select a component and drag it to the canvas</h5>
          {/* {menuDetails(selectedOption)} */}
          {draggableComponnents()}
        </div>}
        <div>
          {canvas()}
        </div>
        {/* <div className="canvas" >
        <h1 className="text-xl font-bold ml-10"> Canvas</h1>
        <div className=" border  border-black h-full mt-5">
        </div>
      </div> */}
      </div>
    </DragDropContext>
    <style jsx>{`
    
body {
  font-family: "Lato", sans-serif;
  background-color: black;
}
.canvas{
  border:solid 1px;
  border-color: black;
  width:100%;
  margin-left:50px;
  margin-right:50px;
  margin-top:5px;
}
.componentsWithMenu{
width:400px;
height:1000px;
background-color: #efefef; 
}
.main{
  height:300px;
  background-color: red;
}
.sidenav {
  // height: 1000px;
  // width: 230px;
  padding-right:10px;
  // position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: #rgb(255, 255, 255);
  background-color: black;
  // overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #efefef;
  // color: #818181;
  // color: #222;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
      `}</style>
  </div>
}

export default Home
