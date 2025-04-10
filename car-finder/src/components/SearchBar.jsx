import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <>
            <input
                type="text"
                className="form-control mb-3 search-bar"
                placeholder="Search by name, brand, fuel type"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    )
}

export default SearchBar