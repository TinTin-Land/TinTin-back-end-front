import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import { client } from "../../client";
import {useAtom} from "jotai";
import { UserInfo } from "../../jotai";



const Header_people = () =>{
    const router = useRouter();
    const userInfo = {
        username:"David"
    }
    const [user_Info,] =useAtom(UserInfo)
    const [user,setUser] = useState(userInfo)
    useEffect(() => {
        if(router.isReady){
            const query = async() =>{
                const ret = await client.callApi('GetUser', {
                    user_email: user_Info.user_email
                });
                if(ret.isSucc){
                    const data = ret.res.user
                    const userData = {
                        username: data.username,
                    }
                    setUser(userData)
                }

            }
            query()
        }
    },[router.isReady])
    return(
        <>
            <div className="flex items-center ">
                <img className="rounded-full w-8 mr-3 border " src="/logo.svg" alt=""/>
                {user.username}

            </div>
        </>
    )
}

export default Header_people
