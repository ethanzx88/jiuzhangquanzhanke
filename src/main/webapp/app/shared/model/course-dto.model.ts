export interface CourseDto {
    courseName: string;
    courseLocation: string;
    courseContent: string;
    courseTeacher: string;
}

export class Course implements CourseDto {
    constructor(public courseName: string, public courseLocation: string, public courseContent: string, public courseTeacher: string) {
        this.courseName = courseName;
        this.courseLocation = courseLocation;
        this.courseContent = courseContent;
        this.courseTeacher = courseTeacher;
    }
}

// export class User implements IUser {
//     constructor(
//         public id?: any,
//         public login?: string,
//         public firstName?: string,
//         public lastName?: string,
//         public email?: string,
//         public activated?: boolean,
//         public langKey?: string,
//         public authorities?: any[],
//         public createdBy?: string,
//         public createdDate?: Date,
//         public lastModifiedBy?: string,
//         public lastModifiedDate?: Date,
//         public password?: string
//     ) {
//         this.id = id ? id : null;
//         this.login = login ? login : null;
//         this.firstName = firstName ? firstName : null;
//         this.lastName = lastName ? lastName : null;
//         this.email = email ? email : null;
//         this.activated = activated ? activated : false;
//         this.langKey = langKey ? langKey : null;
//         this.authorities = authorities ? authorities : null;
//         this.createdBy = createdBy ? createdBy : null;
//         this.createdDate = createdDate ? createdDate : null;
//         this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
//         this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
//         this.password = password ? password : null;
//     }
// }
