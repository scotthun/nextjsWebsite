import Header from './Header'
import Head from 'next/head'
import Footer from './Footer';

/*
const layoutStyle = {
  margin: 20,
  padding: 20,
}*/

export default function Layout(props) {
    return (

        <div id="bod">
            <Head>
                <title>Scott Hung | Software Engineer</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet" />
                <script src="/functions/scroll.js"></script>
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
                }
                body{
                    margin:0;      
                    background-color: #3137FD;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 16px;
                    color: #ffffff;
                    text-decoration: none;
                }

            `}
            </style>

        </div>

    )
}
