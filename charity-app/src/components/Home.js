import React from 'react'
import HomeThreeColumns from './home/HomeThreeColumns'
import Home4Steps from './home/Home4Steps'
import HomeHeader from './home/HomeHeader';
import MobileScrollBtn from './menu/MobileScrollBtn';
import HomeAbout from "./home/HomeAbout";

function Home() {
    return (
        <main className = "container">
            <HomeHeader />
            <HomeThreeColumns />
            <Home4Steps />
            <HomeAbout/>
            <MobileScrollBtn />
        </main>
    )
}

export default Home;