import React from 'react';

import type { Teacher } from '@/lib/database';

type Props = {
  teachers: Teacher[];
};

export default function TeacherCarousel({ teachers }: Props) {
  return <div>{teachers.length}</div>;
}
