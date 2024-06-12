'use client';

import React, { useEffect, useState } from 'react';

import { LabData } from '@/lib/database/labs';
import { TeacherData } from '@/lib/database/teachers';
import type { Labs, Teacher } from '@/lib/database';
import CircileLoading from '@/app/loading';
import TeacherCarousel from '@/components/LabDetail/TeacherCarousel';

type Props = {
  params: { id: string };
};

const LabsDetail = ({ params }: Props) => {
  const [lab, setLab] = useState<Labs>();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  if (!params.id) return <div>Lab not found</div>;

  useEffect(() => {
    setLab(LabData.filter(l => l.id === params.id)[0]);
  }, []);

  useEffect(() => {
    lab?.teacher_ids.forEach(id => {
      const teacher = TeacherData.filter(t => t.id === id)[0];
      setTeachers(prev => [...prev, teacher]);
    });
  }, [lab]);

  if (!lab) return <CircileLoading />;

  return (
    <div className="flex flex-col mx-20 mt-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {lab.name}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{lab.description}</p>
      <TeacherCarousel teachers={teachers} />
    </div>
  );
};

export default LabsDetail;
