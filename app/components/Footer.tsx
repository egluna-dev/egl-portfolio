import Image from 'next/image';

interface FooterProps {
    text: string;
}

export default function Footer({ text }: FooterProps) {
    return (
       <div>
                <footer id="webdev-footer">
                <div id="footer-logo">
                    <a href=""><Image src="/svg/EGL-Media-Footer.svg" alt="Back to Top" width={100} height={100} /></a>
                </div>
                <div id="footer-middle">
                    <div id="footer-navigation-links">
                        <ul>
                            <li><a href="/photography/about">About</a></li>
                            <li><a href="/webdevelopment">Web Development</a></li>
                            <li><a href="/photography">Photography</a></li>
                            <li><a href="/photography/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div id="footer-social-links">
                        <ul>
                            <li><a href="https://instagram.com/eglcinephoto/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="https://github.com/egluna-dev" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></li>
                            <li><a href="mailto:eglunabusiness@gmail.com"><i className="far fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/e-giovanni-luna/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
                        </ul>

                    </div>
                    <div id="footer-legal-links">
                        <ul>
                            <li>Legal</li>
                            <li><a href="/privacypolicy">Privacy Policy</a></li>
                            <li><a href="/termsandconditions">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div id="footer-bottom">
                <div id="footer-bottom-top">
                    <p>Designed and built by</p>
                    <Image src="/svg/EGL-Media-Footer.svg" alt="EGL Media" width={100} height={100} />
                </div>
                <div>
                    Copyright &#169; E. Giovanni Luna, EGL Media
                </div>
                <div>
                    All rights reserved.
                </div>
            </div>
       </div>
    );
}