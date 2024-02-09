'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode
}

const Session: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(()=> {
    if(window.localStorage.getItem('session')) {
      return router.push('/')
    }
    return router.push('/login')
  }, []);

  return (
    <>{children}</>
  )
}

export default Session;