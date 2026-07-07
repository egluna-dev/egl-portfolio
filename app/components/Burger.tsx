import Image from 'next/image';

interface BurgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function Burger({ isOpen, toggleMenu }: BurgerProps) {
    return (
        <div className='menu-btn webdev'>
        <div className='menu-btn-burger'>
        </div>
        <div className='menu'>
            <div>
                <div>
                    <ul>
                        <a href=""><Image style={{ width: '125px', marginBottom: '2rem' }} width={100} height={100} src="/svg/EGLMedia.svg" alt="EGL Media" /></a>
                        <li><a href="/photography/about">About</a></li>
                        <li><a href="/webdevelopment">Web Development</a></li>
                        <li><a href="/photography">Photography</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/photography/contact">Contact</a></li>
                        <li><i className="fa fa-adjust nav-link" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}