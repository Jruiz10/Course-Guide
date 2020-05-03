import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl + "courses";

function courseUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCourses() {
  http.setJwt(getJwt());
  console.log(http.get(apiEndpoint));
  return http.get(apiEndpoint);
}

export function getCourse(courseId) {
  http.setJwt(getJwt());
  return http.get(courseUrl(courseId));
}

export function saveCourse(course) {
  http.setJwt(getJwt());
  if (course._id) {
    const body = { ...course };
    delete body._id;
    return http.put(courseUrl(course._id), body);
  }

  return http.post(apiEndpoint, course);
}

export function deleteCourse(courseId) {
  http.setJwt(getJwt());
  return http.delete(courseUrl(courseId));
}
