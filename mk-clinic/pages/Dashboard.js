
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
import createClient from '../utils/supabase/server-props'; // Corrected import statement


export default function Dashboard({ user }) {
   const components=[
     "Today" ,
   ]

   
  
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
  return(

   
  <>
     
         
                         <div className="flex items-center justify-between mb-4">
                            
                           dashboard
                         </div>
                         
                   
                     
               
                   
           
       </>
 ) 
}

export async function getServerSideProps(context) {
  const supabase = createClient(context)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
      
    },
    
  }
}


