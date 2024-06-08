'use client';

interface LabProps {
  is_open: boolean;
  name: string;
  teacher: string;
  number_of_students: number;
  last_updated: string;
  image_urls?: string;
}

const ItemLab: React.FC<LabProps> = ({
  is_open,
  name,
  teacher,
  number_of_students,
  last_updated,
  image_urls,
}) => {
  return (
    <div className="relative flex flex-col bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm font-medium">Update {last_updated}</div>
      </div>
      <div className="relative mt-2">
        <img src={image_urls} alt="lab" className="rounded-md h-40 w-full" />
        <div
          className={`absolute top-0 right-0 p-1 m-2 rounded-md text-white font-bold ${is_open ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {is_open ? 'Open' : 'Close'}
        </div>
      </div>
      <div className="mt-2">
        <div className="text-sm mb-1">Teacher: {teacher}</div>
        <div className="text-sm">Number of students: {number_of_students}</div>
      </div>
    </div>
  );
};

export default ItemLab;
