'use client';

import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTimeAgo } from 'next-timeago';

import { LabData } from '@/lib/database/labs';
import { TeacherData } from '@/lib/database/teachers';
import type { Labs, Teacher } from '@/lib/database';
import CircileLoading from '@/app/loading';
import TeacherCarousel from '@/components/LabDetail/TeacherCarousel';
import { Button } from '@/components/ui/button';

type Props = {
  params: { id: string };
};

const LabsDetail = ({ params }: Props) => {
  const [lab, setLab] = useState<Labs>();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const { TimeAgo } = useTimeAgo();

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
    <div className="flex flex-col mx-20 mt-10 gap-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {lab.name}
      </h2>
      <div>
        <Button variant={lab.is_open ? 'default' : 'destructive'}>
          {' '}
          {lab.is_open ? 'Đang mở' : 'Đã đóng'}
        </Button>
        <Button variant="secondary" className="ml-2">
          <TimeAgo date={lab.updated_at} />
        </Button>
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">{lab.description}</p>
      <TeacherCarousel teachers={teachers} />
    </div>
  );
};

export default LabsDetail;
