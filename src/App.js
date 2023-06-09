import React from "react";
import imageAPI from "./API/api";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ShowList from "./components/ShowList";

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await imageAPI(term);
        setImages(result);
    };

    return (
        <div>
            <h1>WElcome to generate images based on Unsplash API</h1>
            <SearchBar onSubmit={handleSubmit} />
            <ShowList images={images} />
        </div>
    );
}

export default App;
