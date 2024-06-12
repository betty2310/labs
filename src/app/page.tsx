'use client';

import * as React from 'react';
import { useState } from 'react';
import { ListFilter } from 'lucide-react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
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

const ITEMS_PER_PAGE = 6;

export default function LabOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(LabData.length / ITEMS_PER_PAGE);
  const [currentData, setCurrentData] = useState(
    LabData.slice(0, ITEMS_PER_PAGE)
  );
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setCurrentData(
        LabData.slice(
          (pageNumber - 1) * ITEMS_PER_PAGE,
          pageNumber * ITEMS_PER_PAGE
        )
      );
    }
  };
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
              {currentData.map(lab => (
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
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {totalPages > 5 && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
