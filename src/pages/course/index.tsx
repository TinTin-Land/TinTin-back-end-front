import Header from "../../components/header";
import Header_people from "../../components/header_people";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import Link from "next/link";
import {Course_Deleted, Course_Save, Course_Show} from "../../components/pop-up-box";
import {useAtom} from "jotai";
import {Course_Hint_Deleted, Course_ShowFailed, Course_ShowSuccess} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },{ name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    



]
const Course =  () =>{
    const [ShowSuccess,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [ShowFailed,setShowFailed] = useAtom(Course_ShowFailed)
    const [showHint,setShowHint] =useAtom(Course_Hint_Deleted)
    return(
        <div  className="flex ">
            <Header/>
            <div className="w-full pl-56 overflow-hidden h-screen">
                <Course_Deleted/>
                <Course_Show/>
                <div className="flex  justify-between w-full p-5 px-10 h-14 items-center">
                    <div className="flex  text-gray-800 text-lg items-center">
                        <div className="mr-4 ">
                            <i className="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div>
                           课程列表
                        </div>
                    </div>
                    <Header_people></Header_people>
                </div>

                <div className="p-5 my-auto text-black  bg-rose-100   ">
                    <div className="bg-white px-4 py-5   rounded-sm xl:h-100 2xl:h-105">
                        <div className="flex">
                            <Link href="/course/add_course">
                            <a className="flex rounded-md bg-blue-500 px-3 text-sm py-1 text-white items-center ">
                                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                新建
                            </a>
                            </Link>
                        </div>

                        <div className="mt-4 pb-4 flex flex-col h-new 2xl:h-new-1 ">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8  ">
                                    <div className=" shadow  rounded-sm h-full" >
                                        <table className="min-w-full divide-y divide-gray-300 h-full">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    课程id
                                                </th>
                                                <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                    课程名称
                                                </th>
                                                <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                    本期期数
                                                </th>
                                                <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                    是否可报名
                                                </th>
                                                <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                    状态
                                                </th>
                                                <th scope="col" className="px-2 py-3 text-left text-sm font-semibold text-gray-900">
                                                    操作
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                            {people.map((person) => (
                                                <tr key={person.email}>
                                                    <td className="whitespace-nowrap py-3 2xl:py-3.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        Evm_asdasd
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500 ">
                                                        <div className="truncate w-96 2xl:w-99">
                                                            Flow DApp开发入门课程——从初识Cadence到搭建Marketplace
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">第二期</td>
                                                    <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">是</td>
                                                    <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-500">
                                                        <div className="flex items-center">
                                                            <div className="mr-1 w-2 h-2 bg-green-400 rounded-full">

                                                            </div>
                                                            上架中
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-3 text-sm text-blue-500 ">
                                                        <div className="flex">
                                                            <button className="mr-2">
                                                                详情
                                                            </button>
                                                            <button className="mr-2">
                                                                编辑
                                                            </button>
                                                            <button onClick={()=>{setShowHint(true)}} className="mr-2">
                                                                删除
                                                            </button>
                                                            <div className="  ">
                                                                <Menu as="div" className="relative  text-left">
                                                                    <Menu.Button className="">
                                                                        更多

                                                                    </Menu.Button>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-100"
                                                                        enterFrom="transform opacity-0 scale-95"
                                                                        enterTo="transform opacity-100 scale-100"
                                                                        leave="transition ease-in duration-75"
                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                        leaveTo="transform opacity-0 scale-95"
                                                                    >
                                                                        <Menu.Items className="absolute bg-white border rounded-lg p-2 mt-2 -ml-4 z-20 text-gray-600">

                                                                            <div>
                                                                                <button onClick={()=>{setShowSuccess(true)}}>
                                                                                    上架
                                                                                </button>
                                                                            </div>

                                                                            <div>
                                                                                <button  className="mt-2">
                                                                                    取消首页展示
                                                                                </button>
                                                                            </div>
                                                                        </Menu.Items>
                                                                    </Transition>
                                                                </Menu>
                                                            </div>


                                                        </div></td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                           biaoqiang
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
