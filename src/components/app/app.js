import React from 'react';
import './app.css';
import '../header/header';
import '../main/main';
import '../sidebar/sidebar';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Main from "../main/main";

const App = () => {
    return (
        <div className='row d-flex justify-content-around'>
            <aside className='col-12 col-lg-2 p-0 d-flex'>
                <Sidebar/>
            </aside>
            <div className='col-10'>
                <header>
                    <Header/>
                </header>
                <main>
                    <Main/>
                </main>
            </div>
        </div>
    );
};
export default App;

