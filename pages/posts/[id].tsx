import { useRouter } from 'next/router';
import Link from 'next/link';
//import Layout from '../../components/MyLayout';
import SinglePost from '../../containers/SinglePost/connector';
import Header from '../../components/Header/Header';

export default function Post() {
    const router = useRouter();
    const currentPostId = Number(router.query.id);
    return (
        <>
            <Header referTo={'/'} label={'Return to Post'} />

            <SinglePost id={currentPostId} />
        </>
    );
}
