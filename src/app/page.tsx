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
  teacher: string;
  numberOfStudents: number;
  lastUpdated: string;
  imageUrls: string;
  isOpen: boolean;
};
const labs: Lab[] = [
  {
    id: '1',
    name: 'In labs',
    teacher: 'Nguyễn Văn A',
    numberOfStudents: 20,
    imageUrls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '2',
    name: 'Lab 2',
    teacher: 'Nguyễn Văn B',
    numberOfStudents: 20,
    imageUrls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '3',
    name: 'Lab 3',
    teacher: 'Nguyễn Văn C',
    numberOfStudents: 20,
    imageUrls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '4',
    name: 'In labs',
    teacher: 'Nguyễn Văn A',
    numberOfStudents: 20,
    imageUrls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '5',
    name: 'Lab 2',
    teacher: 'Nguyễn Văn B',
    numberOfStudents: 20,
    imageUrls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    lastUpdated: '1 hour ago',
    isOpen: true,
  },
  {
    id: '6',
    name: 'Lab 3',
    teacher: 'Nguyễn Văn C',
    numberOfStudents: 20,
    imageUrls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    lastUpdated: '1 hour ago',
    isOpen: false,
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

  const listIsOpen: string[] = listIsOpenBoolean.map(isOpen => isOpen.toString());

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
        setter(10);
        break;
      case '10 - 20':
        setter(20);
        break;
      case '20 - 30':
        setter(30);
        break;
      case '30 - 40':
        setter(40);
        break;
      case '> 40':
        setter(1000);
        break;
    }
  };

  const filteredLabs = LabData.filter(lab =>
    (filterSpecialized === 'All' || filterSpecialized === '' || lab.specialized.includes(filterSpecialized)) &&
    (filterIsOpen === 'All' || filterIsOpen === '' || lab.is_open.toString() === filterIsOpen) &&
    (filterLanguage === 'All' || filterLanguage === '' || lab.language === filterLanguage) &&
    (filterSalary === 0 || lab.salary >= filterSalary)
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
                <SelectFilter key='sl-ft-1' selectValue='Trường/viện' selectItem={listSpecialized} onSelectChange={value => { handleFilterChangeString(setFilterSpecialized)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-2' selectValue='Trạng thái' selectItem={listIsOpen} onSelectChange={value => { handleFilterChangeString(setFilterIsOpen)(value); consoleLogLabs(); }} />
                <SelectFilter key='sl-ft-3' selectValue='Yêu cầu ngoại ngữ' selectItem={listLanguage} onSelectChange={value => { handleFilterChangeString(setFilterLanguage)(value); consoleLogLabs() }} />
                <SelectFilter key='sl-ft-4' selectValue='Lương' selectItem={['All', '< 10', '10 - 20', '20 - 30', '30 - 40', '> 40']} onSelectChange={value => { handleFilterChangeNumber(setFilterSalary)(value); consoleLogLabs(); }} />
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
                  teacher={lab.teacher}
                  numberOfStudents={lab.numberOfStudents}
                  lastUpdated={lab.lastUpdated}
                  imageUrls={lab.imageUrls}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
