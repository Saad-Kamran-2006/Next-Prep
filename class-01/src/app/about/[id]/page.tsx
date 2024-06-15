import Link from 'next/link'
import React from 'react'

interface Param {
    params: {
        id: string
    }
}

const page = (children: any) => {
    console.log(children)
  return (
      <div>page
    </div>
  )
}

export default page