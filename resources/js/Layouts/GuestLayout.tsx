import React, {PropsWithChildren} from 'react'

export default function GuestLayout({children}:PropsWithChildren) {
  return (
    <div className=''>
        {children}
    </div>
  )
}
