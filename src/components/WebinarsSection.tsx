import Image from 'next/image';

export default function WebinarsSection() {
  return (
    <div className='w-full bg-[#eff2f3]'>
      <section className="py-16 lg:py-24 px-20 max-w-screen-2xl mx-auto bg-[#eff2f3]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Image Section - Left on large screens, centered on small */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Gradient overlay background */}

                  {/* Main image container */}
                  <div className="relative bg-white rounded-2xl0">
                    <Image
                      src="/assets/landing/webinars.jpg"
                      alt="Professional authors and writing coaches collage"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section - Right on large screens, below on small */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Learn from professional authors and writing coaches
                  </h2>

                  <div className="space-y-8">
                    {/* Live Webinars Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="bg-[#edac01] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Live
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                          Webinars
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Participate in two live webinars each week. Engage with Tom, expert writing coaches, and your classmates. Access future webinars for 12 months after you start the course.
                      </p>
                    </div>

                    {/* Author Interviews Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                        Author Interviews
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        As you progress through the course, you'll unlock interviews with incredible authors who share their story — and their tips and tricks — with you.
                      </p>
                    </div>
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