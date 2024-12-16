import { Star, User, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    text: "The AI-powered maintenance predictions have helped us prevent major issues before they occur. Absolutely game-changing!",
    author: "David Thompson",
    role: "Facility Manager",
    location: "London, UK",
    avatar: "/placeholder.svg"
  },
  {
    rating: 5,
    text: "Managing properties across multiple countries has never been easier. The compliance tracking alone is worth the investment.",
    author: "Anna Kowalski",
    role: "International Investor",
    location: "Warsaw, Poland",
    avatar: "/placeholder.svg"
  },
  {
    rating: 5,
    text: "The tenant screening process is now seamless. We've reduced vacancy rates by 40% since implementing MyKingdom.",
    author: "James Wilson",
    role: "Property Developer",
    location: "Sydney, Australia",
    avatar: "/placeholder.svg"
  }
];

const stats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Users"
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#001B3D] to-[#002B5C] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Join thousands of satisfied property managers worldwide
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-lg text-blue-100 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] mr-4">
                    <div className="w-full h-full rounded-full bg-blue-900 flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-100" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                    <p className="text-sm text-blue-300">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="flex flex-col items-center p-6 rounded-xl bg-blue-900/30 backdrop-blur-lg border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] mb-4">
                <div className="w-full h-full rounded-full bg-blue-900 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-100" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-blue-200">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};