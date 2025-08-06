import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function InstructorSection() {
  return (
    <div className='w-full bg-[#eff2f3]'>
      <section className="py-10 text-white bg-[#eff2f3] md:px-20 max-w-screen-2xl mx-auto">
        <div className="container mx-auto px-4 lg:px-8 py-10 rounded-xl bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Video */}
              <div className="relative group">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-300">
                  <div className="aspect-video">
                    <video
                      id="meet-tom"
                      className="w-full h-full object-cover"
                      controls
                      crossOrigin="anonymous"
                      data-dash-manifest-uri="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_b589e385-1a2d-44d5-889b-6933a47d0b2b/dash.mpd"
                      data-hls-manifest-uri="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_b589e385-1a2d-44d5-889b-6933a47d0b2b/hls.m3u8"
                      data-poster="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_b589e385-1a2d-44d5-889b-6933a47d0b2b/poster_medium.jpg"
                      data-video-title="Meet Tom"
                      playsInline
                    >
                      <source src="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_b589e385-1a2d-44d5-889b-6933a47d0b2b/hls.m3u8" type="application/x-mpegURL" />
                      <track
                        kind="subtitles"
                        src="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_b589e385-1a2d-44d5-889b-6933a47d0b2b/subtitles_en_cc.vtt?1704732592"
                        srcLang="en"
                        label="English (CC)"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Meet your instructor
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    I'm Tom Bromley, your instructor. Over the past 25 years I've published ten books under my own name, fifteen as a bestselling and prize-winning ghost (not the scary kind), edited over a hundred titles, and taught novel writing to thousands of students around the world. Now it's your turn!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  asChild
                >
                  <Link href="/learning/about">
                    <span className="flex items-center space-x-2">
                      <span>Read Tom's Bio</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 