import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1 */}
                    <div className="col">
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li>Our Mission</li>
                            <li>Our Values</li>
                            <li>Terms of Agreement</li>
                        </ul>
                    </div>
                    {/*Column2 */}
                    <div className="col">
                        <h4>Careers</h4>
                        <ul className="list-unstyled">
                            <li>Jobs</li>
                            <li>Meet The Team</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    {/*Column3 */}
                    <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>TikTok</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} YALLA INC | All rights reserved 
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Footer;