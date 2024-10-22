import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ markTime, markAdd }) => {
    return (
        <div className="md:w-1/3 bg-slate-100 mt-14 ml-5 p-6 rounded">
            <h1 className="border-2 border-purple-400 text-center rounded-md text-xl font-bold text-purple-600 bg-purple-50 py-5">Spent time on read : {markTime} min</h1>
            <h1 className="text-xl font-bold text-center my-6">Bookmarked Blogs : {markAdd.length}</h1>
            {
                markAdd.map((blog, ind) => <Bookmark key={ind} markAdd={blog}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    markTime: PropTypes.number.isRequired,
    markAdd: PropTypes.array.isRequired

}
export default Bookmarks;