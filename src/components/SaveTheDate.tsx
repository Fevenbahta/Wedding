import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";

const SaveTheDate = () => {
  const targetDate = new Date("2025-11-16T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
        <div className="relative bg-card border-2 border-gold/30 rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-[0_0_30px_hsl(38_92%_50%/0.4)] transition-all duration-300 hover:scale-105">
          <span className="text-4xl text-white md:text-6xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm md:text-base font-elegant text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="save-the-date">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-light/20 via-background to-gold-light/10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-gold opacity-10 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-peach opacity-10 blur-3xl rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0' fill='none' stroke='%23d4a574' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <Calendar className="w-12 h-12 text-gold mx-auto mb-4 animate-float" />
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
            Save the Date
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
        </div>

        <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-3 bg-card px-8 py-4 rounded-full shadow-elegant border border-gold/20 mb-8">
            <MapPin className="w-6 h-6 text-peach" />
            <span className="text-xl md:text-2xl font-elegant text-foreground">
              Nazret, Ethiopia
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-serif font-bold   text-foreground mb-2">
            November 16, 2025
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6  md:gap-8 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl font-elegant text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We can't wait to celebrate this special day with you. 
            Mark your calendars and join us for an unforgettable celebration of love!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
