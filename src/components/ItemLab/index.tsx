'use client';

import Image from 'next/image';

interface LabProps {
  isOpen: boolean;
  name: string;
  teacher: string;
  numberOfStudents: number;
  lastUpdated: string;
  imageUrls: string;
}

const ItemLab: React.FC<LabProps> = ({
  isOpen,
  name,
  teacher,
  numberOfStudents,
  lastUpdated,
  imageUrls,
}) => {
  return (
    <div className="relative flex flex-col bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm font-medium">Update {lastUpdated}</div>
      </div>
      <div className="relative mt-2">
        <img src={imageUrls} alt="lab" className="rounded-md h-40 w-full" />
        <div
          className={`absolute top-0 right-0 p-1 m-2 rounded-md text-white font-bold ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {isOpen ? 'Open' : 'Close'}
        </div>
      </div>
      <div className="mt-2">
        <div className="text-sm mb-1">Teacher: {teacher}</div>
        <div className="text-sm">Number of students: {numberOfStudents}</div>
      </div>
    </div>
  );
};

export default ItemLab;
