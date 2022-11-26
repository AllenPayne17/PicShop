import React from "react";
import { format } from "date-fns";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import '../styles/mobile.css';

export default function MobileImage(props) {

    return(
        <div>
        <div className="profile-info">
        <img className="profile" src={props.user.profile_image.small} alt="" />
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
        </div>
    )
}