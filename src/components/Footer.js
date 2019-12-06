import React from 'react'
import '../css/footer.css'
import logoFD from '../assets/logo.jpg'

export default function Footer() {
    return (
        <div className="footer" style={{ width: '100vw', height: '20vh', marginTop: '20px' }}>
            <hr></hr>
            <div className="footer-content">
                <div className="list1">
                    <ul className="list-footer">
                        <li>About Us</li>
                        <li>Feedback</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="list-footer">
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                    </ul>
                    <ul className="list-footer">
                        <li>Awards</li>
                        <li>Newsletter</li>
                    </ul>
                    <div className="download-app">
                        <p className="download">Download Our Mobile App</p>
                        <div className="taste-footer-store">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_appstore.png" alt="appstore" />
                            <img src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_playstore.png" alt="playstore" />
                        </div>
                    </div>
                </div>
                <div className="list2">
                    <div className="logologo">
                        <div className="fdn-logo">
                            <img src={logoFD} alt="logoFD" style={{ height: '55px', objectFit: 'contain' }} />

                        </div>
                    </div>
                    <ul className="social-media">
                        <li><i className="fab fa-facebook darkblue fa-2x"></i></li>
                        <li><i className="fab fa-twitter-square blue fa-2x"></i></li>
                        <li><i className="fab fa-instagram purple fa-2x"></i></li>
                        <li><i className="fab fa-youtube red fa-2x"></i></li>
                    </ul>
                </div>
                <p className="copyright">Copyright © 2015 - 2019 Female Daily Network ∙ All the rights reserved</p>
            </div>
        </div>
    )
}


