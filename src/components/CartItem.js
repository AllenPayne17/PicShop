import React, { useContext } from "react";
import "../App.css";
import {AiOutlineDelete, AiFillDelete} from 'react-icons/ai';
import useHover from "../hooks/useHover";
import { Context } from "../Context";


export default function CartItem(props) {

    const [hovered, ref] = useHover()
    const {toggleDelete} = useContext(Context)

    const deleteBtn = () => hovered ? <AiFillDelete color="red" size='31' /> : <AiOutlineDelete size='31' />

    return(
        <>
        <div className="item-container">
                <img src={props.urls.small} alt="" />
            <div className="info">
                <p>{props.alt_description}</p>
                <p>by {props.user.name}</p> 
            </div>
            <div className="delete" ref={ref} onClick={() => {toggleDelete(props.id)}}>
                {deleteBtn()}
            </div>
        </div>
        <hr />
        </>
    )
}