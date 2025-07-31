'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      id: 'faq-who-for',
      question: 'Who should take this course?',
      answer: 'This course is appropriate for writers of all levels and backgrounds. Whatever your previous experience and whatever genre you are writing in, it can help you finish your novel.'
    },
    {
      id: 'faq-how-does-it-work',
      question: 'How does the course work?',
      answer: 'The course gives you time to learn and time to write. Each week, you\'ll access six video lessons and one live webinar. How you choose to structure your writing time is up to you. Throughout, you can turn to our vibrant online community to discuss your work and find support.'
    },
    {
      id: 'faq-what-course-covers',
      question: 'What does the course cover?',
      answer: 'In short, everything you need to know to write a novel. The themed weeks focus in-depth on the following topics: Preparation, Beginnings, Secret Sauce, Character, Plot Skills, Description, Dialogue, Texture, Middles, Writing Skills, Writing Techniques, Chapters, Doubling Up, Endings, and Next Steps.'
    },
    {
      id: 'faq-how-long',
      question: 'How long is the course?',
      answer: 'The course lasts for 101 days — that\'s fourteen and a half weeks. Upon enrolling, you\'ll also access five preparation sessions that will help you get ready to write.'
    },
    {
      id: 'faq-how-lessons-look-like',
      question: 'What do the lessons look like?',
      answer: 'Each weekday, you\'ll get access to a new video lesson on a specific writing topic, along with optional reading and exercises. On Saturdays, you\'ll get further videos with our panel of guest writers; some reinforce the week\'s writing theme, while others cover the challenges of writing more generally.'
    },
    {
      id: 'faq-how-long-each-session',
      question: 'How long will each session lesson take?',
      answer: 'Each video masterclass is 10-15 minutes long, so you can complete your lessons and start writing in as little as 90 minutes per week. If you\'d rather take a deep dive, completing the optional readings and exercises will take an additional 45 minutes (totaling one hour of study per weekday session).'
    },
    {
      id: 'faq-how-much-writing-each-day',
      question: 'How much writing do I need to do each day?',
      answer: 'You\'ll need to write around 5,000 words a week to complete a 75,000-word manuscript. Writing 1,000 words a day, Monday to Friday, will keep you on track, but how you structure your writing is up to you.\n\nIt\'s worth saying that over the course of the novel, your weekly word count may well change. Some writing weeks will be more productive than others, so this is an average to aim for. We\'ll give you a word count calculator so you can update how much you\'ve written and how far you have left to go.'
    },
    {
      id: 'faq-how-much-time-complete-course',
      question: 'How much time should I set aside per week to complete the course properly?',
      answer: 'It\'s up to you, but you\'ll generally need at least 10 hours per week to watch the video lessons and complete your writing. If you\'d like to complete all exercises and readings, expect to spend closer to 15 hours per week. If you\'ve opted into feedback, expect to spend a further hour of time reading and responding to your partner.'
    },
    {
      id: 'faq-unlock-material',
      question: 'Can I unlock the material more quickly? What if I\'m going away?',
      answer: 'Lessons are unlocked in weekly batches, which can help you get ahead. However, we recommend sticking to the daily rhythm, as the course is designed to help you establish a writing routine.'
    },
    {
      id: 'faq-how-live-sessions-work',
      question: 'How do the live sessions work?',
      answer: 'Weekly live sessions include a mixture of interviews with guest authors, further masterclasses on various topics, and live editing sessions. Once you enroll, you\'ll see the calendar of live events in the Learning Dashboard. All live sessions will be recorded, so you\'ll be able to watch any that you miss.'
    },
    {
      id: 'faq-how-feedback-works',
      question: 'How does feedback work?',
      answer: 'Each week, we\'ll run Feedback Friday, where you can share a section of work for review. We\'ll pair you up with someone else so you can offer detailed feedback on their work in return. This should be completed by the end of the weekend (before the start of the next week\'s sessions). If you don\'t want to give feedback and prefer to concentrate on your work, that\'s fine too.'
    },
    {
      id: 'faq-instructor-feedback',
      question: 'Is feedback also available from the instructor?',
      answer: 'Although the work of many students will be critiqued in the live editing sessions, individual instructor feedback is not currently available. There are, however, a number of wonderful book coaches and editors on Reedsy should you want further feedback on your first draft.'
    },
    {
      id: 'faq-preparation-sessions',
      question: 'What are the preparation sessions?',
      answer: 'Before the course officially starts, we\'ll give you access to a week of prep sessions. These will help you assess your ideas and make sure you\'re ready to start drafting your novel.'
    },
    {
      id: 'faq-not-ready-to-write',
      question: 'What happens if I sign up but realize I\'m not ready to write?',
      answer: 'Don\'t worry! You\'ll only be charged on the first day of the course. If you sign up and realize you need more time after completing the prep sessions, you can cancel or defer your enrollment to a future start date.'
    },
    {
      id: 'faq-do-not-finish-in-time',
      question: 'What happens if I don\'t finish my draft by the end of the course?',
      answer: 'You can continue writing the novel on your own timeline. You\'ll keep access to the course material, so you can return to it at any point. To help you across the finish line, you\'ll also have access to the community hub for another 9 months.'
    },
    {
      id: 'faq-buy-gift-card',
      question: 'Can I buy the course as a gift?',
      answer: 'Help a writer in your life turn their ideas into a finished book by gifting them this course. When you buy a gift card, you\'ll receive a PDF containing the gift card that you can print or share with the recipient.'
    },
    {
      id: 'faq-redeem-gift-card',
      question: 'How can I redeem my gift card?',
      answer: 'If you\'ve received this course as a gift, visit PRkhPWVzzhcW.com/learning. To redeem your course, choose a start date and enter your unique gift code on the payment page.'
    },
    {
      id: 'faq-offer-split-payments',
      question: 'Do you offer split payments?',
      answer: 'You have the option to pay for the course in monthly instalments (4 x $349). The first payment will be taken as a deposit when you enrol in the course.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#1b242b] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-200">
              Everything you need to know about the course
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-[#26343f] rounded-lg border border-[#1d2730] overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:bg-[#1d2730] transition-colors duration-200 [&[data-state=open]>div]:text-yellow-400">
                  <h4 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-[#1d2730]">
                    <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 