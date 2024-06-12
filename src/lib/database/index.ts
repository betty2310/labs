export type Specialized =
  | 'Kỹ thuật Sinh học'
  | 'Kỹ thuật Thực phẩm'
  | 'Kỹ thuật Hóa học'
  | 'Hóa học'
  | 'Công nghệ Giáo dục'
  | 'Quản lý Giáo dục'
  | 'Kỹ thuật điện'
  | 'Kỹ thuật điều khiển & Tự động hóa'
  | 'Quản lý Năng lượng'
  | 'Quản lý Công nghiệp'
  | 'Quản trị Kinh doanh'
  | 'Kế toán'
  | 'Tài chính-Ngân hàng'
  | 'Kỹ thuật Điện tử-Viễn thông'
  | 'Kỹ thuật Y sinh'
  | 'Kỹ thuật Môi trường'
  | 'Quản lý Tài nguyên và Môi trường'
  | 'Tiếng Anh KHKT và Công nghệ'
  | 'Kỹ thuật Nhiệt'
  | 'CNTT: Khoa học Máy tính'
  | 'CNTT: Kỹ thuật Máy tính'
  | 'Kỹ thuật Cơ điện tử'
  | 'Kỹ thuật Cơ khí'
  | 'Toán-Tin'
  | 'Hệ thống Thông tin quản lý'
  | 'Kỹ thuật Vật liệu'
  | 'Kỹ thuật Vi điện tử và Công nghệ nano'
  | 'Công nghệ vật liệu Polyme và Compozit'
  | 'Kỹ thuật In'
  | 'Vật lý Kỹ thuật'
  | 'Kỹ thuật Hạt nhân'
  | 'Vật lý Y khoa'
  | 'Kỹ thuật Ô tô'
  | 'Kỹ thuật Cơ khí động lực'
  | 'Kỹ thuật Hàng không'
  | 'Công nghệ Dệt May'
  | 'Kỹ thuật Hóa dược'
  | 'Hệ thống điện và năng lượng tái tạo'
  | 'Phân tích Kinh doanh'
  | 'Logistics và Quản lý chuỗi cung ứng'
  | 'Truyền thông số và Kỹ thuật đa phương tiện'
  | 'Công nghệ Thông tin Global ICT'
  | 'Khoa học Dữ liệu và Trí tuệ nhân tạo'
  | 'An toàn không gian số - Cyber Security'
  | 'Khoa học và Kỹ thuật Vật liệu'
  | 'Hệ thống nhúng thông minh và IoT'
  | 'Công nghệ Thông tin Việt - Nhật'
  | 'Công nghệ Thông tin Việt-Pháp'
  | 'Điện tử - Viễn thông - ĐH Leibniz Hannover'
  | 'Cơ điện tử - hợp tác với ĐH Leibniz Hannover'
  | 'Cơ điện tử - hợp tác với ĐHCN Nagaoka'
  | 'Cơ khí Chế tạo máy - hợp tác với trường ĐH Griffith'
  | 'Tin học công nghiệp và Tự động hóa'
  | 'Cơ khí Hàng không';

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
  teacher_id?: string;
  fundings?: string[];
}

export interface Labs {
  id: string;
  name: string;
  description: string;
  image_urls: string[];
  teacher_ids: string[];
  topic_ids?: string[];
  specialized: Specialized;
  working_time: WorkingTime;
  is_open: boolean;
  number_of_students: number;
  language?: Language;
  salary: number;
  created_at: Date;
  updated_at: Date;
}
