import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";  
import { closeDrawer } from "../store/stateSlice";
import Links from '../urls.json'
import { useLocation , Link , } from "react-router-dom";

const Drawer = (props)=>{

    const dispatch = useDispatch()
    let url = useLocation().pathname
    let location = useLocation().pathname.match(/\/(.*)\//)?.[1]
    // "Notes/python/collection.md" ,
    let pattern = /^Notes\/.*\/(.*)\.md/  ;

    console.log('link' , Links[location][0] )
    console.log('location' , url )
    let pattern2 = /\/.*\/(.*)/
    let page = url.match(pattern2)?.[1]
    console.log('page ' , page)
   
    return (
        <div className={" max-md:w-4/5" + " " +props.className } >
            <XCircleIcon className="w-5 h-6 md:hidden float-right m-1 " onClick={()=>dispatch(closeDrawer())}/>
            <ul className="clear-both ">
                {
                     Links[location].map((link, index)=>{
                        return (
                            <li key={index} className="px-2 bg-fade-100 mx-4 mb-1  hover:bg-gray-500 ">
                                <Link to={"/"+location +"/" +link.match(pattern)[1]} 
                                className={"block  px-4 text-white hover:text-white rounded " + " " +( link.match(pattern)[1] == 'page'  ? "border-b-2" : ' ') }>
                                    {link.match(pattern)[1]}</Link>
                            </li>
                        )
                    })
                    
                }
            </ul>
        </div>
    )
}

export default Drawer