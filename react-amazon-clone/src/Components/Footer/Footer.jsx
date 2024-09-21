import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import logo from '../../assets/amazon-logo.png'
import { GrLanguage } from "react-icons/gr";
import { RiExpandUpDownFill } from "react-icons/ri";
import flag from '../../assets/us-flag.png'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <>
      <a href="#" className={styles.back_top}>
        <IoMdArrowDropup />
        <p>Back to top</p>
      </a>
      <div className={styles.mobile_footer}>
        <ul>
          <li>Your Orders</li>
          <li>Your List</li>
          <li>Registry & Gift List</li>
          <li>Your Account</li>
          <li>Sell Products on Amazon</li>
          <li>Recalls and product safety Alerts</li>
          <li>Customer Service</li>
        </ul>
        <ul>
          <li>Amazon Fresh</li>
          <li>Gift Cards</li>
          <li>Find a Gift</li>
          <li>Browsing History</li>
          <li>Returns</li>
        </ul>
      </div>
      <div className={styles.top_footer}>
        <div>
          <p className={styles.top_title}>Get to Know Us</p>
          <ul>
            <li>Careers</li>
            <li>Amazon Newsletter</li>
            <li>About Amazon</li>
            <li>Accessibility</li>
            <li>Sustainability</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <p className={styles.top_title}>Make Money with Us</p>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Supply to Amazon</li>
            <li>Protect & Build Yuur Brand</li>
            <li>Become an Affiliate</li>
            <li>Become a Delivery Driver</li>
            <li>Start a Package Delivery Business</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Become an Amazon Hub Partner</li>
            <li>Host an Amazon Hub</li>
            <li>› See More Ways to Make Money</li>
          </ul>
        </div>
        <div>
          <p className={styles.top_title}>Amazon Payment Products</p>
          <ul>
            <li>Amazon Visa</li>
            <li>Amazon Store Card</li>
            <li>Amazon Secured Card</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Credit Card Marketplace</li>
            <li>Reload Your Balance</li>
            <li>Gift Cards</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <p className={styles.top_title}>Let Us Help You</p>
          <ul>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>Registry & Gift List</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_background}>
        <div className={styles.footer_logo}>
          <img className={styles.logo} src={logo} alt="Amazon logo" />
          <div className={styles.logo_language}>
            <GrLanguage size={15} />
            <span>English</span>
            <span className={styles.arrow}>
              <RiExpandUpDownFill />
            </span>
          </div>
          <div className={styles.logo_country}>
            <img className={styles.flag} src={flag} alt="Us flag" />
            United States
          </div>
        </div>
        <div className={styles.bottom_content}>
          <div className={styles.bottom_footer}>
            <a href="#">
              <tittle>Amazon Music</tittle>
              <p>Stream millions</p>
              <p>of songs</p>
            </a>
            <a href="#">
              <tittle>Amazon Ads</tittle>
              <p>Reach</p>
              <p>customers</p>
              <p>wherever</p>
              <p>they</p>
              <p>spent their</p>
              <p>time</p>
            </a>
            <a href="#">
              <tittle>6pm</tittle>
              <p>Score deals</p>
              <p>on fashion brands</p>
            </a>
            <a href="#">
              <tittle>AbeBooks</tittle>
              <p>Books,art</p>
              <p>and collectibles</p>
            </a>
            <a href="#">
              <tittle>ACX</tittle>
              <p>Audiobook</p>
              <p>publishing</p>
              <p>Made Easy</p>
            </a>
            <a href="#">
              <tittle>Sell on Amazon</tittle>
              <p>Start a Selling</p>
              <p>Account</p>
            </a>
            <a href="#">
              <tittle>Veeqo</tittle>
              <p>Shipping</p>
              <p>software</p>
              <p>inventory</p>
              <p>Management</p>
            </a>
          </div>
          <div className={styles.bottom_footer}>
            <a href="#">
              <tittle>Amazon Business</tittle>
              <p>Everything for</p>
              <p>your business</p>
            </a>
            <a href="#">
              <tittle>Amazon Fresh</tittle>
              <p>Groceries &</p>
              <p>More</p>
              <p>Right To Your</p>
              <p>Door</p>
            </a>
            <a href="#">
              <tittle>AmazonGlobal</tittle>
              <p>Ship Orders</p>
              <p>internationally</p>
            </a>
            <a href="#">
              <tittle>Home Services</tittle>
              <p>Experienced pros</p>
              <p>Happiness</p>
              <p>Guarantee</p>
            </a>
            <a href="#">
              <tittle>Amazon Web</tittle>
              <p>Services</p>
              <p>Scalable cloud</p>
              <p>computing</p>
              <p>services</p>
            </a>
            <a href="#">
              <tittle>Audible</tittle>
              <p>Listen to Books &</p>
              <p>original</p>
              <p>Audio</p>
              <p>performances</p>
            </a>
            <a href="#">
              <tittle>Box Office Mojo</tittle>
              <p>Find Movie</p>
              <p>Box Office Data</p>
            </a>
          </div>
          <div className={styles.bottom_footer}>
            <a href="#">
              <tittle>Goodreads</tittle>
              <p>Book reviews</p>
              <p>&</p>
              <p>recommendations</p>
            </a>
            <a href="#">
              <tittle>IMDB</tittle>
              <p>Movies, Tv</p>
              <p>& Celebrities</p>
            </a>
            <a href="#">
              <tittle>IMDbpro</tittle>
              <p>Get info Entertainment</p>
              <p>professionals Need</p>
            </a>
            <a href="#">
              <tittle>Kindle Direct</tittle>
              <p>publishing</p>
              <p>indie Digital &</p>
              <p>print publishing</p>
              <p>Made Easy</p>
            </a>
            <a href="#">
              <tittle>Amazon Photos</tittle>
              <p>Unlimited</p>
              <p>photo storage</p>
              <p>Free with</p>
              <p>prime</p>
            </a>
            <a href="#">
              <tittle>Prime Video</tittle>
              <p>Direct</p>
              <p>video</p>
              <p>Distribution</p>
              <p>Made Easy</p>
            </a>
            <a href="#">
              <tittle>Shopbop</tittle>
              <p>Designer</p>
              <p>Fashion Brands</p>
            </a>
          </div>
          <div className={styles.bottom_footer}>
            <a href="#">
              <tittle>Amazon Resale</tittle>
              <p>Great Deals on</p>
              <p>Quality Used</p>
              <p>products</p>
            </a>
            <a href="#">
              <tittle>Whole Foods</tittle>
              <p>Market</p>
              <p>America's</p>
              <p>Healthiest</p>
              <p>Grocery Store</p>
            </a>
            <a href="#">
              <tittle>Woot!</tittle>
              <p>Deals and</p>
              <p>shenanigans</p>
            </a>
            <a href="#">
              <tittle>Zappos</tittle>
              <p>Shoes &</p>
              <p>Clothing</p>
            </a>
            <a href="#">
              <tittle>Ring</tittle>
              <p>Smart Home</p>
              <p>security</p>
              <p>systems</p>
            </a>
            <a href="#">
              <tittle>eero WIFI</tittle>
              <p>Stream 4K video</p>
              <p>in Every Room</p>
            </a>
            <a href="#">
              <tittle>Blink</tittle>
              <p>Smart security</p>
              <p>for Every Home</p>
            </a>
          </div>
          <div className={styles.bottom_footer}>
            <a href="#" className={styles.footer_a}>
              <tittle>Neighbors</tittle>
              <p>APP</p>
              <p>Real-Time</p>
              <p>Crime</p>
              <p>& safety</p>
              <p>Alerts</p>
            </a>
            <a href="#">
              <tittle>Amazon Subscription</tittle>
              <p>Boxes</p>
              <p>Top subscription boxes-</p>
              <p>right to your door</p>
            </a>
            <a href="#">
              <tittle>Phillpack</tittle>
              <p>pharmacy</p>
              <p>simplified</p>
            </a>
            <a href="#">
              <tittle>Amazon</tittle>
              <p>Renewed</p>
              <p>Like-new</p>
              <p>products</p>
              <p>you can trust</p>
            </a>
          </div>
          <div>
            <p className={styles.footer_signin}>Already a customer? Sign in</p>
          </div>
          <div className={styles.footer_privacy}>
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Consumer Health Data Privacy Disclosure</p>
            <p className={styles.hide_privacy}>Your Ads Privacy Choices</p>
          </div>
          <p className={styles.mobile_privacy}>Your Ads Privacy Choices</p>
          <p className={styles.footer_copyright}>
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
          <p></p>
        </div>
      </div >
    </>
  );
}
