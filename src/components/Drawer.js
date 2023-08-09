import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";  
import { closeDrawer } from "../store/stateSlice";

const Drawer = (props)=>{

    const dispatch = useDispatch()

    const links = {
            pwa : [
                'designPrinciples.md', 
                'introduction.md',
                'service_worker.md',
            ]
    }

    return (
        <div className={"" + " " +props.className } >
            <XCircleIcon className="w-5 h-6 md:hidde float-right m-1 " onClick={()=>dispatch(closeDrawer())}/>
            <ul className="clear-both ">
                {
                     links.pwa.map((link, index)=>{
                        return (
                            <li key={index} className="px-2 bg-fade-100 mx-4 mb-2  hover:bg-gray-500 ">
                                <a href={"/"+link} className="block py-2 px-4 text-white hover:text-white">link</a>
                            </li>
                        )
                    })
                    
                }
            </ul>
        </div>

    )
}

export default Drawer