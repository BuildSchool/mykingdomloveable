import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    title: "Luxury Villa",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Modern Apartment",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Penthouse Suite",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    title: "Beachfront Property",
  },
];

export const PropertyCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {properties.map((property) => (
          <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </AspectRatio>
              <h3 className="mt-2 text-sm font-medium text-white">
                {property.title}
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};