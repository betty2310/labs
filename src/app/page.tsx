'use client';

import * as React from 'react';
import { ListFilter } from 'lucide-react';
import { useState, useEffect } from 'react';

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
import SelectFilter from '@/components/SelectFilters';
import { LabData } from '@/lib/database/labs';

function saveListData() {
  const listSpecialized: string[] = [];
  const listIsOpenBoolean: boolean[] = [];
  const listLanguage: string[] = [];
  const listWorkingTime: string[] = [];
  LabData.forEach(lab => {
    if (!listSpecialized.includes(lab.specialized)) {
      listSpecialized.push(lab.specialized);
    }
    if (!listIsOpenBoolean.includes(lab.is_open)) {
      listIsOpenBoolean.push(lab.is_open);
    }
    if (lab.language && !listLanguage.includes(lab.language)) {
      listLanguage.push(lab.language);
    }
    if (!listWorkingTime.includes(lab.working_time)) {
      listWorkingTime.push(lab.working_time);
    }
  });

  const listIsOpen: string[] = listIsOpenBoolean.map(isOpen => isOpen ? 'Open' : 'Close');

  listSpecialized.push('All');
  listIsOpen.push('All');
  listLanguage.push('All');
  listWorkingTime.push('All');

  listSpecialized.sort();
  listIsOpen.sort();
  listLanguage.sort();
  listWorkingTime.sort();

  return {
    listSpecialized: listSpecialized,
    listIsOpen: listIsOpen,
    listLanguage: listLanguage,
    listWorkingTime: listWorkingTime
  };
}

const { listSpecialized, listIsOpen, listLanguage, listWorkingTime } = saveListData();

export default function LabOverview() {
  const [filterSpecialized, setFilterSpecialized] = useState<string>('');
  const [filterIsOpen, setFilterIsOpen] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('');
  const [filterSalary, setFilterSalary] = useState<number>(0);
  const [filterWorkingTime, setFilterWorkingTime] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('A-Z');

  const handleFilterChangeString = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (value: string) => {
    setter(value);
  };

  const handleFilterChangeNumber = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => (value: string) => {
    switch (value) {
      case 'All':
        setter(0);
        break;
      case '< 10':
        setter(1);
        break;
      case '10 - 20':
        setter(10);
        break;
      case '20 - 30':
        setter(20);
        break;
      case '30 - 40':
        setter(30);
        break;
      case '> 40':
        setter(40);
        break;
    }
  };

  // Sort
  const sortLabByName = () => {
    console.log("Sort by name");
    filteredLabs.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    console.log(filteredLabs);
  };

  const sortLabByCreated = () => {
    console.log("Sort by created");
    filteredLabs.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
    console.log(filteredLabs);
  };

  const sortLabByUpdate = () => {
    console.log("Sort by updated");
    filteredLabs.sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime());
    console.log(filteredLabs);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    if (option === 'A-Z') {
      sortLabByName();
    }
    if (option === 'Created') {
      sortLabByCreated();
    }
    if (option === 'Updated') {
      sortLabByUpdate();
    }
  };

  const ITEMS_PER_PAGE = 6;

  const filteredLabs = LabData.filter(lab =>
    (filterSpecialized === 'All' || filterSpecialized === '' || lab.specialized.includes(filterSpecialized)) &&
    (filterIsOpen === 'All' || filterIsOpen === '' || (lab.is_open ? 'Open' : 'Close') === filterIsOpen) &&
    (filterLanguage === 'All' || filterLanguage === '' || lab.language === filterLanguage) &&
    (filterSalary === 0 || (filterSalary === 1 && lab.salary <= 10) || (lab.salary >= filterSalary && lab.salary <= filterSalary + 10) || (filterSalary === 40 && lab.salary >= filterSalary)) &&
    (filterWorkingTime === 'All' || filterWorkingTime === '' || lab.working_time === filterWorkingTime)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredLabs.length / ITEMS_PER_PAGE);
  const [currentData, setCurrentData] = useState(
    filteredLabs.slice(0, ITEMS_PER_PAGE)
  );
  
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setCurrentData(
        filteredLabs.slice(
          (pageNumber - 1) * ITEMS_PER_PAGE,
          pageNumber * ITEMS_PER_PAGE
        )
      );
    }
  };

  function consoleLogLabs() {
    console.log(filteredLabs);
  }

  useEffect(() => {
    consoleLogLabs();
  }, [filterSpecialized, filterIsOpen, filterLanguage, filterSalary, filterWorkingTime]);

  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-10 gap-4 px-8 mt-8 mb-8">
          <div className="col-span-2">
            <div className="col-span-2">
              <div className='mt-[20px]'>
                <SelectFilter key='sl-ft-1' selectValue='Specialized' selectItem={listSpecialized} onSelectChange={value => { handleFilterChangeString(setFilterSpecialized)(value);}} />
                <SelectFilter key='sl-ft-2' selectValue='Status' selectItem={listIsOpen} onSelectChange={value => { handleFilterChangeString(setFilterIsOpen)(value);}} />
                <SelectFilter key='sl-ft-3' selectValue='Working Time' selectItem={listWorkingTime} onSelectChange={value => { handleFilterChangeString(setFilterWorkingTime)(value); }} />
                <SelectFilter key='sl-ft-4' selectValue='Language' selectItem={listLanguage} onSelectChange={value => { handleFilterChangeString(setFilterLanguage)(value);}} />
                <SelectFilter key='sl-ft-5' selectValue='Salary' selectItem={['All', '< 10', '10 - 20', '20 - 30', '30 - 40', '> 40']} onSelectChange={value => { handleFilterChangeNumber(setFilterSalary)(value);}} />
              </div>
            </div>
          </div>
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
                  <DropdownMenuCheckboxItem checked={sortOption === 'A-Z'}
                    onCheckedChange={() => handleSortChange('A-Z')}>
                    A-Z
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem onCheckedChange={() => handleSortChange('Updated')}>Updated</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem onCheckedChange={() => handleSortChange('Created')}>Created</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 mb-4">
              {
                currentData.map(lab => (
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
                ))
              }
            </div >
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
          </div >
        </div >
      </div >
    </MainLayout >
  );
}
