import Header from "../../../components/header";
import Header_people from "../../../components/header_people";
import {Menu, Transition} from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
import Select from "react-select";
import {Course_Deleted, Course_Save, Course_Show} from "../../../components/pop-up-box";
import {useAtom} from "jotai";
import {
    Course_FailedDelete1,
    Course_FailedDelete2, Course_FailedSaved,
    Course_Hint_Deleted, Course_Hint_Saved, Course_ShowFailed, Course_ShowSuccess,
    Course_SuccessfullyDeleted, Course_SuccessfullySaved, CourseDetail, OpenLoginState
} from "../../../jotai";
import {client} from "../../../client";
import Loading from "../../../components/loading";
import {useRouter} from "next/router";
import Head from "../../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const questionNairList = [
    {
        id:"问卷_1",
        hash:"问卷_1_hash"
    },
    {
        id:"问卷_2",
        hash:"问卷_2_hash"
    },
    {
        id:"问卷_3",
        hash:"问卷_3_hash"
    },
    {
        id:"问卷_4",
        hash:"问卷_4_hash"
    },
    {
        id:"问卷_5",
        hash:"问卷_5_hash"
    },
    {
        id:"问卷_6",
        hash:"问卷_6_hash"
    },
    {
        id:"问卷_7",
        hash:"问卷_7_hash"
    },

]

