import React, { createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider({children}) {

    const [photos, setPhotos] = useState([]);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
          }
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    },[])

    const toggleDelete = (id) => setCartItem(cartItem.filter(item => item.id !== id))

    function getWindowSize() {
        const { innerWidth } = window;
        return { innerWidth };
    }

    function toggleFevorite(id) {
        const updatePhotos = photos.map(photo => {
            if(photo.id === id){
                return {...photo, liked_by_user: !photo.liked_by_user}
            }
            return photo
        })

        setPhotos(updatePhotos)
    }

    function addToCart(newPhoto) {
        setCartItem(prevPhoto => [...prevPhoto, newPhoto])
    }

    function removeFromCart(removePhoto) {
        setCartItem(prevPhoto => {
            const filterCart = prevPhoto.filter(photo => photo.id !== removePhoto.id)
            return filterCart
        }
        )
    }

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await response.json()
            setPhotos(data)
        }
        fetchImages()
    },[])

    return(
        <Context.Provider value={{photos, windowSize, toggleFevorite, addToCart, cartItem, removeFromCart, toggleDelete}}>
            {children}
        </Context.Provider>
    )

}
export {Provider, Context}