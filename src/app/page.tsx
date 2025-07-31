import Hero from '@/components/Hero';
import StepsSection from '@/components/StepsSection';
import VideoTrailer from '@/components/VideoTrailer';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import CourseOverview from '@/components/CourseOverview';
import ExplainerSections from '@/components/ExplainerSections';
import InstructorSection from '@/components/InstructorSection';
import WebinarsSection from '@/components/WebinarsSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StepsSection />
      <VideoTrailer />
      <CTASection />
      <Testimonials />
      <CourseOverview />
      <ExplainerSections />
      <InstructorSection />
      <WebinarsSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
