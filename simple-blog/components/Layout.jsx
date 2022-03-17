import React from 'react';
import '../public/blog.png'
import {Head} from "next/document";
import Link from 'next/link'

const Layout = ({title, description = '', children}) => {
    return (
        <>
            <Head>
                <title>{title} || Simple Blog NextJs </title>
                <meta name='description' content={description || 'Простой блог'}/>
                <meta property='og:description' content={description || 'Простой блог'}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <img src='/blog.png' alt=''/>
                <Link href='/'> <a>Главная</a> </Link>
            </header>

            <div className="cotainer">
                {children}
            </div>


            <footer>
                2021 &copy; Simple Blog NextJs
            </footer>
        </>
    );
};

export default Layout;