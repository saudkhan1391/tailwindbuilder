import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Sample1, { Sample2 } from '../components/DraggableComponents/sample1'
import { initialData2 } from "../components/DragLogic/initial_data";
import Canvas from '../components/DragLogic/Canvas';
const Home2 = () => {
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
    console.log(initialData, "initial data");
    return <div className="bg-gray-100 h-screen" style={selectedOption ? { backgroundColor: "rgba(0,0,0,0.4)" } : {}}>
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
                    {menuDetails(selectedOption)}
                    {/* {draggableComponnents()} */}
                </div>}
            </div>

            <div className="flex absolute w-full justify-end">
                <button className="bg-blue-600 h-12 rounded w-32  mt-5 mr-10 text-white font-bold"
                    onClick={() => { download() }}>
                    Export Project
          </button>
            </div>
            <div className="flex  flex-col " ref={(iref) => window.hyee = iref} id="abc" >
                {/* {canvas()} */}
                <Canvas />
            </div>
        </div>
    </div>
}

export default Home2
