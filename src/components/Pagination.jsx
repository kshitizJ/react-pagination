import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    // to store the page number required by the posts to get displayed per page
    const pageNumbers = []

    // totalPosts/postsPerPage will give us number of pages required. Looping throught number of pages and pushing it to the pageNumbers array
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        {/* onClick function will pass the number of particular page to paginate and then setCurrentPage will change accordingly and the data will be displayed on that page */}
                        <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
