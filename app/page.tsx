import { AboutMe } from '@/components/about-me/AboutMe';
import { Contact } from '@/components/contact/Contact';
import { HomeSection } from '@/components/home/HomeSection';
import { MyWork } from '@/components/my-work/MyWork';
import { Background } from '@/layouts/Background';

export default function Home() {
  return (
    <>
      <Background />
      <HomeSection />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
}
