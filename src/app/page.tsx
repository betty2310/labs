'use client';
import * as React from 'react';
import { ListFilter } from 'lucide-react';
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import ItemLab from '@/components/ItemLab';
import { Button } from '@/components/ui/button';
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
];

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
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 mb-4">
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
