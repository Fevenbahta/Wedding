import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import LoveStory from "@/components/LoveStory";
import SaveTheDate from "@/components/SaveTheDate";
import WishesForm from "@/components/WishesForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero /> 
      <SaveTheDate />
      <PhotoGallery />
      <LoveStory />
     
      <WishesForm />
      <Footer />
    </div>
  );
};

export default Index;
