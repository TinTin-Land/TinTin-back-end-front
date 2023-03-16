import Header from "../../components/header";
import Header_people from "../../components/header_people";
import {Menu, Transition} from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import {Course_Deleted, Course_Save, Course_Show} from "../../components/pop-up-box";
import {useAtom} from "jotai";
import {Course_Hint_Deleted, Course_ShowFailed, Course_ShowSuccess, CourseDetail, OpenLoginState} from "../../jotai";
import {client} from "../../client";
import {useRouter} from "next/router";
import Loading from "../../components/loading";
import Head from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const BingCourse =  () =>{
    const router = useRouter();
    const [ShowSuccess,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [ShowFailed,setShowFailed] = useAtom(Course_ShowFailed)
    const [showHint,setShowHint] =useAtom(Course_Hint_Deleted)

    const course_detail = [
        {
            course_name:"",
            course_image:"",
            course_tab:[{content:""}],
            course_link:"",
            course_wj_url_list:[{survey_id:"",survey_hash:""}]
        }
    ]
    const [courseDetail,setCourseDetail] = useState(course_detail)

    const [,setEditDetail] = useAtom(CourseDetail)

    useEffect(()=>{

        const query = async () =>{
           const data =  await client.callApi('v1/course/GetAllCourse', {});

           const wjData = await client.callApi('v1/course/GetAllCourseWj', {});

            console.log(wjData)
           const course_wj_url_list = JSON.parse(wjData.res.course_wj_url_list)
            const course_details = JSON.parse(data.res.course_details)
            console.log(JSON.parse(wjData.res.course_wj_url_list))

            console.log(JSON.parse(data.res.course_details))

            let list = []
            for(let i=0;i<course_details.length ;i++){
                const wj_url_list =  course_wj_url_list.find( o => o.course_name ===course_details[i].course_name);
                let result = {
                    course_name:course_details[i].course_name,
                    course_tab:JSON.parse(course_details[i].course_tab),
                    course_link:course_details[i].course_link,
                    course_image:course_details[i].course_image,
                    course_wj_url_list:JSON.parse(wj_url_list.course_wj_url_list)
                }
                list.push(result)
            }
            setCourseDetail(list)
        };
        query()

    },[])

        return(
            <div  className="flex ">
                <Header/>
                <Loading/>

                <div className="w-full pl-56 overflow-hidden h-screen">
                    <Course_Deleted/>
                    <Course_Show/>
                    <div className="flex  justify-between w-full p-5 px-10 h-14 items-center">
                        <div className="flex  text-gray-800 text-lg items-center">
                            <div className="mr-4 ">
                                <i className="fa fa-sliders" aria-hidden="true"></i>
                            </div>
                            <div>
                                课程绑定
                            </div>
                        </div>
                        <Header_people></Header_people>
                    </div>

                    <div className="p-5 my-auto text-black  bg-rose-100   ">
                        <div className="bg-white px-4 py-5   rounded-sm xl:h-100 2xl:h-105">
                            <div className="flex">

                                <button onClick={()=>{setEditDetail(course_detail[0]);router.push("/bind_course/add_course")}}
                                        className="flex rounded-md bg-blue-500 px-3 text-sm py-1 text-white items-center ">
                                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                    新建
                                </button>

                            </div>
                            <div className={courseDetail[0].course_name !== ""?"hidden":"animate-spin text-black mt-10 flex justify-center "}>
                                   <i className="fa fa-spinner f-spin fa-2x fa-fw"></i>
                            </div>
                            <div className={courseDetail[0].course_name == ""?"hidden":"mt-4 pb-4 flex flex-col h-new 2xl:h-new-1 "}>
                                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8  ">
                                        <div className=" shadow  rounded-sm h-full" >
                                            <table className="min-w-full divide-y divide-gray-300 h-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900 pl-4  sm:pl-6">
                                                        课程名称
                                                    </th>
                                                    <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                        课程链接
                                                    </th>
                                                    <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                        作业数量
                                                    </th>
                                                    <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                        操作
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                {courseDetail.map((item) => (
                                                    <tr key={item.course_name}>

                                                        <td className="whitespace-nowrap py-3 2xl:py-3.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 w-96 2xl:w-100">
                                                            <div className="truncate w-96 ">
                                                                {item.course_name}
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500  ">
                                                            <div className="" >
                                                                <Link href={item.course_link}>
                                                                    <a target="_blank" className="text-blue-400">
                                                                        点击跳转
                                                                    </a>
                                                                </Link>
                                                            </div>

                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">{item.course_wj_url_list.length}</td>
                                                        <td className="whitespace-nowrap px-2 py-3 text-sm text-blue-500 ">
                                                            <div className="flex">
                                                                <button onClick={()=>{setEditDetail(item);router.push("/bind_course/add_course")}} className="mr-2">
                                                                    详情
                                                                </button>
                                                                <button onClick={()=>{setEditDetail(item);router.push("/bind_course/add_course")}} className="mr-2">
                                                                    编辑
                                                                </button>

                                                                <button onClick={()=>{setEditDetail(item),setShowHint(true)}} className="mr-2">
                                                                    删除
                                                                </button>
                                                            </div></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


}

export default BingCourse
