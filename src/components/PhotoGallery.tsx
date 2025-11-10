import { useState } from "react";
import { X } from "lucide-react";
import engagement1 from "@/assets/engagement-1.jpg";
import engagement2 from "@/assets/engagement-2.jpg";
import engagement3 from "@/assets/engagement-3.jpg";
import engagement4 from "@/assets/engagement-4.jpg";
import memories1 from "@/assets/memories-1.jpg";
import memories2 from "@/assets/memories-2.jpg";
import memories3 from "@/assets/memories-3.jpg";
import memories4 from "@/assets/memories-4.jpg";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import celebration1 from "@/assets/celebration-1.jpg";
import celebration2 from "@/assets/celebration-2.jpg";
import celebration3 from "@/assets/celebration-3.jpg";
import celebration4 from "@/assets/celebration-4.jpg";
import journey1 from "@/assets/journey-1.jpg";
import journey2 from "@/assets/journey-2.jpg";
import journey3 from "@/assets/journey-3.jpg";
import journey4 from "@/assets/journey-4.jpg";

interface Gallery {
  title: string;
  photos: string[];
}

const galleries: Gallery[] = [
  {
    title: "Engagement",
    photos: [engagement1, engagement2, engagement3, engagement4],
  },
  {
    title: "Memories",
    photos: [memories1, memories2, memories3, memories4],
  },
  {
    title: "Couple",
    photos: [couple1, couple2, couple3, couple4],
  },
  {
    title: "Celebration",
    photos: [celebration1, celebration2, celebration3, celebration4],
  },
  {
    title: "Journey",
    photos: [journey1, journey2, journey3, journey4],
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden" id="gallery">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L61.8 38.2L90 50L61.8 61.8L50 90L38.2 61.8L10 50L38.2 38.2Z' fill='none' stroke='%23d4a574' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-gold opacity-5 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-peach opacity-5 blur-3xl rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Our Journey in Photos
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-elegant text-muted-foreground max-w-2xl mx-auto">
              Every picture tells a part of our beautiful story
            </p>
          </div>

          {galleries.map((gallery, galleryIndex) => (
            <div 
              key={gallery.title} 
              className="mb-20 animate-fadeInUp  rounded-xl"
              style={{ animationDelay: `${galleryIndex * 0.1}s` }}
            >
              <h3 className="text-3xl md:text-4xl text-white font-serif font-bold mb-8  rounded-xl text-center">
          <span className="bg-gradient-gold bg-clip-text text-white p-4 rounded-xl inline-block">
    {gallery.title}
  </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gallery.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-elegant hover:shadow-[0_0_30px_hsl(38_92%_50%/0.3)] transition-all duration-500"
                    onClick={() => setSelectedImage(photo)}
                  >
                    <img
                      src={photo}
                      alt={`${gallery.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-gold transition-colors p-2 rounded-full bg-background/10 hover:bg-background/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_hsl(38_92%_50%/0.5)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
