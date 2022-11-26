import React, { useContext } from "react";
import "../App.css";
import Header from '../components/Header';
import MobileImage from "../components/MobileImage";
import DesktopImage from "../components/DesktopImage";
import { Context } from "../Context";

export default function Images() {

    const {photos, windowSize} = useContext(Context)

    const mobileImages = photos.map((image) => (
        <MobileImage key={image.id} {...image} />
    ))

    const desktopImages = photos.map((image) => (
        <DesktopImage key={image.id} {...image} />
    ))

    return (
        <>
            <Header />
            <div className="container">
                {windowSize.innerWidth > 800 ? desktopImages : mobileImages}
            </div>
        </>
    )
}