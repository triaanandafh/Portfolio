import React from 'react'
import {PinContainer} from '../components/ui/Pin'
import { FaLocationArrow } from "react-icons/fa";
import { projects } from '@/data';
import { HoverEffect } from './ui/card-hover-effect';


const RecentProjects = () => {
  return (
    <div  className="py-20 overflow-hidden bg-slate-950 px-20" id='projects' >
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
            My <span className="text-purple-500"> Project</span>
        </h1>
      <HoverEffect items={projects} />
    </div>
  )
}

export default RecentProjects