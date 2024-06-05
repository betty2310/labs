import type { Labs } from '.';

export const LabData: Labs[] = [
  {
    id: '1',
    name: 'In labs',
    description: 'Lab in ấn là nơi đào tạo các kỹ sư in ấn chuyên nghiệp',
    image_urls: [
      'https://www.rmit.edu.vn/sites/default/files/styles/16_9_768/public/2021-01/Printing%20Technology%20-%20Labs%20-%20RMIT%20Vietnam.jpg?itok=1Z6YiH9Z',
    ],
    teacher_ids: ['1', '2'],
    created_at: new Date(),
    updated_at: new Date(),
    is_open: true,
    number_of_students: 20,
    salary: 20,
    specialized: 'Kỹ thuật In',
    topic_ids: ['1'],
    working_time: 'fulltime',
  },
];
