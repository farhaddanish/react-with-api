import React from "react";
import { useState } from "react";
import "./SearchBar.css";

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
        <div className="div-form">
            <form onSubmit={submitHandler} className="form-search">
                <label for="name">Search:</label>
                <input
                    className="input-search"
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
