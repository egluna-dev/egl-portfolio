import Image from 'next/image';

interface BacktoTopProps {
    text: string;
}

export default function BacktoTop({ text }: BacktoTopProps) {
    return (
        <div className="to-top-icon">
    <a href="">
        <Image src="/svg/uparrow.svg" alt="Back to Top" width={50} height={50} />
    <h3>Back to Top</h3>
    </a>
</div>
    );
}