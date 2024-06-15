import { delay } from '@/lib/delay'
import React from 'react'

const page = async () => {
  await delay(4000)
  return (
    <div>Team Page</div>
  )
}

export default page