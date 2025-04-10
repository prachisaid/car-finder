import React from 'react';
import Card from './Card';
import { useState } from 'react';
import Filters from './Filters';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

function Cards({cars, setCars, wishlist, toggleWishlist}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const brands = [...new Set(cars.map(car => car.brand))];

  const filtered = cars.filter((car) => {
    const matchesSearch = (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.fuelType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;
    return matchesSearch && matchesBrand;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'low-to-high') return a.price - b.price;
    if (sortOrder === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const currentItems = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <>
       <div>
          <div className='mini-nav' >
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filters
              brands={brands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </div>
          <div className='cards'>
            {currentItems.map((car, i) => (
              <Card apiData={car} key={i} wishlist={wishlist} toggleWishlist={toggleWishlist} 
              isWished={wishlist.some(item => item.name === car.name && item.brand === car.brand)} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
    </>
  );
}

export default Cards;
