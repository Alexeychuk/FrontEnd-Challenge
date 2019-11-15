import { connect } from 'react-redux';
import { dispatchRequestPosts } from '../../store/Posts/actions';

import Component from './component';

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        isFetching: state.posts.isFetching,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchRequestPosts: () => dispatch(dispatchRequestPosts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
