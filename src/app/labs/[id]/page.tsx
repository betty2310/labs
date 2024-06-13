/* eslint-disable @next/next/no-img-element */

'use client';

// eslint-disable-next-line import/order
import React, { useEffect, useState } from 'react';
import { Briefcase, DollarSign, Users, Globe, Clock } from 'lucide-react';

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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
        <div className="mt-4 w-3/4">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center">
              <Briefcase className="h-5 w-5 text-gray-600 mr-2" />
              <div className="text-sm">{lab.specialized}</div>
            </li>
            <li className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-600 mr-2" />
              <div className="text-sm">Salary {lab.salary} $</div>
            </li>
            <li className="flex items-center">
              <Users className="h-5 w-5 text-gray-600 mr-2" />
              <div className="text-sm">Students {lab.number_of_students}</div>
            </li>
            <li className="flex items-center">
              <Globe className="h-5 w-5 text-gray-600 mr-2" />
              <div className="text-sm">
                {lab.language === undefined ? 'No need' : lab.language}
              </div>
            </li>
            <li className="flex items-center">
              <Clock className="h-5 w-5 text-gray-600 mr-2" />
              <div className="text-sm">Working time: {lab.working_time}</div>
            </li>
          </ol>
        </div>
      </div>
      <h3 className="scroll-m-20 mt-4 text-2xl font-semibold tracking-tight">
        Teachers
      </h3>
      <TeacherCarousel teachers={teachers} />

      <h3 className="scroll-m-20 mt-4 text-2xl font-semibold tracking-tight">
        Topics
      </h3>
      <TopicCarousel topics={topics} />
      <p className="leading-7 [&:not(:first-child)]:mt-6">{lab.description}</p>
      <div className="flex items-center justify-center w-full mb-4">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {lab.image_urls.map((url, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CarouselItem key={index}>
                <img src={url} alt="des" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default LabsDetail;
