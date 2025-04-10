import React from "react";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
    return (
        <>
            <div className="pagination">
                <ul className="pagination justify-content-center">
                {[...Array(totalPages)].map((_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Pagination