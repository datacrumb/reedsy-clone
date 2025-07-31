'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "It motivated me to write (almost) every day.",
      text: "The course was fantastic. In particular, I enjoyed the Weekly Masterclasses, and mainly because they were live. Having said that, I couldn't have done the entire course live, so the format was perfect.",
      author: "Adriana Z."
    },
    {
      quote: "One of the best decisions I've made for my writing journey.",
      text: "The practical dos and don'ts taught throughout the course gave me a clear understanding of what works and what doesn't when it comes to writing. It was like being allowed to peek behind the curtain of that secret author's club that had always felt so elusive.",
      author: "Blair R."
    },
    {
      quote: "By far the best writing class I have ever taken.",
      text: "There's an age old adage that to be a writer, you must first, and always, be a reader. Reedsy puts this into practice with the structure of this course, helping writers understand what makes a passage powerful by dissecting it with a skillful teacher.",
      author: "Nora S."
    },
    {
      quote: "It feels like a mini MFA in fiction writing.",
      text: "Such a thoughtful, clear, inspirational course. It more than earns its investment in time and money.",
      author: "Jesse G."
    },
    {
      quote: "By far the best value for money of any of the courses for self-publishing writers.",
      text: "Kudos to Tom Bromely and Reedsy for creating it. I recommend it highly to everyone who could benefit.",
      author: "Kurt K."
    },
    {
      quote: "A great investment on my journey to becoming a better writer and first time novelist.",
      text: "Tom was wonderful, and the community was also inspiring. I will revere back to this content often as I continue progressing my writing career.",
      author: "Rob V."
    },
    {
      quote: "Going well beyond the simple.",
      text: "Anyone can write a book. But it takes more than a simple understanding to write a good book. The time I spent in the Reedsy Masterclass with Tom Bromley were the best three months I could have invested. Without a doubt, it made a vast improvement in my abilities.",
      author: "Michael B."
    },
    {
      quote: "The course was superb.",
      text: "The daily lessons worked really well for me; I loved that I could watch them anytime and the topics, content and books covered were really helpful. I can't emphasise enough how useful the weekly critique sessions have been.",
      author: "Simon H."
    },
    {
      quote: "This course was everything I would want in a writing course.",
      text: "Tom is a brilliant teacher not just because of his experience and expertise, but also because of his approachability. Absolutely brilliant!",
      author: "Jill R."
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-advance slides
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-8 lg:py-12 bg-[#12191f] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Student Reviews
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="px-12 lg:px-16">
                      <div className="text-center space-y-8">
                        {/* Quote */}
                        <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Text */}
                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                          {testimonial.text}
                        </p>

                        {/* Author & Stars */}
                        <div className="flex items-center justify-end space-x-4">
                          <p className="font-semibold text-white">
                            {testimonial.author}
                          </p>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-[#edac01] text-[#edac01]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom Navigation Arrows */}
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-transparent">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>

              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-transparent">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === current 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 