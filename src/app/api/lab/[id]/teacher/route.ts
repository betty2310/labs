// app/api/users/[id]/route.ts

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Placeholder function for data fetching
async function getUserById(id: string) {
  // Replace with your actual data fetching logic
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '0912365985',
      topic: ['detect student', 'build data system'],
      image_url: 'http//image.com/jone-doe',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      phone: '0912365985',
      topic: ['detect student', 'build data system'],
      image_url: 'http//image.com/jane-doe',
    },
    {
      id: '3',
      name: 'Peter Doe',
      email: 'peter.doe@gmail.com',
      phone: '0912365985',
      topic: ['detect student', 'build data system'],
      image_url: 'http//image.com/peter-doe',
    },
    {
      id: '4',
      name: 'Mary Doe',
      email: 'mary.doe@gmail.com',
      phone: '0912365985',
      topic: ['detect student', 'build data system'],
      image_url: 'http//image.com/mary-doe',
    },
  ];
  return users.find(user => user.id === id) || null;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Fetch user data from a database or another source
  const user = await getUserById(id); // This is a placeholder function

  if (user) {
    return NextResponse.json(user);
  }
  return NextResponse.json(
    { message: `User with id: ${id} not found` },
    { status: 404 }
  );
}
