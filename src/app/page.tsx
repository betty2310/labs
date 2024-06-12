'use client';

import * as React from 'react';
import { ListFilter } from 'lucide-react';

/* eslint react/no-array-index-key: off  */
import MainLayout from '@/layouts/MainLayout/MainLayout';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ItemLab from '@/components/ItemLab';
import { Button } from '@/components/ui/button';
import { LabData } from '@/lib/database/labs';

export default function LabOverview() {
  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-10 gap-4 px-8 mt-8 mb-8">
          <div className="col-span-2">filler</div>
          <div className="col-span-7">
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    A-Z
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Updated</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Created</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 mb-4">
              {LabData.map(lab => (
                <ItemLab
                  key={lab.id}
                  isOpen={lab.is_open}
                  name={lab.name}
                  numberOfteacher={lab.teacher_ids.length}
                  numberOftopic={lab.topic_ids?.length}
                  numberOfStudents={lab.number_of_students}
                  lastUpdated={lab.updated_at}
                  imageUrls={lab.image_urls[0]}
                  specialized={lab.specialized}
                  id={lab.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
