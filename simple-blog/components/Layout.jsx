import Head from "next/head";
import Link from 'next/link'

const Layout = ({title, description = '', children}) => {
    return (
        <>
            <Head>
                <title>{title} || Simple Blog NextJs </title>
                <meta name='description' content={description || 'Простой блог'}/>
                <meta property='og:description' content={description || 'Простой блог на NextJS'}/>
                <link rel="icon" href="/favicon.ico" type='image/ico'/>
            </Head>

            <header>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
                <Link href='/localstorage'>
                    <a>LocalStorage</a>
                </Link>

                <img src='/blog.png' alt=''/>
            </header>

            <div className="cotainer">
                {children}
            </div>


            <footer className='footer'>
                2021 &copy; Simple Blog NextJs
            </footer>
        </>
    );
};

export default Layout;