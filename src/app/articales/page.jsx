import Link from 'next/link'
import React from 'react'

export default function ArticalesPage() {

  return (
    <div>ArticalesPage
      <Link href="/posts">
      <button className='btn btn-soft'>Take me To post</button>
      </Link>
    </div>
  )
}
