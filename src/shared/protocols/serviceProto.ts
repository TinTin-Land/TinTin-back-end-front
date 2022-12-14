import { ServiceProto } from 'tsrpc-proto';
import { ReqAddCourse, ResAddCourse } from './PtlAddCourse';
import { ReqAddCourseHomework, ResAddCourseHomework } from './PtlAddCourseHomework';
import { ReqAddCourseWj, ResAddCourseWj } from './PtlAddCourseWj';
import { ReqAddUser, ResAddUser } from './PtlAddUser';
import { ReqAddUserCourseWj, ResAddUserCourseWj } from './PtlAddUserCourseWj';
import { ReqAddWjAccessToken, ResAddWjAccessToken } from './PtlAddWjAccessToken';
import { ReqAddWjLoginCode, ResAddWjLoginCode } from './PtlAddWjLoginCode';
import { ReqAddWjUser, ResAddWjUser } from './PtlAddWjUser';
import { ReqCheckEmail, ResCheckEmail } from './PtlCheckEmail';
import { ReqEnrollCourse, ResEnrollCourse } from './PtlEnrollCourse';
import { ReqEnrollUser, ResEnrollUser } from './PtlEnrollUser';
import { ReqGetCourse, ResGetCourse } from './PtlGetCourse';
import { ReqGetCourseHomework, ResGetCourseHomework } from './PtlGetCourseHomework';
import { ReqGetUser, ResGetUser } from './PtlGetUser';
import { ReqGetUserCourseList, ResGetUserCourseList } from './PtlGetUserCourseList';
import { ReqGetWjAccessToken, ResGetWjAccessToken } from './PtlGetWjAccessToken';
import { ReqGetWjAnswersList, ResGetWjAnswersList } from './PtlGetWjAnswersList';
import { ReqSendEmail, ResSendEmail } from './PtlSendEmail';
import { ReqUpdateUser, ResUpdateUser } from './PtlUpdateUser';

