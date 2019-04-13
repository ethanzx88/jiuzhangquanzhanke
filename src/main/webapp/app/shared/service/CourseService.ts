import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseDto } from 'app/shared/model/course-dto.model';
import { SERVER_API_URL } from 'app/app.constants';
import { CourseWithTNDto } from 'app/shared/model/courseWithTN-dto.model';

@Injectable()
export class CourseService {
    private courseAddressUrl = SERVER_API_URL + 'api/course/findAllCoursesDto';
    private courseAddressWithTNUrl = SERVER_API_URL + 'api/course/findAllCoursesWithTNDto';
    private courseDeleteUrl = SERVER_API_URL + 'api/course/deleteCourse';
    private courseUpdateUrl = SERVER_API_URL + 'api/course/updateCourse';
    private addCourseUrl = SERVER_API_URL + 'api/course/addCourse';
    private registerCourseUrl = SERVER_API_URL + 'api/course/registerCourse';
    private unregisterCourseUrl = SERVER_API_URL + 'api/course/unregisterCourse';

    constructor(private http: HttpClient) {}

    getCourseInfo(): Observable<CourseDto[]> {
        return this.http.get<CourseDto[]>(`${this.courseAddressUrl}`);
    }

    getCourseInfoWithTN(): Observable<CourseWithTNDto[]> {
        return this.http.get<CourseWithTNDto[]>(`${this.courseAddressWithTNUrl}`);
    }

    delete(courseName: String): Observable<Response> {
        return this.http.delete<Response>(`${this.courseDeleteUrl}/${courseName}`);
    }

    update(course: Course): Observable<Response> {
        return this.http.put<Response>(this.courseUpdateUrl, course);
    }

    create(course: Course): Observable<Response> {
        return this.http.post<Response>(this.addCourseUrl, course);
    }

    register(courseName: String): Observable<Response> {
        return this.http.post<Response>(`${this.registerCourseUrl}/${courseName}`, '');
    }

    unregister(courseName: String): Observable<Response> {
        return this.http.post<Response>(`${this.unregisterCourseUrl}/${courseName}`, '');
    }
}
