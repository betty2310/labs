import type { LabTopics } from '.';

export const LabTopicsData: LabTopics[] = [
  {
    id: 'fe7d87cb-c760-4f1a-8aca-20861ed4094e',
    name: 'Nghiên cứu về tơ',
    description:
      'Nghiên cứu về tơ là nơi đào tạo các kỹ sư in ấn chuyên nghiệp',
    number_of_students: 2,
    created_at: new Date(new Date().setDate(new Date().getDate() - 7)),
    updated_at: new Date(new Date().setDate(new Date().getDate() - 5)),
    teacher_id: '1',
  },
  {
    id: '1851f963-1b13-4b9f-b45d-48941c50d274',
    name: 'Nghiên cứu về vi mạch',
    description:
      'Nghiên cứu về vi mạch và hệ thống nhúng',
    number_of_students: 2,
    created_at: new Date(new Date().setDate(new Date().getDate() - 8)),
    updated_at: new Date(new Date().setDate(new Date().getDate() - 4)),
    teacher_id: '2',
  },
  {
    id: '1851f963-1b13-4b9f-b45d-48941c50d274',
    name: 'Nghiên cứu về vi mạch',
    description:
      'Nghiên cứu về vi mạch và hệ thống nhúng',
    number_of_students: 2,
    created_at: new Date(new Date().setDate(new Date().getDate() - 8)),
    updated_at: new Date(new Date().setDate(new Date().getDate() - 4)),
    teacher_id: '2',
  },
];
