export interface Blog {
  id: number;
  title: string;
  authorName?: string;
  date: Date;
  image_url: string;
  excerpt: string;
  content: string;
  tags?:string;
}
