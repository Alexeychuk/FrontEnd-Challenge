import { useRouter } from 'next/router';
import Link from 'next/link';
//import Layout from '../../components/MyLayout';
import SinglePost from '../../containers/SinglePost/connector';
import NewPostsForm from '../../containers/NewPostForm/NewPostForm';
import Header from '../../components/Header/Header';

export default function NewPost() {
    return (
        <>
            <Header referTo={'/'} label={'Return to Post'} />

            <NewPostsForm />
        </>
    );
}
