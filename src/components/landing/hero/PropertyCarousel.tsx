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
    title: "Modern Villa",
    location: "Beverly Hills, CA",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Luxury Apartment",
    location: "Manhattan, NY",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Penthouse Suite",
    location: "Miami Beach, FL",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    title: "Beachfront Property",
    location: "Malibu, CA",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Mountain Retreat",
    location: "Aspen, CO",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Luxury Estate",
    location: "The Hamptons, NY",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Riverside Manor",
    location: "Lake Tahoe, NV",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Oceanfront Villa",
    location: "Maui, HI",
  },
];

export const PropertyCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {properties.map((property) => (
          <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="group relative overflow-hidden rounded-lg">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Property details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white">
                      {property.title}
                    </h3>
                    <p className="text-sm text-kingdom-text/80">
                      {property.location}
                    </p>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};