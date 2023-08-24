

// next imports
import type { Metadata } from 'next'
// styles
import '@/styles/globals.css'
// components
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
// toast imports
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// firebase imports
import { AuthContextProvider } from '@/contexts/useAuthContext'

export const metadata: Metadata = {
  title: 'codm play arena',
  description: 'A honme for your codm toutnaments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AuthContextProvider>
          <Navbar />
          <main className='max-w-screen'>
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
        </AuthContextProvider>
      </body>
    </html>
  )
}
