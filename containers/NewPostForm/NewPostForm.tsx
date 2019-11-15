import { connect } from 'react-redux';
import { dispatchNewPost } from '../../store/Posts/actions';

import NewPostForm from '../../components/NewPostForm/NewPostForm';

const mapDispatchToProps = dispatch => {
    return {
        dispatchNewPost: (body, title) => dispatch(dispatchNewPost(body, title)),
    };
};

export default connect(null, mapDispatchToProps)(NewPostForm);
