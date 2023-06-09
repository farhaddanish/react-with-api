import React from "react";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        
        onSubmit(search);
    };

    const inputHandler = (event) => {
        const searchValue = event.target.value;
        setSearch(searchValue);
  
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="name">Search:</label>
                <input
                    onChange={inputHandler}
                    value={search}
                    type="text"
                    id="search"
                    name="search"
                    required
                />
                
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
