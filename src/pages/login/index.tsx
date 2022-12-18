
import React, {useEffect, useState} from "react";
import {Router, useRouter} from "next/router";
import { client } from "../../client";
import {useAtom} from "jotai";
import {UserInfo} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Login = () =>{
    const router = useRouter()
    const [emailType,setEmailType] = useState(true)
    const [emailNumber,setEmailNumber] =useState(false)
    const [time,setTime] = useState(0)
    const [hidden,setHidden] = useState(false)
    const[submitState,setSubmitState] =useState(false)
    const [loginState,setLoginState] = useState(false)
    const [verificationState,setVerificationState] = useState(false)
    const [,setUserInfo] =useAtom(UserInfo)
    useEffect(() => {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            }else {
                setHidden(false)
            }
        }, 1000);
    }, [time]);

    function checkemail()
    {
        const email = (document.getElementById("email") as HTMLInputElement).value
        const expression = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        let objExp = new RegExp(expression);
        if(objExp.test(email)==true){
            setEmailType(true)
            setEmailNumber(true)
        }
        else{
            setEmailType(false)
            setEmailNumber(false)
        }
    }

    const submit = async () => {
        if (submitState) {
            setLoginState(true)
            const ret = await client.callApi('v1/email/CheckEmail', {
                email: (document.getElementById("email") as HTMLInputElement).value,
                code: (document.getElementById("verification") as HTMLInputElement).value
            });
            const email = {
                user_email:`${(document.getElementById("email") as HTMLInputElement).value}`
            }

            if (ret.res.state) {
                setLoginState(false)
                setUserInfo(email)
                await   router.push(`/course`)
            } else {
                setLoginState(false)
               alert("验证码错误")
            }

        }
    }
    const send = async () => {

        if (emailType && emailNumber) {
            setVerificationState(true)
            if(!verificationState){
                const ret = await client.callApi('v1/email/SendEmail', {
                    email: (document.getElementById("email") as HTMLInputElement).value
                });
                console.log(ret.isSucc)
                if (ret.isSucc) {
                    setVerificationState(false)
                    setSubmitState(true)
                    setHidden(true)
                    setTime(30)
                }else {
                    alert("请检查网络或者联系管理员")
                    setVerificationState(false)
                }
            }

        }
    }

    return(
        <>
            <div className="mx-auto relative h-screen  bg-fixed overflow-hidden"
                 style={{backgroundImage:"url('/tintin-bg.png')"}}>
                <div className=" flex  fixed z-20 inset-x-0    transition duration-700 mb-10 pl-5 mb-5  items-center  p-3 md:p-3 sm:px-6  md:space-x-10 lg:px-10 xl:px-20 items-center">
                    <div className="flex   ">
                                <img
                                    className=" w-auto   "
                                    src="/tintin_color_horizontal.svg"
                                    alt=""
                                />
                    </div>

                </div>
                <div className="min-h-full flex flex-col  justify-center py-12 sm:px-6 lg:px-8">
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl ">
                        <div className=" backdrop-blur-sm bg-white/70 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div className="text-4xl">
                                Welcome
                            </div>
                            <div className="mt-2 text-sm mb-10 mt-5">
                                Welcome to TinTinLand! Please login with your email.
                            </div>

                            <div>
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                   邮箱
                                    <div className={classNames(emailType?"hidden":"text-red-400")}>
                                       请检查你的邮箱格式
                                    </div>
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onKeyDown={checkemail}
                                        onInput={checkemail}
                                        required
                                        placeholder="请输入"
                                        className={classNames(emailType?"outline-none":"border-red-400","outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none   sm:text-sm")}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                    验证码
                                </label>
                                <div className="mt-1">
                                    <input
                                        id='verification'
                                        type=""
                                        required
                                        placeholder="请输入"
                                        className={classNames("outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none   sm:text-sm")}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <button  className={hidden?"hidden":""}
                                onClick={send}>
                                    <div className={classNames(emailType && emailNumber?" bg-black ":"cursor-not-allowed","w-24  flex justify-center  border bg-white text-black rounded-lg  py-1.5  text-gray-200 text-xs ")}>
                                        获取验证码
                                        <div className={verificationState?"animate-spin":"hidden animate-spin"}>
                                        <i className="fa fa-spinner f-spin fa-x fa-fw"></i></div>
                                    </div></button>
                                <button className={hidden?"border bg-white text-black rounded-lg px-2 py-1.5  text-gray-200  text-xs":"hidden"}>
                                    请等待 {time} 秒后重试
                                </button>
                            </div>
                            <div className="flex  justify-end mt-10">
                                <button
                                    type="submit"
                                    onClick={submit}
                                    className={classNames(submitState?"bg-black text-white border":"cursor-not-allowed bg-white text-gray-300","  w-24 flex justify-center py-2 px-4  border-black  rounded-full shadow-sm text-sm font-medium")}
                                >
                                    登录   <div className={loginState?"animate-spin":"hidden animate-spin"}>
                                    <i className="fa fa-spinner f-spin fa-x fa-fw"></i></div>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
