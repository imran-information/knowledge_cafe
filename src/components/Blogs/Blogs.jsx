import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleMarkTime,handleBookMarkAdd }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const blogsDataLoad = async () => {
            const res = await fetch('/public/blogs.json');
            const data = await res.json()
            setBlogs(data);
        }
        blogsDataLoad()
    }, [])


    return (
        <div className="md:w-2/3">
            <h1 className="text-xl font-bold">Knowledge Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleMarkTime={handleMarkTime} handleBookMarkAdd={handleBookMarkAdd} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleMarkTime: PropTypes.func.isRequired,
    handleBookMarkAdd: PropTypes.func.isRequired
}
export default Blogs;