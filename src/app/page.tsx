import * as React from 'react';

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
    isOpen: false,
  },
];

export default function LabOverview() {
  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-10 gap-4 px-8 mt-8 mb-8">
          <div className="col-span-3">filler</div>
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
