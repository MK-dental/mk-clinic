import Link from "next/link";
import { useState } from "react"
import { useRouter } from 'next/router'
import { createClient } from '../../utils/supabase/component'

export default function Signout(){
    const router = useRouter()
    const supabase = createClient()
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error(error)
          }
          router.push('/')
      }
    return (
        <>
        <button onClick={signOut}>
     Logout
        </button>
        </>
    )
}