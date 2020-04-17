import React from 'react'

export default function Sample1(props) {
    let {title} = props
    return (
        // <div className="border-solid border-4 border-gray-600" >
        <div className="border-solid border-2 border-gray-600 ml-5 mr-5" >
            <h5 className="ml-5 font-bold">
                {/* Sample 1 Navigation */}
                Sample 1 {title}
            </h5>
        </div>
    )
}
export  function Sample2() {
    return (
        // <div className="border-solid border-4 border-gray-600" >
        <div className="border-solid border-2 border-gray-600 mt-5 ml-5 mr-5" >
            <h5 className="ml-5 font-bold">
                Sample 2 Navigation
            </h5>
        </div>
    )
}