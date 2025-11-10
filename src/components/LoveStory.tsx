import { Heart, Sparkles, Star } from "lucide-react";
import loveStoryBg from "@/assets/love-story-bg.jpg";

const LoveStory = () => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      id="love-story"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${loveStoryBg})` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-peach-light/20 to-background/50"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-rose rounded-full glow-soft animate-float"></div>
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-gold-light rounded-full glow-soft animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-peach rounded-full glow-soft animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-gold rounded-full glow-soft animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-romantic opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-gold opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-gold animate-float" fill="currentColor" />
            <Heart className="w-10 h-10 text-peach animate-float" fill="currentColor" style={{ animationDelay: '0.5s' }} />
            <Star className="w-8 h-8 text-gold animate-float" fill="currentColor" style={{ animationDelay: '1s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
            Our Love Story
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
        </div>

        <div className="space-y-12">
          {/* Chapter 1 */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant border border-gold/10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="w-6 h-6 text-gold-dark flex-shrink-0 mt-1" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                The First Spark
              </h3>
            </div>
            <p className="text-lg font-elegant text-foreground/90 leading-relaxed">
              Our story began like a scene from a fairytale, when Feven and Natnael's paths crossed 
              for the first time. What started as a chance encounter quickly blossomed into something 
              magical. From the very first conversation, there was an undeniable connection—a spark 
              that would light the way to forever.
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant border border-peach/10 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-6 h-6 text-peach flex-shrink-0 mt-1" fill="currentColor" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Growing Together
              </h3>
            </div>
            <p className="text-lg font-elegant text-foreground/90 leading-relaxed">
              Through shared dreams, laughter, and countless precious moments, Feven and Natnael's 
              love grew stronger with each passing day. They discovered in each other a best friend, 
              a confidant, and a soulmate. Together, they navigated life's journey, supporting each 
              other through every challenge and celebrating every triumph.
            </p>
          </div>

          {/* Chapter 3 */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant border border-gold/10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-start gap-4 mb-4">
              <Star className="w-6 h-6 text-gold-dark flex-shrink-0 mt-1" fill="currentColor" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Forever Begins
              </h3>
            </div>
            <p className="text-lg font-elegant text-foreground/90 leading-relaxed">
              Now, as they prepare to say "I do," Feven and Natnael are ready to embark on their 
              greatest adventure yet—a lifetime of love, companionship, and endless possibilities. 
              Their love story continues to inspire everyone around them, proving that true love is 
              not just found in fairytales, but in the beautiful reality they've created together.
            </p>
          </div>
        </div>

        {/* Decorative quote */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 text-6xl text-gold/20 font-serif">"</div>
            <p className="text-2xl md:text-3xl font-serif italic text-foreground px-8">
              Two souls, one heart, endless love
            </p>
            <div className="absolute -bottom-4 -right-4 text-6xl text-gold/20 font-serif rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
