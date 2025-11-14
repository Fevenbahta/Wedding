import { useState } from "react";
import { Send, Heart, CheckCircle, Camera, Star, Shirt, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ThankYouSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const creativeTeam = [
    { 
      name: "Miss Shiqirqir", 
      role: "Bridal Dress Designer", 
      icon: Shirt,
      links: [
        { 
          platform: "TikTok", 
          url: "https://www.tiktok.com/@miss_shiqirqir?_r=1&_t=ZM-91OCMmAjmNk",
          icon: "🎵"
        },
        { 
          platform: "Instagram", 
          url: "https://www.instagram.com/miss_shiqirqir?igsh=Mm13eDlmdWt0d3Vw",
          icon: "📷"
        }
      ]
    },
    { 
      name: "Ng Pictures", 
      role: "Portrait Photography", 
      icon: Camera,
      links: [
        { 
          platform: "TikTok", 
          url: "https://www.tiktok.com/@natigezahegn?_t=ZS-90LRCdqKvG4&_r=1",
          icon: "🎵"
        },
        { 
          platform: "Instagram", 
          url: "https://www.instagram.com/_ng_pictures?utm_source=qr&igsh=eTd3Z3BocXZpajFp",
          icon: "📷"
        }
      ]
    },
    { 
      name: "Eyeta Pictures", 
      role: "Candid Photography", 
      icon: Camera,
      links: []
    },
    { 
      name: "Eyob Pictures", 
      role: "Event Photography", 
      icon: Camera,
      links: []
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your wishes.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = 'service_a2gl6bk';
      const templateId = 'template_utxgw4j';
      const publicKey = 'iUsgUy-V8QFfp8l5V';

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'fevennigussie8892@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      toast({
        title: "Wishes sent successfully!",
        description: "Thank you for your heartfelt message. Natnael & Feven will cherish it!",
      });
      
      setName("");
      setEmail("");
      setMessage("");
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send wishes",
        description: "Please try again or contact us directly at fevennigussie8892@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social Media Icon Component
  const SocialIcon = ({ platform, url, emoji }: { platform: string; url: string; emoji: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-3 bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 rounded-xl hover:from-gold/30 hover:to-gold/20 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      title={`Visit on ${platform}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gold/5 rounded-xl group-hover:bg-gold/10 transition-colors duration-300"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <span className="text-lg font-medium">{emoji}</span>
        <span className="text-xs font-elegant text-foreground/70 group-hover:text-foreground transition-colors">
          {platform}
        </span>
      </div>
      
      {/* External Link Indicator */}
      <ExternalLink className="absolute top-1 right-1 w-3 h-3 text-gold/60 group-hover:text-gold group-hover:scale-110 transition-all duration-300" />
    </a>
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="thank-you">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/5 to-background"></div>
      
      {/* Floating Hearts Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20C30 20 22.5 12.5 15 20C7.5 27.5 15 35 30 47.5C45 35 52.5 27.5 45 20C37.5 12.5 30 20 30 20Z' fill='none' stroke='%23d4a574' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-romantic opacity-10 blur-3xl rounded-full animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-gold opacity-5 blur-3xl rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Thank You Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center gap-3 mb-6">
            {[1, 2, 3].map((i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-current animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-foreground">
            With Gratitude
          </h2>
          <div className="h-px w-32 bg-gradient-gold mx-auto mb-6 shimmer-gentle"></div>
          <p className="text-xl md:text-2xl font-elegant text-foreground/80 max-w-2xl mx-auto">
            Our heartfelt thanks to everyone who made this day magical
          </p>
        </div>

        {/* Creative Team Section */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
            Special Thanks To
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeTeam.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:scale-105"
                >
                  {/* Main Content */}
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl flex items-center justify-center group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-10 h-10 text-gold" />
                    </div>
                    <h4 className="text-xl font-serif text-foreground mb-2 group-hover:text-gold transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-foreground/70 font-elegant text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Media Links */}
                  {member.links.length > 0 && (
                    <div className="space-y-3 mt-6">
                      <p className="text-xs font-elegant text-foreground/60 text-center uppercase tracking-wider">
                        Follow Their Work
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {member.links.map((link, linkIndex) => (
                          <SocialIcon
                            key={linkIndex}
                            platform={link.platform}
                            url={link.url}
                            emoji={link.icon}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Links Description */}
          <div className="text-center mt-12 bg-background/30 backdrop-blur-sm rounded-2xl p-6 border border-gold/10 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <ExternalLink className="w-5 h-5 text-gold animate-pulse" />
              <span className="font-elegant text-foreground/80">Click to explore their work</span>
            </div>
            <p className="text-sm text-foreground/60 font-elegant">
              Discover more beautiful creations from our talented team
            </p>
          </div>
        </div>

        {/* Wishes Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Heart className="w-12 h-12 text-gold mx-auto mb-4 animate-float" fill="currentColor" />
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
              Send Your Wishes
            </h3>
            <div className="h-px w-20 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-elegant text-muted-foreground">
              Share your love and blessings with the happy couple
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant border border-gold/10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6 animate-float" />
                <h4 className="text-3xl font-serif font-light text-foreground mb-4">
                  Thank You!
                </h4>
                <p className="text-lg font-elegant text-foreground/80">
                  Your heartfelt wishes have been sent to Natnael & Feven.
                  They will treasure your message!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-elegant text-foreground/80 uppercase tracking-wider">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-gold/20 focus:border-gold bg-background/50 text-lg font-elegant hover:border-gold/30 transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-elegant text-foreground/80 uppercase tracking-wider">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gold/20 focus:border-gold bg-background/50 text-lg font-elegant hover:border-gold/30 transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-elegant text-foreground/80 uppercase tracking-wider">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share your wishes and blessings for the couple..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-gold/20 focus:border-gold bg-background/50 min-h-[150px] text-lg font-elegant resize-none hover:border-gold/30 transition-colors duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold hover:opacity-90 text-white text-lg py-6 rounded-xl font-elegant uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_92%_50%/0.6)] disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Wishes
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          <p className="text-center mt-8 text-sm font-elegant text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            Your wishes will be sent directly to{" "}
            <a href="mailto:fevennigussie8892@gmail.com" className="text-gold hover:underline font-semibold transition-all duration-300 hover:text-gold-dark">
              fevennigussie8892@gmail.com
            </a>
          </p>
        </div>

        {/* Final Thank You Message */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gold/10 hover:border-gold/20 transition-all duration-500 hover:scale-[1.02]">
            <p className="text-xl md:text-2xl font-elegant text-foreground/80 leading-relaxed italic">
              "Thank you for being part of our special day and for all the love and support 
              that has brought us to this beautiful moment in our lives."
            </p>
            <p className="text-lg font-serif text-gold mt-6">
              With all our love,
            </p>
            <p className="text-2xl font-serif text-foreground mt-2">
              Natnael & Feven
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;