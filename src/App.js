import React from "react";
import imageAPI from "./API/api";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ShowList from "./components/ShowList";
import './App.css'

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await imageAPI(term);
        setImages(result);
    };

    return (
        <div className="dev-app">
            <h1>Welcome to generate images based on Unsplash API</h1>
            <SearchBar onSubmit={handleSubmit} />
            <ShowList images={images} />
        </div>
    );
}

export default App;
