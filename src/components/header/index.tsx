import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const navigation = [
    {
        title:"用户管理",
        sort:[
            {

                list:"用户列表",
            },
        ]
    },
    {
        title:"课程管理",
        sort:[
            {
                href:"/course",
                list:"课程列表",
            },
            {
                list:"导师管理",
            },
            {
                list:"课程推荐人",
            },
        ]
    },
    {
        title:"活动管理",
        sort:[
            {
                list:"活动专题",
            },
            {
                list:"活动列表",
            },
        ]
    },
    {
        title:"黑客松管理",
        sort:[

        ]
    },
]
const Header = () =>{
    const router = useRouter();
    const [pathname,setPathname] = useState("")
    useEffect(()=>{
        if (router.isReady){
           const content = router.asPath
         const fetchUserBounty = async () => {
                setPathname(content)
                console.log(`${content}`)
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])
    return(
            <div className="fixed w-56 py-6 shadow h-screen">
                <div className=" flex justify-center mb-6">
                    <img src="/tintin_color_horizontal.svg" alt=""/>
                </div>
                {navigation.map(items=>(
                    <div key={items.title} className="mb-4">
                            <div className={classNames("flex justify-between pl-8 2xl:pl-8 p-1 2xl:p-2 text-sm 2xl:text-base text-black  px-4 ")}>
                                <div className="  ">
                                    {items.title}
                                </div>
                            </div>
                        <div className="">
                            {items.sort.map(lists=>(
                                <div key={lists.list} className='mt-4'>
                                    <Link href={`${lists.href}`}>
                                        <a className={classNames(`${lists.href}` == `${pathname}` ? 'bg-indigo-100 ' : ''
                                            ,"flex justify-between p-1 2xl:p-2 2xl:pl-12 text-sm 2xl:text-base text-black pl-12 ")}>
                                            <div className="mr-3 ">
                                                {lists.list}
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
    )
}


export default Header
