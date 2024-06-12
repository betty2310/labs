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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import ItemLab from '@/components/ItemLab';
import { Button } from '@/components/ui/button';
import { LabData } from '@/lib/database/labs';

type Lab = {
  id: string;
  name: string;
  numberOfteacher: number;
  numberOftopic: number;
  numberOfStudents: number;
  lastUpdated: Date;
  imageUrls: string;
  isOpen: boolean;
  specialized?: string;
};
const labs: Lab[] = LabData.map(lab => ({
  id: lab.id,
  name: lab.name,
  numberOfteacher: lab.teacher_ids.length,
  numberOftopic: lab.topic_ids!.length,
  numberOfStudents: lab.number_of_students,
  lastUpdated: lab.updated_at,
  imageUrls: lab.image_urls[0],
  isOpen: lab.is_open,
  specialized: lab.specialized,
}));

export default function LabOverview() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage: number = 6;
  const totalPages: number = Math.ceil(labs.length / itemsPerPage);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Lab[] = labs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-10 gap-4 px-8 mt-8 mb-8">
          <div className="col-span-2">filler</div>
          <div className="col-span-6">
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
              {currentItems.map(lab => (
                <ItemLab
                  key={lab.id}
                  isOpen={lab.isOpen}
                  name={lab.name}
                  numberOfteacher={lab.numberOfteacher}
                  numberOftopic={lab.numberOftopic}
                  numberOfStudents={lab.numberOfStudents}
                  lastUpdated={lab.lastUpdated}
                  imageUrls={lab.imageUrls}
                  specialized={lab.specialized}
                  id={lab.id}
                />
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => paginate(currentPage - 1)}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    <PaginationLink>{index + 1}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => paginate(currentPage + 1)} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
