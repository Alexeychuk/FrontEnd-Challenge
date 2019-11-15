import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
