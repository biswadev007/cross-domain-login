'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    window.localStorage.removeItem('session');
    return router.push('/login')
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl">This is logged in page....</h1>
      <button onClick={handleClick} className="h-10 w-64 shadow-2xl rounded-md border bg-yellow-500 text-white hover:opacity-60">
        Log out
      </button>
    </div>
  )
}
