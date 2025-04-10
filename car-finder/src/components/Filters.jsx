import React from "react";

function Filters({ brands, selectedBrand, setSelectedBrand, sortOrder, setSortOrder }) {
    return (
        <>
             <select className="form-select brands" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                <option value="">All Brands</option>
                {brands.map((brand, i) => (
                    <option key={i} value={brand}>{brand}</option>
                ))}
            </select>

            <select
                className="form-select price"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                >
                <option value="">Sort by Price</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
            </select>
        </>
    )
}

export default Filters