import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { LabData } from '@/lib/database/labs';
import { TeacherData } from '@/lib/database/teachers';
import { LabTopicsData } from '@/lib/database/labtopics';

// Get lab by ID function
export function getLabById(id: string) {
  return LabData.find(lab => lab.id === id);
}

// Get teachers by IDs function
export function getTeachersByIds(ids: string[]) {
  return TeacherData.filter(teacher => ids.includes(teacher.id));
}

// Get topics by IDs function
export function getTopicsByIds(ids: string[]) {
  return LabTopicsData.filter(topic => ids.includes(topic.id));
}

interface Params {
  id: string;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;
  const lab = getLabById(id);
  if (!lab) {
    return NextResponse.json({ message: 'Lab not found' }, { status: 404 });
  }

  const teachers = getTeachersByIds(lab.teacher_ids);
  const topics = getTopicsByIds(lab.topic_ids);

  return NextResponse.json({
    ...lab,
    teachers,
    topics,
  });
}