const courseQuestionnaire = [
    {
        id:"标题_1",
    },
    {
        id:"标题_2",
    },
    {
        id:"标题_3",
    },
    {
        id:"标题_4",
    },
    {
        id:"标题_5",
    },
    {
        id:"标题_6",
    },
    {
        id:"标题_7",
    },

]
const Add_course =  () =>{
    const router = useRouter();
    const [,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [,setShowFailed] = useAtom(Course_ShowFailed)
    const [,setFailedSaved] =useAtom(Course_FailedSaved)
    const [,setSuccessfullySaved] = useAtom(Course_SuccessfullySaved)
    const [,setHint_Saved] = useAtom(Course_Hint_Saved)
    const [openLogin,setOpenLogin] =useAtom(OpenLoginState)

    const [courseDetail,setCourseDetail] = useAtom(CourseDetail)
   useEffect(()=>{

       if(courseDetail.course_name !== ""){
           (document.getElementById("course_name") as HTMLInputElement).value = courseDetail.course_name;
           (document.getElementById("course_image") as HTMLInputElement).value = courseDetail.course_image;
           (document.getElementById("course_link") as HTMLInputElement).value = courseDetail.course_link;

           for (let tab = 0;tab<courseDetail.course_tab.length; tab++){
               (document.getElementById(`${courseQuestionnaire[tab].id}`) as HTMLInputElement).value = courseDetail.course_tab[tab].content;
           }
           for (let urlList = 0;urlList<courseDetail.course_wj_url_list.length; urlList++){
               (document.getElementById(`${questionNairList[urlList].id}`) as HTMLInputElement).value = courseDetail.course_wj_url_list[urlList].survey_id;
               (document.getElementById(`${questionNairList[urlList].hash}`) as HTMLInputElement).value = courseDetail.course_wj_url_list[urlList].survey_hash;
           }
       }

   },[])

    const submit = async () => {

        let courseQuestionnaireData = []
        for (let i = 0; i < courseQuestionnaire.length; i++) {
            let content = (document.getElementById(`${courseQuestionnaire[i].id}`) as HTMLInputElement).value;
            console.log(content)
            if (content !== "") {
                const rest = {
                    content,
                }
                courseQuestionnaireData.push(rest)
            }
        }
        const course_name = (document.getElementById("course_name") as HTMLInputElement).value;
        const course_image = (document.getElementById("course_image") as HTMLInputElement).value;
        const course_link = (document.getElementById("course_link") as HTMLInputElement).value;
        const course_tab = JSON.stringify(courseQuestionnaireData)

        if(course_name !== "" && course_image !== "" && course_link !== "" && course_tab !== ""){
            setOpenLogin(true)
        const ret = await client.callApi('v1/course/AddCourse', {
            course_name,
            course_image,
            course_link,
            course_tab,

            course_content_data: "",
            course_advantages: "",
            course_community_support: "",
            course_cycle: "",
            course_description: "",
            course_provider: "",
            course_registration_deadline: "",
            course_state: "",
            course_student_profile_feedback: "",
            course_target_user_group: "",
            course_teacher_info: "",
        });
        if(ret.isSucc){
            let data = []
            for (let i = 0; i < questionNairList.length; i++) {
                let survey_id = (document.getElementById(`${questionNairList[i].id}`) as HTMLInputElement).value;
                console.log(survey_id)
                let survey_hash = (document.getElementById(`${questionNairList[i].hash}`) as HTMLInputElement).value

                if (survey_id !== "" && survey_hash !== "") {
                    const rest = {
                        survey_id,
                        survey_hash
                    }
                    data.push(rest)
                }
            }
            const course_wj_url_list = JSON.stringify(data)
            const WjRet = await client.callApi('v1/course/AddCourseWj', {
                course_name,
                course_wj_url_list
            });
            if(WjRet.isSucc){
                setOpenLogin(false)
                setShowSuccess(true)
                window.location.replace("/bind_course")
            }else {
                setOpenLogin(false)
                setShowFailed(true)
            }
        }else {
            setOpenLogin(false)
            setShowFailed(true)
        }

        }else {
            alert("请填写完整信息")
        }
    }

    return(
        <div  className="flex ">
            <Header/>
            <Loading/>

            <div className="w-full pl-56">

                <div className="flex justify-between  fixed  bg-white w-full p-5 px-10 h-14 items-center pr-64">
                    <div className="flex  text-gray-800 text-lg items-center">
                        <div className="mr-4 ">
                            <i className="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div>
                            课程绑定 / 新建课程
                        </div>
                    </div>
                    <Header_people></Header_people>
                </div>
                <div className="p-5 text-black  bg-rose-100  pt-20 ">
                    <Course_Deleted/>
                    <Course_Show/>
                    <Course_Save/>
                    <div className="bg-white p-10 rounded-sm ">
                        {/*课程信息*/}
                        <div className="pb-14 border-b">
                            <div className="font-semibold">
                                课程信息
                            </div>
                            {/*课程主海报*/}

                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程名称:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_name"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:以太坊入门课"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>

                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程主海报:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_image"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="/course/EVM_103.png"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>

                            </div>

                            {/* 报名链接*/}
                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        报名链接:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_link"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="请输入报名链接"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>

                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                <div className="text-red-500 text-xs mr-1">
                                    *
                                </div>
                                <div className='mr-1 text-sm'>
                                    课程标题:
                                </div>
                                </div>
                            </div>
                            {courseQuestionnaire.map(item=>(
                                    <div key={item.id}  className=" mt-4   flex">
                                    <div className="w-32  flex justify-end items-center">
                                        <div className="text-red-500 text-sm mr-1">
                                            *
                                        </div>
                                        <div className='mr-1 text-sm'>
                                            {item.id}:
                                        </div>
                                    </div>
                                    <div className="">
                                        <input
                                            id={item.id}
                                            type="text"
                                            autoComplete="off"
                                            required
                                            placeholder=""
                                            className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        />
                                    </div>
                                </div>

                            ))}
                        </div>
                        {/*课程问卷*/}
                        <div className="py-14 ">
                            <div className="font-semibold">
                                课程问卷
                            </div>

                            {/*课时数*/}
                            {questionNairList.map(item=>(
                                <div key={item.hash} className=" mt-4 flex  ">
                                    <div className="w-32  flex justify-end items-center">
                                        <div className="text-red-500 text-sm mr-1">
                                            *
                                        </div>
                                        <div className='mr-1 text-sm'>
                                            {item.id}:
                                        </div>
                                    </div>
                                    <div className="">
                                        <input
                                            id={item.id}
                                            type="text"
                                            autoComplete="off"
                                            required
                                            placeholder=""
                                            className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        />
                                    </div>
                                    <div className="pl-2  flex justify-end items-center">
                                        <div className="text-red-500 text-sm mr-1">
                                            *
                                        </div>
                                        <div className='mr-1 text-sm'>
                                            {item.hash}:
                                        </div>
                                    </div>
                                    <div className="">
                                        <input
                                            id={item.hash}
                                            type="text"
                                            autoComplete="off"
                                            required
                                            placeholder=""
                                            className={classNames(" block w-96 px-2 py-1 border rounded-lg ml-4 shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        />
                                    </div>


                                </div>
                            ))}



                        </div>

                        <div className="flex justify-center mt-10">

                            <button
                                type="button"
                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white  py-1 p-3"
                                onClick={submit}
                            >
                                上架
                            </button>

                            <button
                                type="button"
                                className=" rounded-md text-sm text-black  focus:outline-none bg-white border-red-400 text-red-400 border ml-4 py-1 p-3"
                                onClick={() => {
                                    setHint_Saved(true)
                                }}
                            >
                                取消
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_course
