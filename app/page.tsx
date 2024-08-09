import AboutUsSection from "./_components/AboutUs/AboutUsSection";
import AdvantagesSection from "./_components/Advantages/AdvantagesSection";
import ContactFormSection from "./_components/ContactForm/ContactFormSection";
import CounterSection from "./_components/Counter/CounterSection";
import CoursesSection from "./_components/Courses/CoursesSection";
import HeroSection from "./_components/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CounterSection />
      <CoursesSection />
      <AdvantagesSection />
      <ContactFormSection>Маєте запитання?</ContactFormSection>
    </>
  );
}
