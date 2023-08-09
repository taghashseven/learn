import React from 'react'
import './App.css'
import {Nav, Drawer , Markdown } from './components'
import { useSelector  } from 'react-redux/es/hooks/useSelector'
import { Dispatch } from 'react'    

const Layout = ()=>{

    const isDrawerOpen = useSelector(state=>state.navState.isDrawerOpen)


    return (
        <div className=' layout'>
            <Nav className='nav bg-green-200 header'/>
            <Drawer className={'drawer bg-fade-200  border-r-[1px] border-white'+ " "+ (isDrawerOpen ? " " : "max-md:hidden ")}/>
            <div className='main pre-wrapper' > 
                {/* <Markdown className='markdown ' /> */}
                <Markdown className='markdown ' />
            </div>
            <div className='side max-md:hidden'>
                {/* <ul>
                    <li>javascript</li>
                    <li>functions</li>
                    <li>classs </li>
                    <li>inherietance</li>
                </ul> */}
            </div>
        </div>
    )
}

export default Layout

