import React, {useRef, useState, useEffect, useContext} from "react";
import { format } from "date-fns";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import '../styles/desktop.css';
import { Context } from "../Context";

export default function DesktopImage(props) {

    const {
        toggleFevorite, 
        cartItem, 
        removeFromCart, 
        addToCart
    } = useContext(Context)

    const [hovered, setHovered] = useState()
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)   
        }
    }, [])

    function heart() {
        if(props.liked_by_user) {
            return <BsHeartFill size={32} color="red" onClick={() => toggleFevorite(props.id) } />
        }else {
            return <BsHeart size={32} color="white" onClick={() => toggleFevorite(props.id) } />
        }
    }

    function cart() {
        const itemAdded = cartItem.find(photo => photo.id === props.id)
        if(itemAdded){
            return <MdBookmarkAdded size={32} color="blue" onClick={() => removeFromCart(props)}/>
        }else {
            return <MdBookmarkAdd size={32} color="#fcfcfc" onClick={() => addToCart(props)}/>
        }
    }

    function heartAndCart() {
        if(hovered) {
            return (
                <div className="overlay top">
                    {heart()}
                    {cart()}
                </div>
            )
        }
    } 

    function profile() {
        if(hovered) {
            return (
                <div className="profile-info overlay bottom " hide>
                <img className="profile" src={props.user.profile_image.medium} alt="" />
                <ul>
                    <li className="name" style={{color: 'white'}}>{props.user.name}</li>
                    <li className="date" style={{color: 'white'}} >{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
                </ul>
            </div>
            )
        }
    }

    return(
        <div className="image-container" ref={ref}>
            {profile()}
            <img className="image" src={props.urls.full} alt="" />
            {heartAndCart()}
        </div>
    )
}