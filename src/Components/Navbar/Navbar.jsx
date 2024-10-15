import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApp } from '../Store/Store';
import { FaBars } from "react-icons/fa"; 
import { IoMdHeart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import navbarCss from './Navbar.module.css';
import logo from '../assest/logo.png';
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const { wishlist, setSearch,  search,handleSearch  } = useContext(ContextApp);
  const [navItem, setNavItem] = useState('Home');
  const [showNavbar, setShowNavbar] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleScroll = () => {
    setNavScroll(window.scrollY > 200);
  };
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
     console.log(value)
    setSearch(value);
  
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevOpen => !prevOpen); 
  };

  const toggleNavbar = () => {
    setShowNavbar(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${navbarCss.navbar} ${navScroll ? navbarCss.sticky : ''}`}>
      <div className={navbarCss.navLogo}>
        <img className={navbarCss.logo} src={logo} alt="Logo" />
        <span className={navbarCss.logoText}>HomeStyler</span>
      </div>     
      <ul className={`${navbarCss.menu} ${showNavbar ? navbarCss.show : ''}`}>
        <li onClick={() => setNavItem('Home')} className={`${navbarCss.navLink} ${navItem === "Home" ? navbarCss.active : ''}`}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={() => setNavItem('About')} className={`${navbarCss.navLink} ${navItem === 'About' ? navbarCss.active : ''}`}>
          <Link to='/About'>About</Link>
        </li>
        <li className={`${navbarCss.navLink} ${navItem === "Products" ? navbarCss.active : ''}`}>
          <button className={`${navbarCss.navdropBtn} dropdown-toggle`} onClick={toggleDropdown}>
            Products
          </button>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><Link className="dropdown-item" to="/ProductList/Furniture">Furniture</Link></li>
            <li><Link className="dropdown-item" to="/ProductList/Lighting">Lighting</Link></li>
            <li><Link className="dropdown-item" to="/ProductList/Decoration">Decoration</Link></li>
          </ul>
        </li>
        <li onClick={() => setNavItem('Contact')} className={`${navbarCss.navLink} ${navItem === "Contact" ? navbarCss.active : ''}`}>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li onClick={() => setNavItem('Designer')} className={`${navbarCss.navLink} ${navItem === "Designer" ? navbarCss.active : ''}`}>
          <Link to='/Designer'>Designers</Link>
        </li>
        <li onClick={() => setNavItem('Feedback')} className={`${navbarCss.navLink} ${navItem === "Feedback" ? navbarCss.active : ''}`}>
          <Link to='/Feedback'>Feedback</Link>
        </li>
      </ul>
      <div className={navbarCss.navIcons}>
        <form className={`${navbarCss.searchBar}`} onSubmit={handleSearch}>
          <input
            type="search"
            value={search}
            onChange={handleChange}
            className={`${navbarCss.searchInput}`}
            placeholder='Search...'
          />
          <CiSearch size={28} style={{ color: '#000' }} className={`float-right ${navbarCss.searchIcons}`} />
        </form>
        <div className={navbarCss.wishlist}>
          <Link to="/Wishlist">
            <IoMdHeart size={28} className={`relative ${navbarCss.navbarIcons}`} />
            {wishlist.length > 0 && <span className={navbarCss.badge}>{wishlist.length}</span>}
          </Link>
        </div>
        <div className={navbarCss.menuIcon}>
          {showNavbar ? <IoCloseSharp size={20} onClick={toggleNavbar} className={`${navbarCss.navbarIcons}`} /> : <FaBars size={20} onClick={toggleNavbar} className={`${navbarCss.navbarIcons}`} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
