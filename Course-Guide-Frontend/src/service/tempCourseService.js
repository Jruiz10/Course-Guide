const courses = [
  {
    courseID: "CSC210",
    date: "M/W/F",
    credits: "3",
  },
  {
    courseID: "SER210",
    date: "M/W/F",
    credits: "3",
  },
  { courseID: "ENR210", date: "M/W/F", credits: "3" },
  { courseID: "MA210", date: "M", credits: "3" },
  { courseID: "BIO210", date: "T/Th", credits: "3" },
  { courseID: "EN210", date: "F", credits: "3" },
  { courseID: "LE210", date: "M/W/F", credits: "3" },
];
export function getCourses() {
  return courses;
}
export function getCourse(id) {
  return courses.find((c) => c.courseID === id);
}
