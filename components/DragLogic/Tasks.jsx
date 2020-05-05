import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd-next";
import HeroSections from "../DraggableComponents/HeroSections";
import FeatureSection from "../DraggableComponents/FeatureSections";
var currentIndex = 0;
export default function Tasks(props) {

  let { Preview, reRender, render, index, task } = props;
  // const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    // reRender(render + 1)
    // setCurrentIndex(index);
    currentIndex = index;
    console.log(task, index, " cur index and index")
  }, [Preview, render, index]);
  //   const Container3 = styled.div`
  //   border: 1px solid lightgrey;
  //   border-radius: 2px;
  //   padding: 8px;
  //   margin-bottom: 8px;
  //   background-color: ${props => (props.isDragging ? 'lightgreen': 'yellow')}
  // `;
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshot) => {
          return (
            <div id="task_id">
              <div className={`p-8 m-2 border  ${snapshot.isDragging ? "bg-blue-200" : "bg-white"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
              >
                {/* {index == 0 && <div className=" h-48 overflow-hidden">
                  <HeroSections />
                </div>}
                {index == 1 && <div className=" h-48 overflow-hidden">
                  <FeatureSection />
                </div>} */}
                {/* <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
                */}
                 <div className=" h-48 overflow-hidden">
                {props.task.content}
                 </div>
                {/* {props.myData()} */}
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
// export function Tasks2(props) {
//   return(<div>
//     {props.children}
//   </div>)
// }
export function Tasks2(props) {
  let { Preview, setTasks2Loaded, render, reRender, index } = props;
  useEffect(() => {
    // reRender(render + 1);
    console.log(currentIndex, index, " cur index and index in tasks 2")
  }, [Preview, render, index])
  return (
    <div >
      <Draggable draggableId={props.task.id} index={props.index} >
        {(provided, snapshot) => {
          setTasks2Loaded(true)
          reRender(render + 1)
          return (
            <div id="task_id2">
              <div className={`p-8 m-2 border  ${snapshot.isDragging ? "bg-blue-200" : "bg-white"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}

              >
                {/* {index == 0 && <div className=" overflow-hidden">
                  <HeroSections />
                </div>}
                {index == 1 && <div className=" overflow-hidden">
                  <FeatureSection />
                </div>} */}
                {/* <h4 className="text-red-600 font-bold text-lg text-center">Code Block</h4>
              {props.children} */}
                {/* {props.myData()} */}
                {props.task.content}
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
