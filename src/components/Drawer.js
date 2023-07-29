import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";  
import { closeDrawer } from "../store/stateSlice";

const Drawer = (props)=>{

    const dispatch = useDispatch()

    const links = {
        js : [
            'async and await',
            'arrow functions',
            'classes',
            'closures',
            'destructuring',
            'es6 modules',
        
        ], 
        react : [
            'react router',
            'react hooks',
            'componets ', 
            'redux', 
            'testing', 
        ] , 
        css : [
            'flexbox',
            'grid', 
            'animations',
            'tranforms',
            'transitions',
            'functions', 
            'variables',
            'media queries',
            'pseudo selectors',
        ] , 
        html : [
            'html5 semantic tags',
            'html5 forms',
        ]
    }

    return (
        <div className={"" + " " +props.className } >
            <XCircleIcon className="w-5 h-6 md:hidde float-right m-1 " onClick={()=>dispatch(closeDrawer())}/>
            <ul className="clear-both ">
                {
                     links.js.map((link, index)=>{
                        return (
                            <li key={index} className="px-2 bg-fade-100 mx-4 mb-2  hover:bg-gray-500 ">{link}</li>
                        )
                    })
                    
                }
            </ul>
        </div>

    )
}

export default Drawer