'use client';

import { Captions, UsersRound } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTimeAgo } from 'next-timeago';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// eslint-disable-next-line import/no-extraneous-dependencies
interface LabProps {
  isOpen: boolean;
  name: string;
  numberOfteacher: number;
  numberOftopic?: number;
  numberOfStudents: number;
  lastUpdated: Date;
  imageUrls?: string;
  specialized?: string;
  id: string;
}

const ItemLab: React.FC<LabProps> = ({
  isOpen,
  name,
  numberOfteacher,
  numberOftopic,
  numberOfStudents,
  lastUpdated,
  imageUrls,
  specialized,
  id,
}) => {
  const { TimeAgo } = useTimeAgo();

  return (
    <Link href={`/labs/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>
            {name}
            <Badge variant="secondary">
              <TimeAgo date={lastUpdated} />
            </Badge>
            <CardDescription>{specialized}</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <img
            src={imageUrls}
            alt="lab"
            className="rounded-md h-40 w-full object-cover"
          />
          <div className="absolute top-4 right-8">
            <Badge variant={isOpen ? 'default' : 'destructive'}>
              {' '}
              {isOpen ? 'Đang mở' : 'Đã đóng'}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4 flex-col xl:flex-row">
            <Button
              variant="outline"
              className="mb-1 py-1 px-2 text-xs"
              size="sm"
            >
              <UsersRound className="mr-2 h-4 w-4" /> Giảng viên:{' '}
              {numberOfteacher}
            </Button>
            <Button
              variant="outline"
              className="mb-2  py-1 px-2 text-xs"
              size="sm"
            >
              <Captions className="mr-2 h-4 w-4" /> Chủ đề: {numberOftopic}
            </Button>
            <Button
              variant="outline"
              className="mb-1  py-1 px-2 text-xs"
              size="sm"
            >
              <UsersRound className="mr-2 h-4 w-4" /> Sinh viên:{' '}
              {numberOfStudents}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ItemLab;
