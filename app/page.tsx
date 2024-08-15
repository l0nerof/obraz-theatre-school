import AboutUsSection from "./_components/AboutUs/AboutUsSection";
import ActualSection from "./_components/Actual/ActualSection";
import AdvantagesSection from "./_components/Advantages/AdvantagesSection";
import ContactFormSection from "./_components/ContactForm/ContactFormSection";
import CounterSection from "./_components/Counter/CounterSection";
import CoursesSection from "./_components/Courses/CoursesSection";
import HeroSection from "./_components/Hero/HeroSection";
import ReviewsSection from "./_components/Reviews/ReviewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CounterSection />
      <ActualSection />
      <CoursesSection />
      <AdvantagesSection />
      <ReviewsSection />
      <ContactFormSection>Маєте запитання?</ContactFormSection>
    </>
  );
}
