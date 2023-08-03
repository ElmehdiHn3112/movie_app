import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    function isDarkMode() {
        const lol = document.getElementsByClassName('form').item(0);
        const sous_links = document.getElementsByClassName('sous-links');
        if (!darkMode) {
            document.body.classList.add("dark");
            if (lol) {

                lol.classList.add('dark');
            }
            if (sous_links) {

                sous_links.item(0).classList.add('dark');
                sous_links.item(1).classList.add('dark');
                sous_links.item(2).classList.add('dark');
            }


        } else {
            document.body.classList.remove('dark');
            if (lol) {
                lol.classList.remove('dark');
            }
            if (sous_links) {
                sous_links.item(0).classList.remove('dark');
                sous_links.item(1).classList.remove('dark');
                sous_links.item(2).classList.remove('dark');
            }

        }
        setDarkMode(!darkMode)
    }
    return (
        <>
            <div className='navbar'>
                <div>
                    <NavLink to={"/"}>
                        <h1>Movie App</h1>
                    </NavLink>
                </div>
                <div className='links'>



                    <div className='links-cont'>Movies
                        <div className='sous-links'>

                            <NavLink to={"/"}>Popular</NavLink>
                            <NavLink to={"top_rated"}>Top Rated</NavLink>
                            <NavLink to={"anime"}>Anime</NavLink>
                            <NavLink to={"now_playing"}>Now playing</NavLink>
                            <NavLink to={"upcoming"}>Upcoming</NavLink>
                        </div>
                    </div>
                    <div className='links-cont'>
                        Series
                        <div className="sous-links">

                            <NavLink to={"popularSeries"}>PopularSeries</NavLink>
                            <NavLink to={"topRated"}>top Rated</NavLink>
                            <NavLink to={"airtoday"}>Air today</NavLink>
                        </div>
                    </div>
                    <div className='links-cont'>
                        People
                        <div className="sous-links">

                            <NavLink to={"/people/popular"}>Popular</NavLink>

                        </div>
                    </div>
                </div>
            </div>

            <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={() => isDarkMode()} />
                <span className="slider"></span>
            </label>
        </>
    )
}

export default Navbar