export interface ServiceType {
    api: {
        "AddCourse": {
            req: ReqAddCourse,
            res: ResAddCourse
        },
        "AddCourseHomework": {
            req: ReqAddCourseHomework,
            res: ResAddCourseHomework
        },
        "AddCourseWj": {
            req: ReqAddCourseWj,
            res: ResAddCourseWj
        },
        "AddUser": {
            req: ReqAddUser,
            res: ResAddUser
        },
        "AddUserCourseWj": {
            req: ReqAddUserCourseWj,
            res: ResAddUserCourseWj
        },
        "AddWjAccessToken": {
            req: ReqAddWjAccessToken,
            res: ResAddWjAccessToken
        },
        "AddWjLoginCode": {
            req: ReqAddWjLoginCode,
            res: ResAddWjLoginCode
        },
        "AddWjUser": {
            req: ReqAddWjUser,
            res: ResAddWjUser
        },
        "CheckEmail": {
            req: ReqCheckEmail,
            res: ResCheckEmail
        },
        "EnrollCourse": {
            req: ReqEnrollCourse,
            res: ResEnrollCourse
        },
        "EnrollUser": {
            req: ReqEnrollUser,
            res: ResEnrollUser
        },
        "GetCourse": {
            req: ReqGetCourse,
            res: ResGetCourse
        },
        "GetCourseHomework": {
            req: ReqGetCourseHomework,
            res: ResGetCourseHomework
        },
        "GetUser": {
            req: ReqGetUser,
            res: ResGetUser
        },
        "GetUserCourseList": {
            req: ReqGetUserCourseList,
            res: ResGetUserCourseList
        },
        "GetWjAccessToken": {
            req: ReqGetWjAccessToken,
            res: ResGetWjAccessToken
        },
        "GetWjAnswersList": {
            req: ReqGetWjAnswersList,
            res: ResGetWjAnswersList
        },
        "SendEmail": {
            req: ReqSendEmail,
            res: ResSendEmail
        },
        "UpdateUser": {
            req: ReqUpdateUser,
            res: ResUpdateUser
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "services": [
        {
            "id": 0,
            "name": "AddCourse",
            "type": "api"
        },
        {
            "id": 1,
            "name": "AddCourseHomework",
            "type": "api"
        },
        {
            "id": 2,
            "name": "AddCourseWj",
            "type": "api"
        },
        {
            "id": 3,
            "name": "AddUser",
            "type": "api"
        },
        {
            "id": 4,
            "name": "AddUserCourseWj",
            "type": "api"
        },
        {
            "id": 5,
            "name": "AddWjAccessToken",
            "type": "api"
        },
        {
            "id": 6,
            "name": "AddWjLoginCode",
            "type": "api"
        },
        {
            "id": 7,
            "name": "AddWjUser",
            "type": "api"
        },
        {
            "id": 8,
            "name": "CheckEmail",
            "type": "api"
        },
        {
            "id": 9,
            "name": "EnrollCourse",
            "type": "api"
        },
        {
            "id": 10,
            "name": "EnrollUser",
            "type": "api"
        },
        {
            "id": 11,
            "name": "GetCourse",
            "type": "api"
        },
        {
            "id": 12,
            "name": "GetCourseHomework",
            "type": "api"
        },
        {
            "id": 13,
            "name": "GetUser",
            "type": "api"
        },
        {
            "id": 14,
            "name": "GetUserCourseList",
            "type": "api"
        },
        {
            "id": 15,
            "name": "GetWjAccessToken",
            "type": "api"
        },
        {
            "id": 16,
            "name": "GetWjAnswersList",
            "type": "api"
        },
        {
            "id": 17,
            "name": "SendEmail",
            "type": "api"
        },
        {
            "id": 18,
            "name": "UpdateUser",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddCourse/ReqAddCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_image",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "course_cycle",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "course_state",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "course_registration_deadline",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "course_link",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "course_description",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "course_tab",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 8,
                    "name": "course_content_data",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "course_teacher_info",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 10,
                    "name": "course_advantages",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 11,
                    "name": "course_provider",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 12,
                    "name": "course_student_feedback",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 13,
                    "name": "course_student_profile",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 14,
                    "name": "course_community_support",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddCourse/ResAddCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddCourseHomework/ReqAddCourseHomework": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_homework_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddCourseHomework/ResAddCourseHomework": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddCourseWj/ReqAddCourseWj": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_wj_url_list",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddCourseWj/ResAddCourseWj": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddUser/ReqAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddUser/ResAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddUserCourseWj/ReqAddUserCourseWj": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "login_code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddUserCourseWj/ResAddUserCourseWj": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddWjAccessToken/ReqAddWjAccessToken": {
            "type": "Interface"
        },
        "PtlAddWjAccessToken/ResAddWjAccessToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "access_token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddWjLoginCode/ReqAddWjLoginCode": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddWjLoginCode/ResAddWjLoginCode": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddWjUser/ReqAddWjUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "openid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddWjUser/ResAddWjUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user_id",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlCheckEmail/ReqCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlCheckEmail/ResCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "state",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlEnrollCourse/ReqEnrollCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlEnrollCourse/ResEnrollCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlEnrollUser/ReqEnrollUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "src",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlEnrollUser/ResEnrollUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetCourse/ReqGetCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetCourse/ResGetCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "course_details",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/course_details/course_details"
                    }
                }
            ]
        },
        "../interface/course_details/course_details": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "course_image",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "course_cycle",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "course_state",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "course_registration_deadline",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "course_link",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "course_description",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "course_tab",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "course_content_data",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "course_teacher_info",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "course_advantages",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "course_provider",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 12,
                    "name": "course_student_feedback",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 13,
                    "name": "course_student_profile",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 14,
                    "name": "course_community_support",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetCourseHomework/ReqGetCourseHomework": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetCourseHomework/ResGetCourseHomework": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "course_homework",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/course_homework/course_homework"
                    }
                }
            ]
        },
        "../interface/course_homework/course_homework": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "course_name",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "course_homework_id",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetUser/ReqGetUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUser/ResGetUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        },
        "../interface/user/user": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "user_course_passport",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "course_user",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "description",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "country",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "roles",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "experience",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "achievements",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "twitter",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "github",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "telegram",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 12,
                    "name": "privacy",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetUserCourseList/ReqGetUserCourseList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUserCourseList/ResGetUserCourseList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "courses",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetWjAccessToken/ReqGetWjAccessToken": {
            "type": "Interface"
        },
        "PtlGetWjAccessToken/ResGetWjAccessToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "access_token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetWjAnswersList/ReqGetWjAnswersList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "survey_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetWjAnswersList/ResGetWjAnswersList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlSendEmail/ReqSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSendEmail/ResSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlUpdateUser/ReqUpdateUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        },
        "PtlUpdateUser/ResUpdateUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        }
    }
};