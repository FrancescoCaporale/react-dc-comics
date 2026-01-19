import "./footer.css"
export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <ul className="footer-column" >
                    <li><h1>DC COMICS</h1></li>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">News</a></li>
                </ul>
                <ul className="footer-column">
                    <li><h1>SHOP</h1></li>
                    <li><a href="">Shop DC</a></li>
                    <li><a href="">Shop DC Collectibles</a></li>

                </ul>
                <ul className="footer-column">
                    <li><h1>DC</h1></li>
                    <li><a href="">Terms of use</a></li>
                    <li><a href="">{`Privacy policy (New)`}</a></li>
                    <li><a href="">Ad choices</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Subscriptions</a></li>
                    <li><a href="">Talent Workshops</a></li>
                    <li><a href="">CPSC Certificates</a></li>
                    <li><a href="">Ratings</a></li>
                    <li><a href="">Shop Help</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <ul className="footer-column">
                    <li><h1>SITES</h1></li>
                    <li><a href="">DC</a></li>
                    <li><a href="">MAD Magazine</a></li>
                    <li><a href="">DC Kids</a></li>
                    <li><a href="">DC Universe</a></li>
                    <li><a href="">DC Power Visa</a></li>
                </ul>
            </div>
            <div className="social-section">
                <div className="signup-container">
                    <button className="signup-button">SIGN-UP NOW!</button>
                </div>
                <p className="slogan-social">FOLLOW US</p>
                <ul className="social-icons">
                    <li><img src="/img/footer-facebook.png" alt="Facebook" /></li>
                    <li><img src="/img/footer-periscope.png" alt="Periscope" /></li>
                    <li><img src="/img/footer-pinterest.png" alt="Pinterest" /></li>
                    <li><img src="/img/footer-twitter.png" alt="Twitter" /></li>
                    <li><img src="/img/footer-youtube.png" alt="YouTube" /></li>
                </ul>
            </div>
        </footer >
    );
}