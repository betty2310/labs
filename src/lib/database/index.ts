export type Specialized =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'data'
  | 'devops'
  | 'design'
  | 'management'
  | 'marketing'
  | 'product'
  | 'other';

export type WorkingTime = 'fulltime' | 'parttime';

export type Language = 'english' | 'japanese';

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
}

export interface LabTopics {
  id: string;
  name: string;
  description: string;
  start_date?: Date;
  end_date?: Date;
  number_of_students: number;
  created_at: Date;
  updated_at: Date;
  teacher?: Teacher;
  fundings?: string[];
}

export interface Labs {
  id: string;
  name: string;
  description: string;
  image_urls: string[];
  teachers: Teacher[];
  topics: LabTopics[];
  specialized: Specialized;
  working_time: WorkingTime;
  is_open: boolean;
  number_of_students: number;
  language?: Language;
  salary: number;
  created_at: Date;
  updated_at: Date;
}
