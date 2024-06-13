import React from 'react';

import type { Teacher } from '@/lib/database';

import SkeletonDemo from './Skeleton';
import TeacherItem from './TeacherItem';

type Props = {
  teachers: Teacher[];
};

export default function TeacherCarousel({ teachers }: Props) {
  if (!teachers) return <SkeletonDemo />;
  return (
    <div className="flex gap-3">
      {teachers.map(teacher => {
        console.log(teacher)
        return (
          <div key={teacher.id}>
            <TeacherItem
              email={teacher.email}
              imageUrl={teacher.image_url || ''}
              name={teacher.name}
              phone={teacher.phone || ''}
            />
          </div>
        );
      })}
    </div>
  );
}
