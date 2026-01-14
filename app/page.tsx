import { AboutMe } from '@/components/about-me/AboutMe';
import { Contact } from '@/components/contact/Contact';
import { HomeSection } from '@/components/home/HomeSection';
import { MyWork } from '@/components/my-work/MyWork';

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
}
