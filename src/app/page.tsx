'use client'

import { useGlobalContext } from '@/app/context/store';

export default function Home() {

  const {res} = useGlobalContext()

  return ( <div>
    <h1 className='flex items-center justify-center p-10 text-xl'> GLOBAL STATE MANAGEMENT</h1>
   <main className='m-10'>

    <table className='m-auto'>

      {/* Always Use tbody in between table tag for avoid the HYDRATION ERROR */}

      <tbody>
        {res.map((item : any)=>(
          <tr key={item.id}>
            <td className='p-10 border border-cyan-600'>
              {item.name}
            </td>
            <td className='p-10 border border-cyan-600'>
              {item.city}
            </td>
            <td className='p-10 border border-cyan-600'>
              {item.title}
            </td>
            <td className='p-10 border border-cyan-600'>
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <footer className='flex items-center justify-center p-10 text-xs'>
      Created By Ayan Saha.
    </footer>
   </main>
  </div>
  )
}
