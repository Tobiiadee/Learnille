/** @format */

export type CourseDescriptionType = {
  description: string;
  whoIsTheCourseFor: string[];
  courseRequirements: string[];
};

export type SubSectionType = {
  lectureTitle: string;
  timeStamp: string;
  fileName?: string;
  fileSize?: number;
};

export type CurricullumType = {
  title: string;
  subSection: SubSectionType[];
};

export type CourseInstructorType = {
  name: string;
  picture: string;
  profile: string;
  feild: string;
  company: string;
  course: {
    rating: number;
    active_students: number;
    created_courses: number;
  };
};

export type PriceType = {
  price: number;
  discountPrice: number;
};

export type CourseType = {
  title: string;
  id: number;
  review: number;
  rating: number;
  duration: string;
  courseLevel: string;
  studentEnrolled: number;
  language: string;
  subtitleLanguage: string;
  summary: string;
  category: string;
  price: PriceType;
  description: CourseDescriptionType;
  curriculum: CurricullumType[];
  courseInstructor: CourseInstructorType;
};

export type CourseInforType = {
  course: CourseType;
};
