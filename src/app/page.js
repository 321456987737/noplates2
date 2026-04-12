import Herosection from "../components/Home/herosection";
import Menusection from "../components/Home/featuredmenu";
import About from "../components/Home/about";
import Gallery from "../components/Home/gallery"
import TestimonialCarousel from "../components/Home/testimonials";
import Location from "../components/Home/location";
export default function Home() {
  return (
<div>
  <Herosection />
  <Menusection />
  <About />
  {/* <Whyus /> */}
  <Gallery/>
  <TestimonialCarousel/>
  <Location />
</div>
  );
}
