import Navigation from "@/components/Navigation";
import Hero, {  } from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import LoveStory from "@/components/LoveStory";
import SaveTheDate from "@/components/SaveTheDate";
import WishesForm from "@/components/WishesForm";
import Footer from "@/components/Footer";
import ScheduleSection from "@/components/ScheduleSection";
import ThankYouSection from "@/components/ThankYouSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero /> 
      <ScheduleSection/>
      <SaveTheDate />
      <PhotoGallery />
      <LoveStory />

      <ThankYouSection />
      <Footer />
    </div>
  );
};

export default Index;
