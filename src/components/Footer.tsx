import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: `radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Heart className="w-8 h-8 text-gold animate-float" fill="currentColor" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
          Natnael & Feven
        </h3>
        
        <p className="text-lg font-elegant text-muted-foreground mb-6">
          November 16, 2025 • Nazret, Ethiopia
        </p>
        
        <div className="h-px w-32 bg-gradient-gold mx-auto mb-6"></div>
        
        <p className="text-sm font-elegant text-muted-foreground/80">
          Made with love and dedication for our special day
        </p>
        
        <p className="text-xs font-elegant text-muted-foreground/60 mt-4">
          © 2025 Natnael & Feven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
