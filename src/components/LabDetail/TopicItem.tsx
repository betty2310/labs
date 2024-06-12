import React from 'react';

import { Card } from '@/components/ui/card';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '../ui/button';

type Props = {
  name: string;
  description: string;
  numberOfStudents: number;
};

export default function TeacherItem({
  name,
  description,
  numberOfStudents,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="w-[300px] p-4 hover:cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{description}</p>
              <p className="text-sm text-muted-foreground">
                {numberOfStudents}
              </p>
            </div>
          </div>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>TS. {name}</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-right">{name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-right">{name}</p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
