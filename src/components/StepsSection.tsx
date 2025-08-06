import Image from 'next/image';

export default function StepsSection() {
  const steps = [
    {
      title: 'Learn',
      subtitle: 'Daily video lessons',
      image: '/assets/landing/learn.jpg',
      description: "Unlock a new skill each day, from mastering body language to answering tough interview questions. Learn through expert-led video lessons designed to build your confidence"
    },
    {
      title: 'Practice',
      subtitle: 'Mock Interviews',
      image: '/assets/landing/write.jpg',
      description: 'Simulate real interview scenarios with hands-on practice sessions. Build powerful answers using proven frameworks and get personalized feedback'
    },
    {
      title: 'Engage',
      subtitle: 'Live webinars',
      image: '/assets/landing/engage.jpg',
      description: 'Connect directly with recruiters and HR experts in live sessions. Ask questions, get insights into hiring trends, and engage with a community of like-minded job seekers.'
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