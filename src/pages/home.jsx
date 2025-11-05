import { Stats, Carousel, BannerImage } from '../components/home';
import { CourseSection } from '../components/courses';
import { heroSlides, aboutSlides, projectsSlides } from '../constants/slides';

export default function Home() {
  return (
    <div>
      <Carousel slides={heroSlides} height='calc(100vh - 198px)' buttons colorText={'#FFFFFF'} />
      <CourseSection/>
      <BannerImage slides={aboutSlides} />
      <Stats/>
      <Carousel slides={projectsSlides} marginBottom={65} colorText={'#6C1313'} background={'white'}/>
    </div>
  );
}
