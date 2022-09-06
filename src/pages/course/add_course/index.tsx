import Header from "../../../components/header";
import Header_people from "../../../components/header_people";
import {Menu, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import Select from "react-select";
import {Course_Deleted, Course_Save, Course_Show} from "../../../components/pop-up-box";
import {useAtom} from "jotai";
import {
    Course_FailedDelete1,
    Course_FailedDelete2, Course_FailedSaved,
    Course_Hint_Deleted, Course_Hint_Saved, Course_ShowFailed, Course_ShowSuccess,
    Course_SuccessfullyDeleted, Course_SuccessfullySaved
} from "../../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const options_course = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'chocolate2', label: 'Chocol2ate' },
    { value: 'strawberry2', label: 'Strawbe2rry' },
    { value: 'vanilla2', label: 'Vanill2a' },
];


const Add_course =  () =>{
    const [selectedOptions_course, setSelectedOption_Course] = useState(null);
    const [imgUrl,setImgUrl] = useState("/头像_avatar@2x.png")

    const [,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [,setShowFailed] = useAtom(Course_ShowFailed)
    const [,setFailedSaved] =useAtom(Course_FailedSaved)
    const [,setSuccessfullySaved] = useAtom(Course_SuccessfullySaved)
    const [,setHint_Saved] = useAtom(Course_Hint_Saved)
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
                            {/* 课程ID*/}
                            <div className=" mt-8 flex flex-nowrap items-center">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课程ID:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:EVM101"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *入门课前缀为1，进阶为2以此类推，第几期代表后缀为0x
                            </div>
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
                                <div className="flex justify-center sm:justify-end">

                                    <div className="relative hidden md:flex">
                                        <div className="w-24 h-24 flex   justify-center  border border-gray-300  ">
                                            <img className=" w-20 " src="/上传_upload.png" alt=""/>
                                            <input onChange={inputImg} type="file" id="file" className="absolute  opacity-0 transform rotate-90  w-24 mt-8   my-auto"  accept="image/*"/>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center  ml-5 border border-gray-300 overflow-hidden">
                                        <img className="  w-24 h-24   "
                                             src={classNames(imgUrl)} alt=""/>
                                    </div>


                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                               *将用于课程卡片展示及课程详情页展示，建议尺寸：1500*845
                            </div>
                        </div>


                        {/*课程介绍*/}
                        <div className="pt-14 ">
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
                                    rows={3}
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
                                    rows={3}
                                    id="comment"
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
                            {/*课时数*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        课时数:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="例如:6"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>

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
                                        defaultValue={selectedOptions_course}
                                        id="Option_Course"
                                        onChange={setSelectedOption_Course}
                                        options={options_course}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>

                            {/*获得的技能*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        获得的技能:
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        id="course_id"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        placeholder="合约安全;Solidity"
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="pl-32 text-sm text-gray-400">
                                *请以英文输入法;隔开各关键词
                            </div>

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
                                        defaultValue={selectedOptions_course}
                                        id="Option_Course"
                                        onChange={setSelectedOption_Course}
                                        options={options_course}
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
                                        defaultValue={selectedOptions_course}
                                        id="Option_Course"
                                        onChange={setSelectedOption_Course}
                                        options={options_course}
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
                                        defaultValue={selectedOptions_course}
                                        id="Option_Course"
                                        onChange={setSelectedOption_Course}
                                        options={options_course}
                                        className={classNames(" block w-96 px-2 py-1 border rounded-lg  shadow-sm placeholder-gray-400 focus:outline-none  focus:border-blue-300 text-center sm:text-left sm:text-sm")}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>
                            {/*目标人群*/}
                            <div className=" mt-4 flex  ">
                                <div className="w-32  flex justify-end items-center">
                                    <div className="text-red-500 text-sm mr-1">
                                        *
                                    </div>
                                    <div className='mr-1 text-sm'>
                                        目标人群:
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

                        <div className="flex justify-center mt-10">

                            <button
                                type="button"
                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white  py-1 p-3"
                                onClick={() => {
                                    setShowSuccess(true)
                                }}
                            >
                                上架
                            </button>
                            <button
                                type="button"
                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border ml-4 py-1 p-3"
                                onClick={() => {
                                    setSuccessfullySaved(true)
                                }}
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
