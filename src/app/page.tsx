'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

import MainLayout from '@/layouts/MainLayout/MainLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import ItemLab from '@/components/ItemLab';
import SelectFilter from '@/components/SelectFilters';
import { LabData } from '@/lib/database/labs';

type Lab = {
  id: string;
  name: string;
  numberOfteacher: number;
  numberOftopic: number;
  numberOfStudents: number;
  lastUpdated: string;
  imageUrls: string;
  isOpen: boolean;
  specialized?: string;
};
const labs: Lab[] = [
  {
    id: '1',
    name: 'In labs',
    numberOfteacher: 3,
    numberOftopic: 5,
    numberOfStudents: 20,
    specialized: 'Kỹ thuật In',
    imageUrls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '2',
    name: 'Lab 2',
    numberOfteacher: 2,
    numberOftopic: 4,
    numberOfStudents: 20,
    specialized: 'Trí tuệ nhân tạo',
    imageUrls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '3',
    name: 'Lab 3',
    numberOfteacher: 1,
    numberOftopic: 2,
    numberOfStudents: 20,
    specialized: 'IoT - Internet of Things',
    imageUrls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '4',
    name: 'In labs',
    numberOfteacher: 3,
    numberOftopic: 5,
    numberOfStudents: 20,
    specialized: 'Kỹ thuật In',
    imageUrls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '5',
    name: 'Lab 2',
    numberOfteacher: 2,
    numberOftopic: 4,
    numberOfStudents: 20,
    specialized: 'Trí tuệ nhân tạo',
    imageUrls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '6',
    name: 'Lab 3',
    numberOfteacher: 1,
    numberOftopic: 2,
    numberOfStudents: 20,
    specialized: 'IoT - Internet of Things',
    imageUrls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
];


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

  const listIsOpen: string[] = listIsOpenBoolean.map(isOpen => isOpen? 'Open' : 'Close');

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

// function SelectChange(value: string, selectName: string) {
//   console.log(listSpecialized);
//   console.log(listIsOpen);
//   console.log(listLanguage);
// }

export default function LabOverview() {
  const [filterSpecialized, setFilterSpecialized] = useState<string>('');
  const [filterIsOpen, setFilterIsOpen] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('');
  const [filterSalary, setFilterSalary] = useState<number>(0);

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

  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-10 gap-4 px-8 mt-8 mb-8">
          <div className="col-span-3">
            <div className="col-span-3">
              <div className='mt-[30px]'>
                <SelectFilter key='sl-ft-1' selectValue='Specialized' selectItem={listSpecialized} onSelectChange={value => { handleFilterChangeString(setFilterSpecialized)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-2' selectValue='Status' selectItem={listIsOpen} onSelectChange={value => { handleFilterChangeString(setFilterIsOpen)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-3' selectValue='Language' selectItem={listLanguage} onSelectChange={value => { handleFilterChangeString(setFilterLanguage)(value); consoleLogLabs() }} />
                <SelectFilter key='sl-ft-4' selectValue='Salary' selectItem={['All', '< 10', '10 - 20', '20 - 30', '30 - 40', '> 40']} onSelectChange={value => { handleFilterChangeNumber(setFilterSalary)(value); consoleLogLabs(); }} />
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Theo tên</SelectItem>
                  <SelectItem value="open">Đang mở</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Search" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {labs.map(lab => (
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
