import React from 'react';
import "./CSS/Footer.css"
import Button from './Button';
import { footerLists } from './dummyFooter';

function Footer() {
    return (
        <footer className="footer_section">
            <div className="footer_backdrop">
                <div className="footer_container">
                    <h1>The only platform 
                    <span> that can support </span>
                    <span> your company at </span> 
                    <span> any scale </span>
                    </h1>
                    <Button text={"Get started"} className="get_started_footer"/>
                    <p className="footer_disclaimer">1. Accurate as of December 2023, includes free and paid users.</p>
                </div>

                <div className="footer_links_grid">
                    <div className="footer_logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" alt="Asana" />
                    </div>
                    
                    {footerLists.map((list) => (
                        <div key={list.id} className="footer_column">
                            <h3>{list.title}</h3>
                            <ul>
                                {list.links.map((link, i) => (
                                    <li key={i}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer_bottom">
               <p>© 2026 Your Company</p>

                <div className="footer_apps">
                  <img src="" alt="App Store" />
                  <img src="" alt="Google Play" />
                </div>
            </div>
         </footer>
    );
}

export default Footer;