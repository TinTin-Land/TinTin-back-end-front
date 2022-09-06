import Header from "../../components/header";
import Course from "../course";
import Header_people from "../../components/header_people";
import { Fragment } from 'react'

import {Disclosure,Menu,Transition } from '@headlessui/react';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




const Home = () =>{
    return (
       <Course/>
    )
}

export default Home


