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
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
const labs = [
  {
    id: '1',
    name: 'In labs',
    teacher: 'Nguyễn Văn A',
    number_of_students: 20,
    image_urls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    last_updated: '1 hour ago',
    is_open: true,
  },
  {
    id: '2',
    name: 'Lab 2',
    teacher: 'Nguyễn Văn B',
    number_of_students: 20,
    image_urls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    last_updated: '1 hour ago',
    is_open: true,
  },
  {
    id: '3',
    name: 'Lab 3',
    teacher: 'Nguyễn Văn C',
    number_of_students: 20,
    image_urls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    last_updated: '1 hour ago',
    is_open: true,
  },
  {
    id: '1',
    name: 'In labs',
    teacher: 'Nguyễn Văn A',
    number_of_students: 20,
    image_urls:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0t9MqvOy7ydtuiyFNrJjG6R52EwYP1FmY4Qr7zzTIcOL7OsLsp_2QVu8k4_L9YCNajRppCinGOIRfwlDkAmwX-jtZQg5zgTQ7IkMdCIJdO0_iw6J1immMIGofnio9CA9rRNF-wRK8qPzHqKoYBQQliWhofsUsN8yrDdg4fmwz9o48yCWGZnQ4bLUqY8/w0/lo-trinh-hoc-thiet-ke-vi-mach-dien-tu-cho-nguoi-moi-bat-dau.jpg',
    last_updated: '1 hour ago',
    is_open: true,
  },
  {
    id: '2',
    name: 'Lab 2',
    teacher: 'Nguyễn Văn B',
    number_of_students: 20,
    image_urls:
      'https://duhoctrawise.edu.vn/wp-content/uploads/2023/06/1-33.jpg',
    last_updated: '1 hour ago',
    is_open: true,
  },
  {
    id: '3',
    name: 'Lab 3',
    teacher: 'Nguyễn Văn C',
    number_of_students: 20,
    image_urls:
      'https://cdn.tgdd.vn/hoi-dap/1322322/cam-bien-thong-minh-la-gi-co-nhung-loai-nao-ung-dung-ra-sao%20(3).jpg',
    last_updated: '1 hour ago',
    is_open: false,
  },
];
type Lab = {
  id: string;
  name: string;
  teacher: string;
  number_of_students: number;
  last_updated: string;
  image_urls: string;
  is_open: boolean;
};

const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const labs: Lab[] = await res.json();
  // Pass data to the page via props
  return { props: { labs } };
}) satisfies GetServerSideProps<{ labs: Lab[] }>;

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
                  is_open={lab.is_open}
                  name={lab.name}
                  teacher={lab.teacher}
                  number_of_students={lab.number_of_students}
                  last_updated={lab.last_updated}
                  image_urls={lab.image_urls}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
