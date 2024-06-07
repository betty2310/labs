import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';



// data sample
const labs = [
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


async function getLabById(id: string) {
  return labs.find(lab => lab.id === id) || null;
}


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Kiểm tra xem yêu cầu có phải là GET hay không
  if (req.method !== 'GET') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }
  const { id } = params;

  const lab = await getLabById(id);

  if (lab) {
    return NextResponse.json(lab);
  }
  return NextResponse.json(
    { message: `Lab with id: ${id} not found` },
    { status: 404 }
  );
}
