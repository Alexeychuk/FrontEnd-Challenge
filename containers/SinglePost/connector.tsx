import { connect } from 'react-redux';
import SinglePost from '../../components/SinglePost';

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        comments: state.comments,
    };
};

export default connect(mapStateToProps)(SinglePost);
