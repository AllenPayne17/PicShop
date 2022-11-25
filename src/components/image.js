import React from "react";
import { format } from "date-fns";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import '../App.css';

export default function Image(props) {

    console.log(props)

    return(
        <>
        <div className="profile-info">
        <img className="profile" src={props.user.profile_image.medium} alt="" />
        <ul>
            <li className="name">{props.user.name}</li>
            <li className="date">{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
        </ul>
        </div>
            <img className="image" src={props.urls.full} alt="" />
        <div className="profile-btn">
            <BsHeart size={32} />
            <BsPlusSquare size={31} />
        </div>
        <hr />
        </>
    )
}