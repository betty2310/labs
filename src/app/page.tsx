'use client';

import * as React from 'react';
import { ListFilter } from 'lucide-react';
import { useState, useEffect } from 'react';

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
import SelectFilter from '@/components/SelectFilters';
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


// Save list data
function saveListData() {
  const listSpecialized: string[] = [];
  const listIsOpenBoolean: boolean[] = [];
  const listLanguage: string[] = [];
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
  });

  const listIsOpen: string[] = listIsOpenBoolean.map(isOpen => isOpen ? 'Open' : 'Close');

  listSpecialized.push('All');
  listIsOpen.push('All');
  listLanguage.push('All');

  listSpecialized.sort();
  listIsOpen.sort();
  listLanguage.sort();

  return {
    listSpecialized: listSpecialized,
    listIsOpen: listIsOpen,
    listLanguage: listLanguage
  };
}

const { listSpecialized, listIsOpen, listLanguage } = saveListData();

export default function LabOverview() {
  const [filterSpecialized, setFilterSpecialized] = useState<string>('');
  const [filterIsOpen, setFilterIsOpen] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('');
  const [filterSalary, setFilterSalary] = useState<number>(0);
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

  const filteredLabs = LabData.filter(lab =>
    (filterSpecialized === 'All' || filterSpecialized === '' || lab.specialized.includes(filterSpecialized)) &&
    (filterIsOpen === 'All' || filterIsOpen === '' || (lab.is_open ? 'Open' : 'Close') === filterIsOpen) &&
    (filterLanguage === 'All' || filterLanguage === '' || lab.language === filterLanguage) &&
    (filterSalary === 0 || (filterSalary === 1 && lab.salary <= 10) || (lab.salary >= filterSalary && lab.salary <= filterSalary + 10) || (filterSalary === 40 && lab.salary >= filterSalary))
  );

  function consoleLogLabs() {
    console.log(filteredLabs);
  }

  useEffect(() => {
    consoleLogLabs();
  }, [filterSpecialized, filterIsOpen, filterLanguage, filterSalary]);

  // Sort
  const sortLabByName = () => {
    // Hàm sắp xếp theo tên
    console.log('Sorting by name...');
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    if (option === 'A-Z') {
      sortLabByName();
    }
  };



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
          <div className="col-span-2">
            <div className="col-span-2">
              <div className='mt-[20px]'>
                <SelectFilter key='sl-ft-1' selectValue='Specialized' selectItem={listSpecialized} onSelectChange={value => { handleFilterChangeString(setFilterSpecialized)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-2' selectValue='Status' selectItem={listIsOpen} onSelectChange={value => { handleFilterChangeString(setFilterIsOpen)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-3' selectValue='Language' selectItem={listLanguage} onSelectChange={value => { handleFilterChangeString(setFilterLanguage)(value); consoleLogLabs() }} />
                <SelectFilter key='sl-ft-4' selectValue='Salary' selectItem={['All', '< 10', '10 - 20', '20 - 30', '30 - 40', '> 40']} onSelectChange={value => { handleFilterChangeNumber(setFilterSalary)(value); consoleLogLabs(); }} />
              </div>
            </div>
          </div>
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
                  <DropdownMenuCheckboxItem checked={sortOption === 'A-Z'}
                    onSelect={() => handleSortChange('A-Z')}>
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
      </div >
    </MainLayout >
  );
}
