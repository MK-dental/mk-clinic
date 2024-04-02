import React from 'react'
import { createClient } from '../../utils/supabase/component'
export default function Check() {
    const supabase=createClient();
   const CheckFunction=async ()=>{
    try{
        const { data, error } = await supabase.from('rendezvs').select(` 
        date, 
        rendezvs ("2024-03-05")
      `)
      if(data){
        
        console.log("the rendezvs of today are",data)
        return;
      }
      if(error){
        console.error("Error selecting data:",error.message)
        return;
      }
     } catch (error) {
        console.error('Error:', error.message);
      } 
 
}
  return (
    <div></div>
  )
}
