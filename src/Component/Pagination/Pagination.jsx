import { useState } from "react";


const Pagination = ({ totalProducts, setProducts }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [productsPerPage, setProductsPerPage] = useState(6)

    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pageNumbers = [...Array(totalPages).keys()]



    return (
        <div>
            {
                pageNumbers.map(n => <>
                    <button onClick={() => setCurrentPage(n)}  className="btn btn-xs me-4 my-5">{n}</button>
                </>)
            }
        </div>
    );
};

export default Pagination;