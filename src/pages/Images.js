import React, { useContext } from "react";
import "../App.css";
import Header from '../components/Header';
import Image from "../components/Image";
import { Context } from "../Context";
import Loader from "../components/Loader";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Images() {

    const {photos, fetchImages} = useContext(Context)

    const Images = photos.map((image) => (
        <Image key={image.id} {...image} />
    ))

    return (
        <>
            <Header />
            <InfiniteScroll
                dataLength={photos.length}
                hasMore={true}
                next={fetchImages}
                loader={<Loader />}
            >
                <div className="container">
                    {Images}
                </div>
            </InfiniteScroll>
        </>
    )
}