import React from "react";
import '../App.css'

export default function Loader() {
    return (
        <div className="loader">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}