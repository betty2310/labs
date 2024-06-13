import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  email: string;
  imageUrl: string;
  phone: string;
};

export default function TeacherItem({ name, email, imageUrl, phone }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="w-[300px] p-4 hover:cursor-pointer bg-secondary">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={imageUrl} alt="@teacher" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <img src={imageUrl} alt={name} />
          <SheetTitle>TS. {name}</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="text-right text-primary underline"
            >
              {email}
            </a>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-right">{phone}</p>
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
