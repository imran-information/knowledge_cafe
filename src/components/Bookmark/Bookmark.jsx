import PropTypes from 'prop-types';
const Bookmark = ({ markAdd }) => {
    const {title} = markAdd
    return (
        <div className="bg-white rounded px-6 py-8 mb-6">
            <h1 className="text-xl">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    markAdd: PropTypes.object.isRequired
}

export default Bookmark;