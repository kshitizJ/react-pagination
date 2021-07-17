import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

    // creating all the state hooks required

    // [post] to store all the data when fetched, initialized with empty array
    const [post, setPost] = useState([])

    // [loading] display loading massage when the data is being fetched
    const [loading, setLoading] = useState(false)

    // [currentPage] will show which page are you at
    const [currentPage, setCurrentPage] = useState(1)

    // [postsPerPage] will display n (here it is 10) number of posts on a paticular page
    const [postsPerPage] = useState(10)

    // useEffect is used when the component is loaded and then the data is being fetched
    useEffect(() => {

        // async function returns promises, await is used in most of the cases with async and await only works inside async so that we can reduce .then() promise

        const fetchPost = async () => {

            // setting loading true while fetching the data
            setLoading(true)

            // fetching the data using axios library
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

            // setting [posts] with incoming data
            setPost(res.data)

            // once the data is being fetched, loading is again false
            setLoading(false)
        }

        // calling the async function
        fetchPost()
    }, [])

    // console.log(post);

    // get current posts
    // to get the index of the last post of the page we multiply currentpage with postsPerPage
    const indexOfLastPost = currentPage * postsPerPage

    // to get the index of the first post of the page we subtract number of posts per page from index of the last page
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    // to get the current post of the page we slice the index of first post and index of last post
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Pagination</h1>
            <Posts posts={currentPost} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate} />
        </div>
    );
}

export default App;
