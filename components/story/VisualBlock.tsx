'use client'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { StorySegment } from '@/data/story-content';

interface VisualBlockProps {
  segment: StorySegment;
  onInView: (id: number) => void;
}

export const VisualBlock: React.FC<VisualBlockProps> = ({ segment, onInView }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(segment.id);
        }
      },
      { 
        rootMargin: "-40% 0px -40% 0px", // Trigger when element is in the middle of viewport
        threshold: 0.1 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [segment.id, onInView]);

  return (
    <div 
      ref={ref}
      className={`py-6 md:py-8 transition-opacity duration-500`}
    >
      {/* Text Content */}
      <div className={`prose max-w-none ${segment.highlight ? 'bg-green-50 p-8 rounded-2xl border-l-8 border-green-600 shadow-md' : ''}`}>
        <p className={`leading-relaxed ${segment.highlight ? 'text-2xl md:text-3xl font-bold text-gray-900' : 'text-xl md:text-2xl font-medium text-gray-800'}`}>
          {segment.text}
        </p>
      </div>

      {/* Image - Visible on all screens now */}
      {segment.media && segment.media.type === 'image' && (
        <div className="mt-6 relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <Image 
            src={segment.media.src} 
            alt={segment.media.alt} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  );
};
