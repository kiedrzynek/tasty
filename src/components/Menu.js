import React, {useState} from 'react';
import Home from '../img/Home.png';
import Search from '../img/Search.svg';
import style from "../style/menu.module.css";

const Menu = ({search, getSearch, updateSearch}) => {

    const [open, setOpen] = useState(false);
    const toggleSearchBar = () => setOpen(!open);

    return (
        <nav className={style.mainNav}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <a href="#">
                        <img src={Home} className={style.home} alt="home"/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <button className={style.searchBtn} onClick={toggleSearchBar}>
                        <img src={Search} className={style.search} alt="search"/>
                    </button>
                    <form className={`${style.searchForm} ${open ? style.open : style.hide}`} onSubmit={getSearch}>
                        <div className={style.searchBar}>
                            <input type="text" className={style.searchInput} value={search} onChange={updateSearch} placeholder="Search" />
                            <button type="submit" className={style.searchBtn}>
                                <img src={Search} className={style.search} alt="search"/>
                            </button>
                        </div>
                        
                    </form>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;