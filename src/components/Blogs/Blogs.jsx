import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;