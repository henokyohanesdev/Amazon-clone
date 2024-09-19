import React from 'react';
import logo from '../../assets/amazon-logo.png';
import flag from '../../assets/us-flag.png';
import { LuMapPin } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { BiCartAdd } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
    <div className={styles.top_header}>
    <a>
      <img className={styles.logo} src={logo} alt="Amazon logo" />
    </a>
      <a href="#" className={styles.location}>
        <LuMapPin />
        <div>
            <p>Delivering to Houston</p>
            <span>Update location</span>
        </div>
      </a>
      <div className={styles.search}>
        
          <div>All <IoMdArrowDropdown /></div>
        
        <input type="text" />
        <GoSearch />
      </div>
      <a href="#" className={styles.language}>
        <img src={flag} alt="Us flag" />
        <div>
          <div>EN <IoMdArrowDropdown /></div>
        </div>
      </a>
      <a>
        <p>Hello, Sign in</p>
        <div>Account & Lists <IoMdArrowDropdown /></div>
      </a>
      <a>
        <p>Returns</p>
        <p> & Orders</p>
      </a>
      <a href="#" className={styles.cart}>
        <BiCartAdd size={40}/>
        <span>0</span>
        <p>Cart</p>
      </a>
    </div>
    <div className={styles.bottom_header}>
      <ul>
        <li><AiOutlineMenu /> All</li>
        <li>Medical Care <IoMdArrowDropdown /></li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>Prime <IoMdArrowDropdown /></li>
        <li>New Releases</li>
        <li>Music</li>
        <li>Today's Deals</li>
        <li>Groceries <IoMdArrowDropdown /></li>
        <li>Customer Service</li>
        <li>Amazon Home</li>
        <li>Registry</li>
        <li>Books</li>
        <li>Gift Cards <IoMdArrowDropdown /></li>
        <li>Pharmacy</li>
      </ul>
    </div>
    </>
  )
}
