import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.webp";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
   <div 
  className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/10"
></div>

      </div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `radial-gradient(circle at 20px 20px, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-romantic opacity-20 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-peach opacity-15 blur-3xl rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fadeInUp">
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-gold animate-float" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-foreground">
          Natnael <span className="text-gold">&</span> Feven
        </h1>
        
        <div className="h-1 w-32 bg-gradient-gold mx-auto mb-6 shimmer"></div>
        
        {/* <p className="text-2xl md:text-3xl text-white font-elegant text-foreground/90 mb-8">
          Our Love Story
        </p> */}
       <div className="text-center mt-16">
          <div className="rounded-2xl text-white p-8 max-w-2xl mx-auto border border-gold/10">
            <p className="text-3xl text-foreground/80  text-white font-elegant leading-relaxed">
              "With hearts full of love and gratitude, we invite you to share in our joy 
              as we begin our forever together in the beautiful city of Nazret."
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 md:left-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-peach rounded-full glow-soft"></div>
        </div>
        <div className="absolute top-1/3 right-10 md:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 bg-gold rounded-full glow-soft"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-rose rounded-full glow-soft"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
