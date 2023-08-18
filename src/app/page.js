import GitaAppBar from '@/Component/AppBar'
import DashBoard from '@/Component/DashBoard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
    <DashBoard/>
    </main>
  )
}
