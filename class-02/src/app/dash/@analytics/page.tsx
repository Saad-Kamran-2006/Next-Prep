import { delay } from '@/lib/delay'
import React from 'react'

const page = async () => {
  await delay(2000)
  return (
    <div>Analytics Page</div>
  )
}

export default page