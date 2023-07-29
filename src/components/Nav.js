import React from "react";
import {Bars3Icon } from '@heroicons/react/24/solid'
import { useDispatch } from "react-redux";
import { openDrawer } from "../store/stateSlice";


const Nav = (props)=>{

    const dispatch = useDispatch()

    return (
        <div className={" flex  justify-between p-1 sticky top-0" +" "+ (props.className)}>
            <div className="flex ">
                <Bars3Icon className='w-5 h-6 md:hidden' onClick={()=>dispatch(openDrawer())}/>
                <div>learn</div>  
            </div>  
            <ul className="flex ">
                <li className="px-2">javascript</li>
                <li className="px-2">html</li>
                <li className="px-2">css</li>
                <li className="px-2">react</li>
                <li className="px-2">vue</li>
            </ul>
        </div>
    )
}

export default Nav