import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ExplainerSections() {
  const explainers = [
    {
      title: "Learning Dashboard",
      subtitle: "Support your writing with daily masterclasses",
      description: "Join Tom for video lessons and exercises that unlock daily, then apply what you learn as you write.",
      image: "/assets/landing/dashboard.jpg",
      features: [
        "101 days of high-quality video lessons",
        "Optional exercises & further reading material",
        "Instruction at each stage of the writing process",
        "Watch lessons and take notes on any device",
        "Online dashboard to track your progress"
      ],
      reversed: false
    },
    {
      title: "MEMBERS FORUM",
      subtitle: "Meet your writing crew and get instant feedback",
      description: "Our members' hub is the perfect place to discuss the lesson of the day, share feedback, and learn from other students in your genre.",
      image: "/assets/landing/forum.jpg",
      features: [
        "12 month access to our members' hub",
        "Meet and engage with other authors in your genre",
        "Weekly feedbacking sessions and critique circles",
        "Weekly webinars with top writing coaches"
      ],
      reversed: true
    },
    {
      title: "YOU CAN DO IT",
      subtitle: "Write your first draft in 3 months",
      description: "With Tom's expert guidance and a supportive community around you, this course will help you write the first draft of your novel in just 3 months. It's designed for writers of all levels, backgrounds, and genres.",
      image: "/assets/landing/writing.jpg",
      features: [
        "Integration with our writing app, the Reedsy Studio",
        "Track your wordcount and set writing goals",
        "Share your work with the community for critiquing",
        "Stay accountable and finish your draft"
      ],
      reversed: false
    }
  ];

  return (
    <div className='bg-[#eff2f3] w-full'>
      <div className="space-y-10 bg-[#eff2f3] max-w-screen-2xl mx-auto md:px-20">
        {explainers.map((explainer, index) => (
          <section key={index} className="py-10 lg:py-10">
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`max-w-7xl mx-auto ${explainer.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h5 className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                      {explainer.title}
                    </h5>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {explainer.subtitle}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {explainer.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {explainer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-sm flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-300">
                      <Image
                        src={explainer.image}
                        alt={explainer.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 