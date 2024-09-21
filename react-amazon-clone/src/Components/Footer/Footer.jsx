import React from 'react'
import logo from '../../assets/amazon-logo.png'
import { GrLanguage } from "react-icons/gr";
import { RiExpandUpDownFill } from "react-icons/ri";
import flag from '../../assets/us-flag.png'
export default function Footer() {
  return (
    <>
      <div>
        <p>See personalized recommendations</p>
        <button>sign in</button>
        <p>
          New customer?<a>Start here</a>
        </p>
      </div>
      <p>Back to top</p>
      <div className="footer_container">
        <div>
          <h5>Get to Know Us</h5>
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
          <h5>Make Money with Us</h5>
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
          <h5>Amazon Payment Products</h5>
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
          <h5>Let Us Help You</h5>
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
      <div>
        <img src={logo} alt="Amazon logo" />
        <div>
          <GrLanguage />
          English
          <RiExpandUpDownFill />
        </div>
        <div>
          <img src={flag} alt="Us flag" />
          United States
        </div>
      </div>
      <div>
        <div>
          <a>
            <p>Amazon Music</p>
            <p>Stream millions</p>
            <p>of songs</p>
          </a>
          <a>
            <p>Amazon Ads</p>
            <p>Reach</p>
            <p>customers</p>
            <p>wherever</p>
            <p>they</p>
            <p>spent their</p>
            <p>time</p>
          </a>
          <a>
            <p>6pm</p>
            <p>Score deals</p>
            <p>on fashion brands</p>
          </a>
          <a>
            <p>AbeBooks</p>
            <p>Books,art</p>
            <p>and collectibles</p>
          </a>
          <a>
            <p>ACX</p>
            <p>Audiobook</p>
            <p>publishing</p>
            <p>Made Easy</p>
          </a>
          <a>
            <p>Sell on Amazon</p>
            <p>Start a Selling</p>
            <p>Account</p>
          </a>
          <a>
            <p>Veeqo</p>
            <p>Shipping</p>
            <p>software</p>
            <p>inventory</p>
            <p>Management</p>
          </a>
          <a>
            <p>Amazon Business</p>
            <p>Everything for</p>
            <p>your business</p>
          </a>
          <a>
            <p>Amazon Fresh</p>
            <p>Groceries &</p>
            <p>More</p>
            <p>Right To Your</p>
            <p>Door</p>
          </a>
          <a>
            <p>AmazonGlobal</p>
            <p>Ship Orders</p>
            <p>internationally</p>
          </a>
          <a>
            <p>Home Services</p>
            <p>Experienced pros</p>
            <p>Happiness</p>
            <p>Guarantee</p>
          </a>
          <a>
            <p>Amazon Web</p>
            <p>Services</p>
            <p>Scalable cloud</p>
            <p>computing</p>
            <p>services</p>
          </a>
          <a>
            <p>Audible</p>
            <p>Listen to Books &</p>
            <p>original</p>
            <p>Audio</p>
            <p>performances</p>
          </a>
          <a>
            <p>Box Office Mojo</p>
            <p>Find Movie</p>
            <p>Box Office Data</p>
          </a>
          <a>
            <p>Goodreads</p>
            <p>Book reviews</p>
            <p>&</p>
            <p>recommendations</p>
          </a>
          <a>
            <p>IMDB</p>
            <p>Movies, Tv</p>
            <p>& Celebrities</p>
          </a>
          <a>
            <p>IMDbpro</p>
            <p>Get info Entertainment</p>
            <p>professionals Need</p>
          </a>
          <a>
            <p>Kindle Direct</p>
            <p>publishing</p>
            <p>indie Digital &</p>
            <p>print publishing</p>
            <p>Made Easy</p>
          </a>
          <a>
            <p>Amazon Photos</p>
            <p>Unlimited</p>
            <p>photo storage</p>
            <p>Free with</p>
            <p>prime</p>
          </a>
          <a>
            <p>Prime Video</p>
            <p>Direct</p>
            <p>video</p>
            <p>Distribution</p>
            <p>Made Easy</p>
          </a>
          <a>
            <p>Shopbop</p>
            <p>Designer</p>
            <p>Fashion Brands</p>
          </a>
          <a>
            <p>Amazon Resale</p>
            <p>Great Deals on</p>
            <p>Quality Used</p>
            <p>products</p>
          </a>
          <a>
            <p>Whole Foods</p>
            <p>Market</p>
            <p>America's</p>
            <p>Healthiest</p>
            <p>Grocery Store</p>
          </a>
          <a>
            <p>Woot!</p>
            <p>Deals and</p>
            <p>shenanigans</p>
          </a>
          <a>
            <p>Zappos</p>
            <p>Shoes &</p>
            <p>Clothing</p>
          </a>
          <a>
            <p>Ring</p>
            <p>Smart Home</p>
            <p>security</p>
            <p>systems</p>
          </a>
          <a>
            <p>eero WIFI</p>
            <p>Stream 4K video</p>
            <p>in Every Room</p>
          </a>
          <a>
            <p>Blink</p>
            <p>Smart security</p>
            <p>for Every Home</p>
          </a>
          <a>
            <p>Neighbors</p>
            <p>APP</p>
            <p>Real-Time</p>
            <p>Crime</p>
            <p>& safety</p>
            <p>Alerts</p>
          </a>
          <a>
            <p>Amazon Subscription</p>
            <p>Boxes</p>
            <p>Top subscription boxes-</p>
            <p>right to your door</p>
          </a>
          <a>
            <p>Phillpack</p>
            <p>pharmacy</p>
            <p>simplified</p>
          </a>
          <a>
            <p>Amazon</p>
            <p>Renewed</p>
            <p>Like-new</p>
            <p>products</p>
            <p>you can trust</p>
          </a>
        </div>
        <div>
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Consumer Health Data Privacy Disclosure</p>
          <p>Your Ads Privacy Choices</p>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        <p></p>
      </div>
    </>
  );
}
