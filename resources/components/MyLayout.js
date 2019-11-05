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

                body{
                    margin:0;      
                    background-color: #3137FD;
                }

            `}
            </style>

        </div>

    )
}
