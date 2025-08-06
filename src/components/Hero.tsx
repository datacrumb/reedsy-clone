'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Hero = () => {
  const handlePlayVideo = () => {
    // Video player functionality
    const video = document.getElementById('landing-page-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/landing/landing.jpg"
          alt="Background with Tom Bromley"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Dark overlay on the left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111119a6] via-[#11111980] to-transparent"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/learning" className="text-2xl font-bold">
                <span className="text-white">DataCrumbs</span>
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className='border-[#12191f]'>
                    <NavigationMenuTrigger className="text-white hover:text-[#edac01] bg-transparent border-b-2 border-[#edac01] pb-2 font-medium">
                      Masterclass
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-[#12191f] text-white">
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">Components</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Documentation</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Blocks</Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className='border-[#12191f]'>
                    <NavigationMenuTrigger className="text-white hover:text-[#edac01] bg-transparent">
                      Events
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-[#12191f] text-white">
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">Components</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Documentation</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="#">Blocks</Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/learning/courses" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-white hover:text-[#edac01] bg-transparent"}>
                        Library
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="bg-[#edac01] hover:bg-[#d18900] text-gray-900"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-200px)]">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-3 order-2 lg:order-1">
            {/* Career Bootcamp Label */}
            <div>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                Career Bootcamp
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              How to Crack<br />
              Your Interview
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Land your dream job. Join our Interview Prep<br />
                Masterclass and build confidence, clarity, and answers<br />
                that impress!
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                We're launching this powerful course soon! Get on our<br />
                exclusive waiting list and be the first to know when it<br />
                goes live.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#edac01] hover:bg-[#d18900] text-gray-900 font-semibold px-8 py-4 rounded-md text-lg shadow-lg"
              >
                Join the waiting list
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800/80 backdrop-blur-sm border-gray-600 text-white hover:text-white hover:bg-gray-700/80 font-semibold px-8 py-4 rounded-md text-lg"
                asChild
              >
                <Link href="/learning/auth/social_sign_in/google?sign_up_course_intent=how-to-write-a-novel&sign_up_origin=landing_page">
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-3">
                      <svg viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                    Sign in with Google
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image Area */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative h-[400px] lg:h-[600px] w-full">
              {/* Watch Trailer Button - Centered on the right side image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handlePlayVideo}
                  variant="outline"
                  size="lg"
                  className="bg-gray-800/90 backdrop-blur-sm border-gray-600 text-white hover:bg-gray-700/90 rounded-md px-6 py-3 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;