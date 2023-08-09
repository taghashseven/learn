import React from "react";
import {Bars3Icon } from '@heroicons/react/24/solid'
import { useDispatch } from "react-redux";
import { openDrawer } from "../store/stateSlice";
import links from '../urls.json'
import { Link , useLocation} from "react-router-dom";

const Nav = (props)=>{

    const dispatch = useDispatch()
    let location = useLocation().pathname

    console.log(location)

    return (
        <div className={" flex  justify-between p-1 sticky top-0" +" "+ (props.className)}>
            <div className="flex ">
                <Bars3Icon className='w-5 h-6 md:hidden' onClick={()=>dispatch(openDrawer())}/>
                <div>learn</div>  
            </div>  
            <ul className="flex ">
              
                {
                    [...Object.keys(links)].map(topic =>{

                        let home =  links[topic][0].match(/\/(.*)\.md/)[1]

                        return (
                            <li key={topic} className={"px-2 hover:opacity-60"+ (location.includes(topic) ? 'border border-b ' : '')} >
                               <Link  to ={home}>{topic}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Nav