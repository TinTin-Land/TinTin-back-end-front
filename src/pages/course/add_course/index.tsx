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
    Course_SuccessfullyDeleted, Course_SuccessfullySaved
} from "../../../jotai";
import {client} from "../../../client";

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

const Add_course =  () =>{

    const options_course = [
        { value: {h1:"xxx",name:"123"}, label: 'Chocolate'},
    ];
    const [course_advantages_label,setCourse_advantages_label] = useState(options_course)
    const [selectedCourse_advantages, setSelectedCourse_advantages] = useState(null);

    const [courseCommunitySupport,setCourseCommunitySupport] = useState(options_course)
    const [selectedCourseCommunitySupport,setSelectedCourseCommunitySupport] = useState(null)

    const [courseProvider,setCourseProvider] = useState(options_course)
    const [selectedCourseProvider,setSelectedCourseProvider] = useState(null)

    const [courseTeacher,setCourseTeacher] = useState(options_course)
    const [selectedCourseTeacher,setSelectedCourseTeacher] = useState(null)
    const [imgUrl,setImgUrl] = useState("/头像_avatar@2x.png")

    const [,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [,setShowFailed] = useAtom(Course_ShowFailed)
    const [,setFailedSaved] =useAtom(Course_FailedSaved)
    const [,setSuccessfullySaved] = useAtom(Course_SuccessfullySaved)
    const [,setHint_Saved] = useAtom(Course_Hint_Saved)

   useEffect(()=>{

       const query = async() =>{
           const GetCourseAdvantages = await client.callApi('v1/course/GetCourseAdvantages', {
           });
           console.log(GetCourseAdvantages)
          const course_advantages = JSON.parse(GetCourseAdvantages.res.course_advantages)
           console.log(course_advantages)
           let courseAdvantages = []
           for ( let CourseAdvantages_i = 0; CourseAdvantages_i<course_advantages.length;CourseAdvantages_i++ ){
               let courseAdvantagesResult = {
                   value: course_advantages[CourseAdvantages_i].course_advantages_content,
                   label: course_advantages[CourseAdvantages_i].course_advantages_label
               }
               courseAdvantages.push(courseAdvantagesResult)
           }
           setCourse_advantages_label(courseAdvantages)



           const GetCourseTeacher = await client.callApi('v1/course/GetCourseTeacher', {
           });
           const course_communityTeacher = JSON.parse(GetCourseTeacher.res.course_teacher_infos)
           console.log(course_communityTeacher)
           let courseTeacher = []
           for ( let CommunityTeacher_i = 0; CommunityTeacher_i<course_communityTeacher.length;CommunityTeacher_i++ ){
               let courseTeacherResult = {
                   value: course_communityTeacher[CommunityTeacher_i].course_teacher_info,
                   label: course_communityTeacher[CommunityTeacher_i].course_teacher_name
               }
               courseTeacher.push(courseTeacherResult)
           }
           setCourseTeacher(courseTeacher)


           const GetCourseProvider = await client.callApi('v1/course/GetCourseProvider', {
           });
           const course_provider = JSON.parse(GetCourseProvider.res.course_provider_info)
           console.log(course_provider)
           let courseProvider = []
           for ( let Provider_i = 0; Provider_i<course_provider.length;Provider_i++ ){
               let courseTeacherResult = {
                   value: course_provider[Provider_i].course_provider_info,
                   label: course_provider[Provider_i].course_provider_name
               }
               courseProvider.push(courseTeacherResult)
           }
           setCourseProvider(courseProvider)


           const GetCourseCommunitySupport = await client.callApi('v1/course/GetCourseCommunitySupport', {});
           const course_communitySupport = JSON.parse(GetCourseCommunitySupport.res.course_community_support_info)
           console.log(course_communitySupport)
           let courseCommunitySupport = []
           for ( let CommunitySupport_i = 0; CommunitySupport_i<course_communitySupport.length;CommunitySupport_i++ ){
               let courseCommunitySupportResult = {
                   value: course_communitySupport[CommunitySupport_i].course_community_support_info,
                   label: course_communitySupport[CommunitySupport_i].course_community_support_name
               }
               courseCommunitySupport.push(courseCommunitySupportResult)
           }
           setCourseCommunitySupport(courseCommunitySupport)

       }
       query()

   },[])

    const inputImg = () => {
        let fileInput = (document.getElementById('file') as HTMLInputElement).files[0]
        const reader = new FileReader()
        reader.readAsDataURL(fileInput)
        reader.onload = function (e) {
            console.log(e);
            console.log(e.target.result);
            setImgUrl(`${e.target.result}`)
        }
    }
    const setSelected = () =>{
      const data =   (document.getElementById("comment321") as HTMLInputElement).value
        console.log(data)
    }
    const submit = async () => {
        let data = []
        for (let i = 0; i < 7; i++) {
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
        const ret = await client.callApi('v1/course/AddCourseWj', {
            course_name: "区块链入门课程——0基础创建以太坊智能合约",
            course_wj_url_list

        });
        console.log(ret)
        // console.log(xxx)
        setShowSuccess(true)
    }

    return(
        <div  className="flex ">
            <Header/>
            <div className="w-full pl-56">

                <div className="flex justify-between  fixed  bg-white w-full p-5 px-10 h-14 items-center pr-64">
                    <div className="flex  text-gray-800 text-lg items-center">
                        <div className="mr-4 ">
                            <i className="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div>
                            课程列表 / 新建课程
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
                            {/*/!* 课程ID*!/*/}
                            {/*<div className=" mt-8 flex flex-nowrap items-center">*/}
                            {/*    <div className="w-32  flex justify-end items-center">*/}
                            {/*        <div className="text-red-500 text-sm mr-1">*/}
                            {/*            **/}
                            {/*        </div>*/}
                            {/*        <div className='mr-1 text-sm'>*/}
                            {/*            课程ID:*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="">*/}
                            {/*        <input*/}
                            {/*            id="course_id"*/}
                            {/*            type="text"*/}
                            {/*            autoComplete="off"*/}
                            {/*            required*/}
                            {/*            placeholder="例如:EVM101"*/}
                            {/*            className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="pl-32 text-sm text-gray-400">*/}
                            {/*    *入门课前缀为1，进阶为2以此类推，第几期代表后缀为0x*/}
                            {/*</div>*/}
                            {/* 课程名称*/}
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
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:以太坊入门课"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            {/* 当前期数*/}
                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                <div className="text-red-500 text-xs mr-1">
                                    *
                                </div>
                                <div className='mr-1 text-sm'>
                                    当前期数:
                                </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:第一期"
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
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="请输入报名链接"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            {/* 是否可报名*/}
                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        是否可报名:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="请输入是 或者 否"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            {/* 报名截止日期*/}
                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        报名截止日期:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:2015-10-02"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            {/* 开课日期*/}
                            <div className=" mt-4 flex  items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        开课日期:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:2015-10-02"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            {/*课程主海报*/}
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
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:/course/EVM_103.png"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                                {/*<div className="flex justify-center sm:justify-end">*/}

                                {/*    <div className="relative hidden md:flex">*/}
                                {/*        <div className="w-24 h-24 flex   justify-center  border border-gray-300  ">*/}
                                {/*            <img className=" w-20 " src="/上传_upload.png" alt=""/>*/}
                                {/*            <input onChange={inputImg} type="file" id="file" className="absolute  opacity-0 transform rotate-90  w-24 mt-8   my-auto"  accept="image/*"/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className=" flex justify-center  ml-5 border border-gray-300 overflow-hidden">*/}
                                {/*        <img className="  w-24 h-24   "*/}
                                {/*             src={classNames(imgUrl)} alt=""/>*/}
                                {/*    </div>*/}


                                {/*</div>*/}
                            </div>
                            {/*<div className="pl-32 text-sm text-gray-400">*/}
                            {/*   *将用于课程卡片展示及课程详情页展示，建议尺寸：1500*845*/}
                            {/*</div>*/}
                        </div>


                        {/*课程介绍*/}
                        <div className="py-14 border-b">
                            <div className="font-semibold">
                                课程介绍
                            </div>
                            {/* 课程简介*/}
                            <div className=" mt-8 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程简介:
                                    </div>
                                </div>
                                <textarea

                                    id="comment"
                                    autoComplete="off"
                                    className=" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm"
                                    placeholder="请输入课程简介"
                                />
                            </div>

                            {/*课程大纲*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程大纲:
                                    </div>
                                </div>
                                <textarea
                                    id="comment321"
                                    autoComplete="off"
                                    className=" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm"
                                    placeholder="请输入课程大纲"
                                />
                            </div>

                            {/*课程关键词*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                       课程关键词:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:入门;Solidity;EVM"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *请以英文输入法;隔开各关键词
                            </div>
                            {/*/!*课时数*!/*/}
                            {/*<div className=" mt-4 flex  ">*/}
                            {/*    <div className="w-32  flex justify-end items-center">*/}
                            {/*        <div className="text-red-500 text-sm mr-1">*/}
                            {/*            **/}
                            {/*        </div>*/}
                            {/*        <div className='mr-1 text-sm'>*/}
                            {/*            课时数:*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="">*/}
                            {/*        <input*/}
                            {/*            id="course_id"*/}
                            {/*            type="text"*/}
                            {/*            autoComplete="off"*/}
                            {/*            required*/}
                            {/*            placeholder="例如:6"*/}
                            {/*            className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*授课亮点*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        授课亮点:
                                    </div>
                                </div>
                                <div className="">
                                    <Select
                                        isMulti
                                        defaultValue={selectedCourse_advantages}
                                        id="Option_Course23"
                                        onChange={setSelectedCourse_advantages}
                                        options={course_advantages_label}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>

                            {/*/!*获得的技能*!/*/}
                            {/*<div className=" mt-4 flex  ">*/}
                            {/*    <div className="w-32  flex justify-end items-center">*/}
                            {/*        <div className="text-red-500 text-sm mr-1">*/}
                            {/*            **/}
                            {/*        </div>*/}
                            {/*        <div className='mr-1 text-sm'>*/}
                            {/*            获得的技能:*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="">*/}
                            {/*        <input*/}
                            {/*            id="course_id"*/}
                            {/*            type="text"*/}
                            {/*            autoComplete="off"*/}
                            {/*            required*/}
                            {/*            placeholder="合约安全;Solidity"*/}
                            {/*            className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="pl-32 text-sm text-gray-400">*/}
                            {/*    *请以英文输入法;隔开各关键词*/}
                            {/*</div>*/}

                            {/*授课老师*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        授课老师:
                                    </div>
                                </div>
                                <div className="">
                                    <Select
                                        isMulti
                                        defaultValue={selectedCourseTeacher}
                                        id="Option_Course"
                                        onChange={setSelectedCourseTeacher}
                                        options={courseTeacher}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *请先在导师列表添加新的导师
                            </div>
                            {/*主办方*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        主办方:
                                    </div>
                                </div>
                                <div className="">
                                    <Select
                                        isMulti
                                        defaultValue={selectedCourseProvider}
                                        id="Option_Course"
                                        onChange={setSelectedCourseProvider}
                                        options={courseProvider}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *如需新增主办方，请联系超级管理员
                            </div>

                            {/*课程推荐语*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程推荐语:
                                    </div>
                                </div>
                                <div className="">
                                    <Select
                                        isMulti
                                        defaultValue={selectedCourseCommunitySupport}
                                        id="Option_Course"
                                        onChange={setSelectedCourseCommunitySupport}
                                        options={courseCommunitySupport}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />

                                </div>
                            </div>
                            {/*社区支持*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        社区支持:
                                    </div>
                                </div>
                                <div className="">
                                    <Select
                                        isMulti
                                        defaultValue={selectedCourseCommunitySupport}
                                        id="Option_Course"
                                        onChange={setSelectedCourseCommunitySupport}
                                        options={courseCommunitySupport}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *请以英文输入法;隔开
                            </div>
                            {/*适合人群*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        适合人群:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="请输入"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *请以英文输入法;隔开
                            </div>


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
                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border ml-4 py-1 p-3"
                                onClick={setSelected}
                            >
                                保存
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
