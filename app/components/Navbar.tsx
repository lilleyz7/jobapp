'use client'
import { useClerk} from '@clerk/nextjs'

export default function Navbar(){
    const { signOut } = useClerk()
    return (
        <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl">My App</a>
        </div>
        <div className="flex-none">
           
          <button className="btn btn-primary" onClick={() => signOut({ redirectUrl: '/' })}>Sign out</button>
        </div>
      </div>
      </div>
)   
}