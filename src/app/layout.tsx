'use client'

// next imports
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
// react imports 
import { useEffect } from 'react'
// styles
import '@/styles/globals.css'
// components
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
// toast imports

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// store data
import { useAuthStore } from '@/store'
// firebase imports
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'



export const metadata: Metadata = {
  title: 'kid esports',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const loginUser = useAuthStore(state => state.loginUser)
  const logoutUser = useAuthStore(state => state.logoutUser)

  const router = useRouter()

  // function to check if user is logged in or out when page loads
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        loginUser(user)
        router.push('/')
      } else {
        logoutUser()
      }
    });
    unSubscribe();
    return () => unSubscribe();
  }, []);


  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='max-w-screen min-h-screen flex-center'>
          {children}
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  )
}
