import Header from './Header'
import Head from 'next/head'
import Footer from './Footer';

export default function Layout(props) {
    return (

        <div id="bod">
            <Head>
                <title>Scott Hung | Software Engineer</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            {props.children}
            
            <Footer />
            <style jsx>
            {`

                #bod{
                    height: 100vh;
                    margin: 0;
                }

            `}
            </style>
            <style jsx global>
            {`
                html {
                    scroll-behavior: smooth;
                    height: 100%;
                }
                body{
                    margin:0;      
                    background-color: #ffffff;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #333333;
                    text-decoration: none;
                    height: 100%;
                    width: 100%;
                }

            `}
            </style>

        </div>

    )
}
