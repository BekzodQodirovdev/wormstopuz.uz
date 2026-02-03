'use client'

import React, { useState } from 'react';
import { storyData } from '@/data/story-content';
import { VisualBlock } from './VisualBlock';

export const StickyScrollWrapper = () => {
  const [activeId, setActiveId] = useState<number>(storyData[0].id);

  return (
    <div className="relative w-full max-w-3xl mx-auto pb-12">
      <div className="flex flex-col space-y-4 md:space-y-8">
        {storyData.map((segment) => (
          <VisualBlock 
            key={segment.id} 
            segment={segment} 
            onInView={setActiveId} 
          />
        ))}
      </div>
    </div>
  );
};
