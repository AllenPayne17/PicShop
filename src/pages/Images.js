import React, { useContext } from "react";
import "../App.css";
import Header from '../components/Header';
import Image from "../components/Image";
import { Context } from "../Context";

export default function Images() {

    const {photos} = useContext(Context)

    const desktopImages = photos.map((image) => (
        <Image key={image.id} {...image} />
    ))

    return (
        <>
            <Header />
            <div className="container">
                {desktopImages}
            </div>
        </>
    )
}