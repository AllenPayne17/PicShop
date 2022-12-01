import React, { createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider({children}) {

    const [photos, setPhotos] = useState([]);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [fevoriteID, setFevoriteID] = useState(() => {
        return JSON.parse(window.localStorage.getItem('liked')) || []
    })
    const [cartItem, setCartItem] = useState(() => {
        return JSON.parse(window.localStorage.getItem('items')) || []
    })

    useEffect(() => {
        if(fevoriteID){
            window.localStorage.setItem('liked', JSON.stringify(fevoriteID))
        }
    }, [fevoriteID])

    useEffect(() => {
        if(cartItem){
            window.localStorage.setItem('items', JSON.stringify(cartItem))
        }
    }, [cartItem])

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
    
    function addToStorage(id) {
        setFevoriteID(prevID => [...prevID, id])
    }
    function removeFromStorage(id) {
        setFevoriteID(prevID => {
            return prevID.filter(fevorited => fevorited !== id)
        })
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

    const fetchImages = async () => {
        
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&count=10`)
        const data = await response.json()
        setPhotos([...photos, ...data])
    }
    useEffect(() => {
        fetchImages()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Context.Provider value={{
            photos,
            fetchImages,
            windowSize, 
            fevoriteID,
            addToStorage,
            removeFromStorage,
            addToCart, 
            cartItem,
            removeFromCart, 
            toggleDelete}}>
            {children}
        </Context.Provider>
    )

}
export {Provider, Context}