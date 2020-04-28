import React from 'react'

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    // ev.dataTransfer.setData("text", "drag1");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // ev.target.appendChild(document.getElementById("div1"));
}
export default function Sample1(props) {
    let { title } = props;

    return (

        // <div className="border-solid border-4 border-gray-600" >
        <div className="border-solid border-2 border-gray-600 ml-5 mr-5 h-32" onDrop={(event) => drop(event)}
            onDragOver={(event) => allowDrop(event)} id={"div1"}>
            <div className="ml-5 font-bold text-center text-2xl" id={"drag1"} draggable={true} onDragStart={(event) => drag(event)}>
                <h1>Sample 3 {title}</h1>
            </div>
            <h1 className="ml-5 text-xl">Content</h1>
        </div>
    )
}
export function Sample2() {
    return (
        // <div className="border-solid border-4 border-gray-600" >
        <div className="border-solid border-2 border-gray-600 mt-5 ml-5 mr-5 h-16" id="div2"
            onDrop={(event) => drop(event)} onDragOver={() => allowDrop(event)} >
            <h5 className="ml-5 font-bold">
                Sample 2 Navigation
            </h5>
        </div>
    )
}