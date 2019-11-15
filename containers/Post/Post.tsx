import { connect } from 'react-redux';
import { dispatchDeletePost } from '../../store/Posts/actions';
import { dispatchSelectedPost } from '../../store/CurrentPost/actions';

import Post from '../../components/Posts/Post';

const mapDispatchToProps = dispatch => {
    return {
        dispatchDeletePost: id => dispatch(dispatchDeletePost(id)),
        dispatchSelectedPost: id => dispatch(dispatchSelectedPost(id)),
    };
};

export default connect(null, mapDispatchToProps)(Post);
