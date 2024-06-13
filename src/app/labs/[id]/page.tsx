'use client';

// eslint-disable-next-line import/order
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useTimeAgo } from 'next-timeago';

import { LabData } from '@/lib/database/labs';
import { TeacherData } from '@/lib/database/teachers';
import type { LabTopics, Labs, Teacher } from '@/lib/database';
import CircileLoading from '@/app/loading';
import TeacherCarousel from '@/components/LabDetail/TeacherCarousel';
import { Button } from '@/components/ui/button';
import { LabTopicsData } from '@/lib/database/labtopics';
import TopicCarousel from '@/components/LabDetail/TopicCarousel';

type Props = {
  params: { id: string };
};

const LabsDetail = ({ params }: Props) => {
  const [lab, setLab] = useState<Labs>();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [topics, setTopics] = useState<LabTopics[]>([]);
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
    lab?.topic_ids?.forEach(id => {
      const topic = LabTopicsData.filter(t => t.id === id)[0];
      setTopics(prev => [...prev, topic]);
    });
    document.title = `Labs - ${lab?.name}` || 'Labs ...';
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
      <div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline">{lab.specialized}</Button>
          <Button variant="outline">Salary {lab.salary} $</Button>
          <Button variant="outline">Students {lab.number_of_students}</Button>
          <Button variant="outline">{lab.language}</Button>
          <Button variant="outline">{lab.working_time}</Button>
        </div>
      </div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Teachers
      </h3>
      <TeacherCarousel teachers={teachers} />

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Topics
      </h3>
      <TopicCarousel topics={topics} />

      <p className="leading-7 [&:not(:first-child)]:mt-6">{lab.description}</p>
    </div>
  );
};

export default LabsDetail;
