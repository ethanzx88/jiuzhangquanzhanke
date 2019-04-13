import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginModalService, Principal, Account } from 'app/core';
import { CourseService } from 'app/shared/service/CourseService';
import { Course, CourseDto } from 'app/shared/model/course-dto.model';
import { CourseWithTNDto } from 'app/shared/model/courseWithTN-dto.model';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    classeNameNeedToReg: string;
    isSaving: boolean;
    course2save: Course = {
        courseName: null,
        courseLocation: null,
        courseContent: null,
        courseTeacher: null
    };

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private courseService: CourseService,
        private route: ActivatedRoute
    ) {}

    courses: CourseDto[] = [];

    coursesWithTN: CourseWithTNDto[] = [];

    ngOnInit() {
        this.isSaving = false;
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        // this.route.data.subscribe(({ course2save }) => {
        //     this.course2save = course2save.body ? course2save.body : course2save;
        // });
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    getAllCourses() {
        this.courseService.getCourseInfo().subscribe(curDto => {
            if (!curDto) {
                this.courses = [];
            } else {
                this.courses = curDto;
            }
        });
    }

    getAllCoursesWithTN() {
        this.courseService.getCourseInfoWithTN().subscribe(curDto => {
            if (!curDto) {
                this.coursesWithTN = [];
            } else {
                this.coursesWithTN = curDto;
            }
        });
    }

    deleteCourse(courseName: string) {
        this.courseService
            .delete(courseName)
            .subscribe
            //     curDto => {
            //     if (!curDto) {
            //         this.coursesWithTN = [];
            //     } else {
            //         this.coursesWithTN = curDto;
            //     }
            // }
            ();
    }

    // deleteUser(user: User) {
    //     const modalRef = this.modalService.open(UserMgmtDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    //     modalRef.componentInstance.user = user;
    //     modalRef.result.then(
    //         result => {
    //             // Left blank intentionally, nothing to do here
    //         },
    //         reason => {
    //             // Left blank intentionally, nothing to do here
    //         }
    //     );
    // }
    // registerCourse(courseName) {
    //
    // }

    clearAllCourses() {
        this.courses = [];
    }
    clearAllCoursesTN() {
        this.coursesWithTN = [];
    }
    saveCourse() {
        this.isSaving = true;
        // this.coursesWithTN = [];

        if (this.course2save.courseName !== null) {
            // this.coursesWithTN = [];
            // this.course2save.courseName = "ets";
            // this.
            this.courseService.create(this.course2save).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            // this.coursesWithTN = [];
            // this.coursesWithTN = [];
            // this.user.langKey = 'en';
            // this.userService.create(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        }
    }

    private onSaveSuccess(result) {
        this.isSaving = false;
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
