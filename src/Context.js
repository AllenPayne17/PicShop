import React, { createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider({children}) {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await response.json()
            setPhotos(data)
        }
        fetchImages()
    },[])

    return(
        <Context.Provider value={{photos}}>
            {children}
        </Context.Provider>
    )

}
export {Provider, Context}