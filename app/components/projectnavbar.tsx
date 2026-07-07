import Image from 'next/image';

interface ProjectNavbarProps {
    title: string;
    imageUrl: string;
    altText: string;
    priority?: boolean;
}

export default function ProjectNavbar({ title, imageUrl, altText, priority = false }: ProjectNavbarProps) {
    return (
        <nav id="navbar">
            <ul>
                <li><a href="/webdevelopment" className="nav-link">Back to Projects</a></li>
                <li><a href="/photography/about" className="nav-link">About</a></li>
                <li><a href="/webdevelopment" className="nav-link">Web Development</a></li>
                <li><a href="/photography" className="nav-link">Photography</a></li>
                <li><a href="/photography/contact" className="nav-link">Contact</a></li>
                <i className="fa fa-adjust nav-link" aria-hidden="true"></i>
            </ul>
            <Image src={imageUrl} alt={altText} width={50} height={50} priority={priority} />
</nav>
    );
}