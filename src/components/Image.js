import React, {useContext} from "react";
import { format } from "date-fns";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import useHover from "../hooks/useHover";
import '../App.css';
import { Context } from "../Context";

export default function Image(props) {

    const [hovered, ref] = useHover()

    const {
        toggleFevorite, 
        cartItem, 
        removeFromCart, 
        addToCart,
        windowSize
    } = useContext(Context)

    
    const heartCartColor = windowSize.innerWidth < 800 ? "gray": "white"

    function heart() {
        if(props.liked_by_user) {
            return <BsHeartFill size={32} color="red" onClick={() => toggleFevorite(props.id) } />
        }else {
            return <BsHeart size={32} color={heartCartColor} onClick={() => toggleFevorite(props.id) } />
        }
    }

    function cart() {
        const itemAdded = cartItem.find(photo => photo.id === props.id)
        if(itemAdded){
            return <MdBookmarkAdded size={32} color="blue" onClick={() => removeFromCart(props)}/>
        }else {
            return <MdBookmarkAdd size={32} color={heartCartColor} onClick={() => addToCart(props)}/>
        }
    }



    function heartAndCart() {

        const heartCart = (
            <div className="overlay top">
                {heart()}
                {cart()}
                {windowSize.innerWidth < 800 ? <hr /> : ""}
            </div>
        )

        if(windowSize.innerWidth > 800 && hovered) {
            return heartCart
        }else if(windowSize.innerWidth < 800) {
            return heartCart
        }
    } 

    function profile() {

        const color = windowSize.innerWidth < 800 ? {color: "black"} : {color: "white"}

        const profile = (
            <div className="profile-info overlay bottom " hide>
            <img className="profile" src={props.user.profile_image.medium} alt="" />
            <ul>
                <li className="name" style={color}>{props.user.name}</li>
                <li className="date" style={color} >{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
            </ul>
        </div>
        )

        if(windowSize.innerWidth > 800 && hovered) {
            return profile
        }else if(windowSize.innerWidth < 800){
            return profile
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