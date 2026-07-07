import ProjectNavbar from '@/app/components/ProjectNavbar';
import Footer from '@/app/components/Footer';
import BacktoTop from '@/app/components/BacktoTop';
import Burger from '@/app/components/Burger';

export default function Home() {
  return (
    <div>
      <h1>This is the top level page</h1>
      <ProjectNavbar title="My Project" imageUrl="/path/to/image.jpg" altText="Project Image" />
      <Footer text="This is the footer text" />
      <BacktoTop text="Back to Top" />
      <Burger isOpen={false} toggleMenu={() => {}} />
    </div>
  );
}
