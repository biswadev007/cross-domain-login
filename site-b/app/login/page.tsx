'use client'
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  
  const handleClick = () => {
    window.localStorage.setItem('session', 'ff2ef4e2-35b1-4bf9-8858-a5041a1cb78b');
    return router.push('/')
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button onClick={handleClick} className="h-10 w-64 shadow-2xl rounded-md border bg-yellow-500 text-white hover:opacity-60">
        Login now
      </button>
    </div>
  )
}

export default Login;