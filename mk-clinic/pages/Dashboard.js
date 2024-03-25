
import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineHistory } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import Signout from '../components/auth/Signout';
// Corrected import statement


export default function Dashboard( ) {
   const components=[
     "Today" ,
   ]

   
  
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
  return(

   
  <>
     
         
                         <div >
                            
                           dashboard
                         </div>
                         
                   
                     
               
                   
           
       </>
 ) 
}




