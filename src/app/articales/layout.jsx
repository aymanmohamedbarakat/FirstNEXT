import React from 'react'
 export const metadata = {
    title:"articalesPage"
  }
export default function layout({children}) {
  return (
    <div>
        <div className='mt-52 bg-blue-600 p-20 rounded-2xl'>
            {children}
        </div>
    </div>
  )
}
