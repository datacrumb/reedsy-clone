import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function CTASection() {
  const features = [
    '20hrs+ of high-quality video masterclasses',
    '12-month access to our writing community forum',
    'Weekly webinars with writing coaches and authors',
    'Accountability & critique as you write your first draft',
    '5 video prep sessions that get you ready to write'
  ];

  return (
    <div className=' bg-gradient-to-b from-[#1b242b] to-[#12191f]'>
      <section className="py-16 lg:py-24 md:px-20 max-w-screen-2xl mx-auto text-white border-b border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Claim your spot
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Enroll to access the learning dashboard and watch the first lesson for free,
                no upfront payment required.
              </p>
            </div>

            {/* CTA Content */}
            <div className="bg-[#26343f] rounded-lg overflow-hidden border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Pricing & Buttons */}
                <div className="p-6 lg:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        We're making this course even better! Join our exclusive waiting
                        list and be first in line when the updated version launches.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button
                        size="lg"
                        className="w-full bg-[#edac01] hover:bg-[#d18900] text-gray-900 font-semibold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Join Waiting List
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent border-[#3a4d5a] text-white hover:bg-[#3a4d5a] font-semibold text-lg py-4 rounded-lg backdrop-blur-sm"
                        asChild
                      >
                        <Link href="/learning/auth/social_sign_in/google?sign_up_course_intent=how-to-write-a-novel&sign_up_origin=landing_page">
                          <div className="flex items-center justify-center space-x-3">
                            <div className="w-5 h-5">
                              <svg viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                              </svg>
                            </div>
                            <span>Sign in with Google</span>
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="bg-[#3a4d5a] p-6 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold mb-4">What's included:</h3>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#edac01] rounded border-2 border-[#edac01] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-3 h-3 text-gray-900" />
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 