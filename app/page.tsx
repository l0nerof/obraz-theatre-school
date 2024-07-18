import AboutUsSection from "./_components/AboutUsSection";
import ContactFormSection from "./_components/ContactFormSection";
import CounterSection from "./_components/CounterSection";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CounterSection />
      <ContactFormSection>Маєте запитання?</ContactFormSection>
    </>
  );
}
