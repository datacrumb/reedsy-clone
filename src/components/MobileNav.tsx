'use client';

import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Mobile Navigation */}
      <nav className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6 space-y-6">
              {/* Masterclass */}
              <div className="space-y-3">
                <Link 
                  href="/learning"
                  className="block text-lg font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                  onClick={onClose}
                >
                  Masterclass
                </Link>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/learning"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Overview
                  </Link>
                  <Link 
                    href="/learning/about"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Meet Tom
                  </Link>
                  <Link 
                    href="/learning/courses/how-to-write-a-novel/lesson_plan"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Lessons
                  </Link>
                </div>
              </div>

              {/* Library */}
              <div>
                <Link 
                  href="/learning/courses"
                  className="block text-lg font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                  onClick={onClose}
                >
                  Library
                </Link>
              </div>

              {/* Events */}
              <div className="space-y-3">
                <Link 
                  href="/learning/events"
                  className="block text-lg font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                  onClick={onClose}
                >
                  Events
                </Link>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/learning/events"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Membership
                  </Link>
                  <Link 
                    href="/learning/events/all"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    All events
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <Button 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              asChild
            >
              <Link href="/learning/auth/sign_in?sign_up_course_intent=how-to-write-a-novel&sign_up_origin=landing_page" onClick={onClose}>
                Log in
              </Link>
            </Button>
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              asChild
            >
              <Link href="/learning/auth/sign_up?sign_up_course_intent=how-to-write-a-novel&sign_up_origin=landing_page" onClick={onClose}>
                Sign up
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
} 