import {Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import {CheckCircleIcon,ExclamationIcon, XCircleIcon} from "@heroicons/react/solid";
import {useAtom} from "jotai";
import {
    Course_FailedDelete1,
    Course_FailedDelete2, Course_FailedSaved,
    Course_Hint_Deleted, Course_Hint_Saved, Course_ShowFailed, Course_ShowSuccess,
    Course_SuccessfullyDeleted,
    Course_SuccessfullySaved
} from "../../jotai";
import Link from "next/link";


const Course_Deleted = () =>{

    const [showHint,setShowHint] =useAtom(Course_Hint_Deleted)
    const [showSuccessfully,setShowSuccessfully] = useAtom(Course_SuccessfullyDeleted)
    const [showFailedDelete1,setShowFailedDelete1] = useAtom(Course_FailedDelete1)
    const [showFailedDelete2,setShowFailedDelete2] = useAtom(Course_FailedDelete2)

    const next = () =>{
        setShowHint(false)
        setShowSuccessfully(true)
    }

    return(
        <>
            <Transition.Root show={showHint} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setShowHint}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                <div className="items-center">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <ExclamationIcon className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3   pt-0.5">
                                            <p className=" text-sm font-medium text-gray-900">课程删除须知</p>
                                            <div className="flex w-80 mt-1 text-sm ">
                                            <p className="  text-red-500  ">
                                                将删除关于课程得到所有信息，
                                            </p>
                                            <p>你还要继续吗？
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex justify-end mt-6">
                                        <button
                                            type="button"
                                            className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                            onClick={() => {
                                                setShowHint(false)
                                            }}
                                        >
                                            取消
                                        </button>
                                        <button
                                            type="button"
                                            className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                            onClick={next}
                                        >
                                            继续
                                        </button>

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

            <Transition.Root show={showSuccessfully} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowSuccessfully}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3 text-left  pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程删除成功</p>
                                                {/*<p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>*/}
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-2">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setShowSuccessfully(false)
                                                    location.reload();

                                                }}
                                            >
                                                确认
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={showFailedDelete1} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowFailedDelete1}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3   pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程删除失败</p>
                                                <p className="mt-1 text-sm text-gray-500">请将课程从首页下架</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-6">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                                onClick={() => {
                                                    setShowFailedDelete1(false)
                                                }}
                                            >
                                                取消
                                            </button>
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setShowFailedDelete1(false)
                                                }}
                                            >
                                                前往
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={showFailedDelete2} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowFailedDelete2}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3   pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程删除失败</p>
                                                <p className="mt-1 text-sm text-gray-500">无权限</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-6">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                                onClick={() => {
                                                    setShowFailedDelete2(false)
                                                }}
                                            >
                                                取消
                                            </button>
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setShowFailedDelete2(false)
                                                }}
                                            >
                                                重试
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}

const Course_Save = () =>{
    const [FailedSaved,setFailedSaved] =useAtom(Course_FailedSaved)
    const [SuccessfullySaved,setSuccessfullySaved] = useAtom(Course_SuccessfullySaved)
    const [Hint_Saved,setHint_Saved] = useAtom(Course_Hint_Saved)

    return(
        <>
            <Transition.Root show={Hint_Saved} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setHint_Saved}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <ExclamationIcon className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3   pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">取消保存</p>
                                                <div className="flex w-80 mt-1 text-sm ">
                                                    <p className="  text-red-500  ">
                                                        将删除编辑的所有信息，
                                                    </p>
                                                    <p>是否继续？
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-6">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                                onClick={() => {
                                                    setHint_Saved(false)
                                                }}
                                            >
                                                取消
                                            </button>
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setHint_Saved(false)
                                                }}
                                            >
                                                <Link href="/course">
                                                    继续
                                                </Link>

                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={SuccessfullySaved} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setSuccessfullySaved}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3 text-left  pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程保存成功</p>
                                                <p className="mt-1 text-sm text-gray-500">你可以在列表中上架课程</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-2">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setSuccessfullySaved(false)
                                                }}
                                            >
                                                确认
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={FailedSaved} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setFailedSaved}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3   pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程保存失败</p>
                                                <p className="mt-1 text-sm text-gray-500">请检查网络或者联系管理员</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-6">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                                onClick={() => {
                                                    setFailedSaved(false)
                                                }}
                                            >
                                                取消
                                            </button>
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setFailedSaved(false)
                                                }}
                                            >
                                                重试
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}


const  Course_Show = () =>{

    const [ShowSuccess,setShowSuccess] =useAtom(Course_ShowSuccess)
    const [ShowFailed,setShowFailed] = useAtom(Course_ShowFailed)

    return(
        <>
            <Transition.Root show={ShowSuccess} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowSuccess}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3 text-left  pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程上架成功</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-2">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setShowSuccess(false)
                                                }}
                                            >
                                                确认
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition.Root show={ShowFailed} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowFailed}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                    <div className="items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3   pt-0.5">
                                                <p className=" text-sm font-medium text-gray-900">课程上架失败</p>
                                                <p className="mt-1 text-sm text-gray-500">请检查网络或者联系管理员</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex justify-end mt-6">
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-white text-gray-500 border mr-4 py-1 p-3"
                                                onClick={() => {
                                                    setShowFailed(false)
                                                }}
                                            >
                                                取消
                                            </button>
                                            <button
                                                type="button"
                                                className=" rounded-md text-sm text-black  focus:outline-none bg-blue-500 text-white py-1 p-3"
                                                onClick={() => {
                                                    setShowFailed(false)
                                                }}
                                            >
                                                重试
                                            </button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}




export {Course_Deleted,Course_Save,Course_Show}
