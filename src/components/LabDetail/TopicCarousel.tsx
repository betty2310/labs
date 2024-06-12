import React from 'react';

import type { LabTopics } from '@/lib/database';

import SkeletonDemo from './Skeleton';

type Props = {
  topics: LabTopics[];
};

export default function TopicCarousel({ topics }: Props) {
  if (!topics) return <SkeletonDemo />;
  return (
    <div>
      {topics.map(topic => {
        return (
          <div key={topic.id} className="flex items-center space-x-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{topic.name}</h3>
              <p className="text-sm text-gray-500">{topic.description}</p>
              <p className="text-sm text-gray-500">
                {topic.number_of_students}
              </p>
              <p className="text-sm text-gray-500">{topic.fundings}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
