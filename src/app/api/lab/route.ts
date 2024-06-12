import { NextResponse } from 'next/server';

import type { LabTopics, Teacher } from '@/lib/database';
import { LabData } from '@/lib/database/labs';
import { LabTopicsData } from '@/lib/database/labtopics';
import { TeacherData } from '@/lib/database/teachers';

export async function GET() {
  if (LabData) {
    const enrichedLabs = LabData.map(data => {
      const LabTeachers: Teacher[] = data.teacher_ids.map(
        tid => TeacherData.find(t => t.id === tid) as Teacher
      );
      const LabTopicses: LabTopics[] = (data.topic_ids ?? []).map(
        tid => LabTopicsData.find(t => t.id === tid) as LabTopics
      );
      return {
        ...data,
        teachers: LabTeachers,
        topics: LabTopicses,
      };
    });
    return NextResponse.json(enrichedLabs);
  }
  return NextResponse.json({ message: `Lab not found` }, { status: 404 });
}
