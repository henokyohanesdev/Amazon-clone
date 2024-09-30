import React, { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon-logo.png';
import flag from '../../assets/us-flag.png';
import { LuMapPin } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiCartAdd } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import styles from './Header.module.css'

export default function Header() {

  const [{ user, cart }, dispatch] = useContext(DataContext)
  const total = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.top_header}>
          <Link to="/" className={styles.top_menu}>
            <div className={styles.top_icon}>
              <AiOutlineMenu size={30} />
            </div>
            <img className={styles.top_logo} src={logo} alt="Amazon logo" />
          </Link>
          <div className={styles.right_header}>
            <a href="#" className={styles.location}>
              <LuMapPin />
              <div className={styles.location_text}>
                <p className={styles.location_city}>Delivering to Houston</p>
                <span>Update location</span>
              </div>
            </a>
            <div className={styles.search}>
              <div className={styles.search_all}>
                All <IoMdArrowDropdown />
              </div>
              <input type="text" placeholder="Search Amazon" />
              <div className={styles.search_icon}>
                <IoSearch size={25} />
              </div>
            </div>
            <a href="#" className={styles.language}>
              <img className={styles.flag} src={flag} alt="Us flag" />
              <div>
                <div className={styles.language_text}>
                  EN <IoMdArrowDropdown />
                </div>
              </div>
            </a>

            

            <Link to={user ? "/account" : "/auth"} className={styles.account}>
              <p className={styles.account_greeting}>
                <span className={styles.greeting_text}>Hello, </span>
                {user ? (user?.email?.split("@")[0]) : 'Sign in'}
                <span className={styles.account_icon}>
                  <IoIosArrowForward />
                  <MdAccountBox size={40} />
                </span>
              </p>
              <div className={styles.account_text}>
                Account & Lists <IoMdArrowDropdown />
              </div>
            </Link>
            <Link to="/orders" className={styles.order}>
              <p className={styles.return_text}>Returns</p>
              <p className={styles.order_text}> & Orders</p>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCartAdd size={45} />
              <span className={styles.cart_count}>
                {cart ? total : 0}
              </span>
              <p className={styles.cart_text}>Cart</p>
            </Link>
          </div>
        </div>
        <div className={styles.search_mobile}>
          <input type="text" placeholder="Search Amazon" />
          <div className={styles.mobile_icon}>
            <IoSearch size={25} />
          </div>
        </div>
        <div className={styles.bottom_header}>
          <ul>
            <li className={styles.bottom_all}>
              <AiOutlineMenu size={20} /> All
            </li>
            <li>
              Medical Care
              <span className={styles.bottom_icon}>
                <IoMdArrowDropdown />
              </span>
            </li>
            <li>Best Sellers</li>
            <li>Amazon Basics</li>
            <li>
              Prime
              <span className={styles.bottom_icon}>
                <IoMdArrowDropdown />
              </span>
            </li>
            <li>New Releases</li>
            <li>Music</li>
            <li>Today's Deals</li>
            <li>
              Groceries
              <span className={styles.bottom_icon}>
                <IoMdArrowDropdown />
              </span>
            </li>
            <li>Customer Service</li>
            <li>Amazon Home</li>
            <li>Registry</li>
            <li>Books</li>
            <li>
              Gift Cards
              <span className={styles.bottom_icon}>
                <IoMdArrowDropdown />
              </span>
            </li>
            <li>Pharmacy</li>
            <li>Smart Home</li>
            <li>Fashion</li>
            <li>Toys & Games</li>
            <li>Luxury Stores</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
      <div className={styles.delivery_container}>
        <div className={styles.delivery}>
          <LuMapPin size={25} />
          <p>Delivering to Houston-Update</p>
          <IoIosArrowDown size={20} />
        </div>
        <span className={styles.join_prime}>Join Prime</span>
      </div>
    </>
  );
}
