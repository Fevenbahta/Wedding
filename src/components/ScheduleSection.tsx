

import { Calendar, Clock, MapPin, Church, Camera, Utensils, Cake } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    { 
      time: "2:00 - 3:30 PM", 
      event: "Family Photo Session", 
      location: "Nazret, Tokuma",
      icon: Camera,
      description: "Capturing precious moments with our beloved families"
    },
    { 
      time: "4:00 - 7:00 PM", 
      event: "Holy Matrimony Ceremony", 
      location: "Nazret, 02 Mulu Wengel Church",
      icon: Church,
      description: "Join us as we exchange our sacred vows"
    },
    { 
      time: "7:30 PM", 
      event: "Celebratory Reception", 
      location: "Nazret, Amede Samuel Grocery Ategeb",
      icon: Utensils,
      description: "An evening of joy, dining, and celebration"
    },
    { 
      time: "11:00 PM", 
      event: "Cake Cutting Ceremony", 
      location: "Nazret, Amede Samuel Grocery Ategeb",
      icon: Cake,
      description: "Sweet moments as we cut our wedding cake"
    }
  ];

  const getIcon = (IconComponent: React.ComponentType<any>, className: string = "") => (
    <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
      <IconComponent className={`w-6 h-6 text-gold ${className}`} />
    </div>
  );

  return (
    <section id="schedule" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>


      
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-romantic opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-peach opacity-5 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gold/40"></div>
            <Calendar className="w-8 h-8 text-gold" />
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-4">
            Celebration Schedule
          </h2>
          <p className="text-xl text-foreground/70 font-elegant max-w-2xl mx-auto">
            A day filled with love, joy, and cherished moments
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-6 group ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background transform -translate-x-1.5 z-10 hidden md:block"></div>
                
                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-gold/15 hover:border-gold/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl shadow-gold/5">
                    <div className="flex items-start gap-6">
                      {getIcon(item.icon)}
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <div className="flex items-center gap-2 text-gold font-semibold">
                            <Clock className="w-5 h-5" />
                            <span className="text-lg">{item.time}</span>
                          </div>
                          <h3 className="text-2xl font-serif text-foreground group-hover:text-gold transition-colors">
                            {item.event}
                          </h3>
                        </div>
                        
                        <p className="text-foreground/70 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-foreground/60">
                          <MapPin className="w-4 h-4" />
                          <span className="font-elegant">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Note */}
 
      </div>
    </section>
  );
};

export default ScheduleSection;