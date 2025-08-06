'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CourseOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const weeks = [
    {
      week: "Before the start date",
      title: "Prep sessions",
      description: "Get ready to write before the course starts with 5 video prep sessions. Tom will go over the \"5 P's\" you need to consider before embarking on 101 days of writing.",
      sessions: [
        { name: "Pitch", icon: "/assets/landing/prep/pitch.svg" },
        { name: "Protagonist", icon: "/assets/landing/prep/protagonist.svg" },
        { name: "Plotting", icon: "/assets/landing/prep/plotting.svg" },
        { name: "Point-of-view", icon: "/assets/landing/prep/pov.svg" },
        { name: "Place", icon: "/assets/landing/prep/place.svg" }
      ],
      isPrep: true
    },
    {
      week: "Course start date",
      description: "A great book grabs the reader from the get-go. This course begins at the beginning, then guides you through the writing process, right to the closing sentence. It's everything you need to write your novel, except the coffee (we haven't worked out how to digitize that yet)."
    },
    {
      week: "Week One",
      title: "Beginnings",
      description: "We start with the start. What is the best way to begin your novel and hook the reader's attention? How do you introduce elements like character and backstory?",
      topics: "Session Topics: Beginnings, Starting Again, Introducing Character, Backstory, Grounding the Reader.",
      icon: "/assets/landing/lessons/beginnings.svg"
    },
    {
      week: "Week Two",
      title: "Secret Sauce",
      description: "In this week's sessions, we'll look at the magic ingredients that you need to sprinkle into your story to make your characters and narrative come alive.",
      topics: "Session Topics: Movement, Change, Space, Peril, Voice.",
      icon: "/assets/landing/lessons/secret-sauce.svg"
    },
    {
      week: "Week Three",
      title: "Character",
      description: "Character and Plot are both crucial for your story. But thinking about character first often helps to answer any plot questions you might have.",
      topics: "Session Topics: Caring and Liking, Flaws, Inner Tension, Change, Feeling.",
      icon: "/assets/landing/lessons/character.svg"
    },
    {
      week: "Week Four",
      title: "Plot Skills 1",
      description: "Plot and structure is a theme interweaved throughout the course. In this first week of plot skills, we'll focus in on some of the principles of plotting to help you tell your story.",
      topics: "Session Topics: Story DNA, Scene Versus Summary, Revealing Information, Flashbacks, Mystery and Surprise.",
      icon: "/assets/landing/lessons/plot-skills-1.svg"
    },
    {
      week: "Week Five",
      title: "Description",
      description: "A good story has a good place at its heart. But how do you bring your settings to life? We'll analyse some of the key techniques to help you write dynamic description.",
      topics: "Session Topics: Senses, Movement, Colour, Small Details, People and the Past.",
      icon: "/assets/landing/lessons/description.svg"
    },
    {
      week: "Week Six",
      title: "Dialogue",
      description: "Speech is central to good fiction: get it right and you'll add voice, pace, and tension into your telling. We'll show you how.",
      topics: "Session Topics: Voice, Conflict, Rhythm, Real Speech, Body Language.",
      icon: "/assets/landing/lessons/dialogue.svg"
    },
    {
      week: "Week Seven",
      title: "Texture",
      description: "Dialogue and Description are two key textures in writing a story. This week, we'll look at additional textures, and how to mix them to compelling effect.",
      topics: "Session Topics: Action, Thought, Dialogue Vs Description, Dialogue Description, Pace, Mixing Together.",
      icon: "/assets/landing/lessons/texture.svg"
    },
    {
      week: "Week Eight",
      title: "Middles",
      description: "The halfway point of the course (and hopefully in your writing journey as well). We'll spend this week studying the challenges of writing effective middles, stress testing your narratives so far and thinking ahead to the second half.",
      topics: "Session Topics: Soggy Middles, The Midpoint, Wants and Needs, Links, Thinking Forwards.",
      icon: "/assets/landing/lessons/middles.svg"
    },
    {
      week: "Week Nine",
      title: "Writing Skills",
      description: "We begin the second half of the course with a fortnight's focus on writing skills and techniques. We'll start by taking your writing back to basics, and exploring some of the tools at your fingertips.",
      topics: "Session Topics: Words, Verbs, Sounds, Sentences, Paragraphs.",
      icon: "/assets/landing/lessons/writing-skills.svg"
    },
    {
      week: "Week Ten",
      title: "Writing Techniques",
      description: "In this second week of writing skills, we focus in on some key techniques for emphasis, and how you can make the most of the most important moments in your book.",
      topics: "Session Topics: Rule of Three, Repetition, Build, Contrast, Imagery.",
      icon: "/assets/landing/lessons/writing-techniques.svg"
    },
    {
      week: "Week Eleven",
      title: "Chapters",
      description: "Chapters and chapter structure give shape to your story and create signposts for your reader. This week, we'll look at how you make the most of these building blocks, from beginnings and ends to chapter lengths and pacing.",
      topics: "Session Topics: Chapters Overview, Beginnings and Ends, Lengths, Chapter Structure, Pulling Together.",
      icon: "/assets/landing/lessons/chapters.svg"
    },
    {
      week: "Week Twelve",
      title: "Plot Skills 2",
      description: "A second full plot week where we focus in on some further skills to boost your writing.",
      topics: "Session Topics: Foreshadowing, Group Scenes, Dovetailing, Time, Punctuating a Scene.",
      icon: "/assets/landing/lessons/plot-skills-2.svg"
    },
    {
      week: "Week Thirteen",
      title: "Doubling Up",
      description: "This week we'll look at making your writing work twice as hard, delivering on not just one element, but two at the same time.",
      topics: "Session Topics: Action and Story, Action and Character, Description and Story, Description and Character, Dialogue and Story.",
      icon: "/assets/landing/lessons/doubling-up.svg"
    },
    {
      week: "Week Fourteen",
      title: "Endings",
      description: "In the final full week of the course, it's all about thinking about your endings. How do you finish your story in a way that leaves the reader fully satisfied?",
      topics: "Session Topics: Resolution, Bookending, Imagery, Movement, Possibility.",
      icon: "/assets/landing/lessons/endings.svg"
    },
    {
      week: "Week Fifteen",
      title: "Next Steps",
      description: "As we approach the end of our 101 days together, we'll think about the next steps to take with your first draft. How do you go about editing? What's next?",
      topics: "Session Topics: Editing Plan, Editing, The End.",
      icon: "/assets/landing/lessons/next-steps.svg"
    }
  ];

  const visibleWeeks = isExpanded ? weeks : weeks.slice(0, 4);

  return (
    <div className='bg-gray-100 w-full'>
      <section className="py-16 lg:py-24 px-20 max-w-screen-2xl mx-auto bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" id="course-overview">
                Course overview
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Support that empowers you to finish writing your first draft in just 3 months.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Track */}
              <div className="absolute left-8 top-0 bottom-0 w-2 bg-yellow-500 rounded-full"></div>

              {/* Course Weeks */}
              <div className="space-y-8">
                {visibleWeeks.map((week, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-6 h-6 bg-white rounded-full border-4 border-black shadow-lg"></div>

                    {/* Week Content */}
                    <div className="rounded-2xl p-6 lg:p-8">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {week.week}
                        </h4>
                      </div>

                      {week.isPrep ? (
                        <div className="bg-amber-200 border border-amber-500 rounded-xl p-6">
                          <div className="flex items-center justify-start gap-2 mb-4">
                            <h4 className="text-xl font-bold text-gray-900">
                              {week.title}
                            </h4>
                            <span className="bg-yellow-500 text-white text-md font-md px-3 py-1 rounded-full">
                              Available today
                            </span>
                          </div>
                          <p className="text-gray-700 mb-6">{week.description}</p>

                          {/* Prep Sessions */}
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {week.sessions?.map((session, sessionIndex) => (
                              <div key={sessionIndex} className="text-center group">
                                <Image
                                  src={session.icon}
                                  alt={session.name}
                                  width={250}
                                  height={250}
                                  className="mx-auto mb-2"
                                />
                                <h5 className="text-sm font-medium text-gray-900">{session.name}</h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : week.title ? (
                        <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-md p-6">
                          <div className="flex-shrink-0">
                            <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
                              <Image
                                src={week.icon || ''}
                                alt={week.title}
                                width={250}
                                height={250}
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {week.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {week.description}
                            </p>
                            {week.topics && (
                              <div className="p-4">
                                <p className="text-sm font-medium">
                                  {week.topics}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">{week.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="flex items-center space-x-2">
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-5 h-5" />
                        <span>Hide outline</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5" />
                        <span>View full outline</span>
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 