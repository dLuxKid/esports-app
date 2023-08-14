'use client'

// next imports
import { useRouter } from "next/navigation";
import Image from "next/image";
// react imports
import { useEffect, useState } from "react";
// images
import img from '@/assets/codm6.jpg'
// components
import RegisterTeam from "@/components/Form/RegisterTeam";
// firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
// context
import { useAuthContext } from "@/contexts/useAuthContext";
// component
import Loader from "@/components/Loader/Loader";
import { showToast } from "@/functions/toast";

function Register() {

    const [userData, setUserData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const router = useRouter()

    const { user } = useAuthContext()

    useEffect(() => {
        (async function fetchData() {
            if (!user) return
            // set loading state
            setLoading(true);
            // query firebase db
            const q = query(
                collection(db, "users"),
                where("email", "==", user.email)
            );
            const querySnapshot = await getDocs(q);

            // function to listen for logs
            querySnapshot.docs.map((doc) => {
                const data = doc.data();

                if (data.accountType === 'player' || data.accountType === 'host') {
                    showToast('warning', `This is a ${data.accountType} account, use an owner account to register team`)
                    router.push('/')
                }
                setUserData(data)
            });

            // set loading to false
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })();
    }, [user])

    if (loading) {
        return (
            <div className="flex-center w-full h-screen">
                <Loader />
            </div>
        )
    }

    return (
        <section className='relative bg-pry-grey flex-center min-h-[90vh]'>
            <div className='flex-between gap-[2.5%]'>
                <RegisterTeam />
                <div className='w-1/4 hidden md:block'>
                    <Image src={img} alt='codm player' className='object-fill object-center bg-clip-content h-screen' />
                </div>
            </div>
        </section>
    )
}


export default Register