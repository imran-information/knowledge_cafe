import { CiBookmarkCheck } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleMarkTime, handleBookMarkAdd }) => {
    const { id, cover_img, author_img, author_name, post_date, title, reading_time, hash_tag } = blog

    return (
        <article className="my-8">
            <img className="rounded" src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center mt-3">
                    <img className="w-16" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author_name}</h3>
                        <p><small>{post_date} (4 days ago)</small></p>
                    </div>
                </div>
                <div className='flex'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookMarkAdd(blog)} className="text-2xl ml-2 text-purple-900"><CiBookmarkCheck /></button>
                </div>
            </div>
            <h1 className="font-bold text-4xl my-3">{title}</h1>
            {
                hash_tag.map((tags, ind) => <a key={ind} className="mr-4 text-sm" href="">{tags}</a>)
            }
            <br />
            <button onClick={() => handleMarkTime(id, reading_time)} className='mt-4 underline text-purple-600'>Mark as read</button>
        </article>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleMarkTime: PropTypes.func.isRequired,
    handleBookMarkAdd: PropTypes.func.isRequired
}

export default Blog;