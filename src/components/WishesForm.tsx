import { useState } from "react";
import { Send, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const WishesForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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
      // EmailJS configuration
      const serviceId = 'service_a2gl6bk'; // You'll need to replace this
      const templateId = 'template_utxgw4j'; // You'll need to replace this
      const publicKey = 'iUsgUy-V8QFfp8l5V'; // You'll need to replace this

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'fevenbahta994@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      toast({
        title: "Wishes sent successfully!",
        description: "Thank you for your heartfelt message. Feven & Natnael will cherish it!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send wishes",
        description: "Please try again or contact us directly at fevenbahta994@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="wishes">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-peach-light/10 to-background"></div>
      
      {/* Hearts pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 25C40 25 30 15 20 25C10 35 20 45 40 60C60 45 70 35 60 25C50 15 40 25 40 25Z' fill='none' stroke='%23d4a574' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-romantic opacity-10 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-gold opacity-10 blur-3xl rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeInUp">
          <Heart className="w-12 h-12 text-gold mx-auto mb-4 animate-float" fill="currentColor" />
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
            Send Your Wishes
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl font-elegant text-muted-foreground">
            Share your love and blessings with the happy couple
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant border border-gold/10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-gold-dark mx-auto mb-6 animate-float" />
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="text-lg font-elegant text-foreground/80">
                Your heartfelt wishes have been sent to Feven and Natnael.
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
                  className="border-gold/20 focus:border-gold bg-background/50 text-lg font-elegant"
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
                  className="border-gold/20 focus:border-gold bg-background/50 text-lg font-elegant"
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
                  className="border-gold/20 focus:border-gold bg-background/50 min-h-[150px] text-lg font-elegant resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold hover:opacity-90 text-white text-lg py-6 rounded-xl font-elegant uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.5)] disabled:opacity-50"
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

        <p className="text-center mt-8 text-sm font-elegant text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Your wishes will be sent directly to{" "}
          <a href="mailto:fevenbahta994@gmail.com" className="text-gold hover:underline">
            fevenbahta994@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default WishesForm;
