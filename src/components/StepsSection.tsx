import Image from 'next/image';

export default function StepsSection() {
  const steps = [
    {
      title: 'Learn',
      subtitle: 'Daily video lessons',
      image: '/assets/landing/learn.jpg',
      description: 'You can achieve a lot in 3 months. Learn the foundations of writing and storytelling through daily video masterclasses with Tom Bromley.'
    },
    {
      title: 'Write',
      subtitle: 'Finish your first draft',
      image: '/assets/landing/write.jpg',
      description: 'Structure that supports you as you write your first draft. Stay accountable, get feedback, and apply what you learn as you write.'
    },
    {
      title: 'Engage',
      subtitle: 'Forum & live webinars',
      image: '/assets/landing/engage.jpg',
      description: 'Meet and chat with your fellow classmates, and join expert writing coaches and authors for weekly webinars in our members\' forum.'
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-[#12191f] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-4 lg:p-6">
              {/* Step Label */}
              <div className="mb-4">
                <h5 className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  {step.title}
                </h5>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  {step.subtitle}
                </h3>
              </div>

              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image 
                  className="w-full h-64 object-cover" 
                  src={step.image} 
                  alt={step.title}
                  width={400}
                  height={250}
                />
              </div>

              {/* Description */}
              <p className="text-white text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 