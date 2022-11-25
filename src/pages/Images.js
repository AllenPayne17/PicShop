import React, { useContext } from "react";
import "../App.css";
import Header from '../components/Header';
import Image from "../components/image";
import { Context } from "../Context";

export default function Images() {

    const {photos} = useContext(Context)

    const images = photos.map((image) => (
        <Image key={image.id} {...image} />
    ))
    
    return (
        <>
            <Header />
            <div className="container">
                {images}
            </div>
        </>
    )
}