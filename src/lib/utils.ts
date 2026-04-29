const getLatestMonday = (): Date => {
     const today = new Date();
     const dayOfWeek = today.getDay();
     const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
     const latestMonday = today;
     latestMonday.setDate(today.getDate() - daysSinceMonday);
     return latestMonday;
   };

export const adjustScheduleToCurrentWeek = (
     lessons: { title: string; start: Date; end: Date }[]
   ): { title: string; start: Date; end: Date }[] => {
     const latestMonday = getLatestMonday();
   
     return lessons.map((lesson) => {
       const lessonDayOfWeek = lesson.start.getDay();
   
       const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;
   
       const adjustedStartDate = new Date(latestMonday);
   
       adjustedStartDate.setDate(latestMonday.getDate() + daysFromMonday);
       adjustedStartDate.setHours(
         lesson.start.getHours(),
         lesson.start.getMinutes(),
         lesson.start.getSeconds()
       );
       const adjustedEndDate = new Date(adjustedStartDate);
       adjustedEndDate.setHours(
         lesson.end.getHours(),
         lesson.end.getMinutes(),
         lesson.end.getSeconds()
       );
   
       return {
         title: lesson.title,
         start: adjustedStartDate,
         end: adjustedEndDate,
       };
     });
   };

// export const RESOURCE_MAP: Record<string, string> = {
//   "/dashboard/list/teachers": "teachers",
//   "/dashboard/list/students": "students",
//   "/dashboard/list/parents": "parents",
//   "/dashboard/list/subjects": "subjects",
//   "/dashboard/list/classes": "classes",
//   "/dashboard/list/exams": "exams",
//   "/dashboard/list/assignments": "assignments",
//   "/dashboard/list/results": "results",
//   "/dashboard/list/attendance": "attendance",
//   "/dashboard/list/events": "events",
//   "/dashboard/list/announcements": "announcements",
// };

export type GetEmptyStateParams = {
  resource: string;
  searchText?: string | null;
};

export function getEmptyState({ resource, searchText }: GetEmptyStateParams) {
  
  const message = searchText
    ? `No results found for "${searchText}"`
    : `No ${resource} found`;

  return message;
}

