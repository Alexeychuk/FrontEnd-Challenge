import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import createStore from '../store/index';
import Layout from '../components/Layout/index';

class MyApp extends App<MyProps> {
    static async getInitialProps(props) {
        const { Component, ctx } = props;
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <>
                <Head>
                    <title>Front End </title>
                </Head>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </>
        );
    }
}

export default withRedux(createStore)(MyApp);

type MyProps = { Component; pageProps; store };
