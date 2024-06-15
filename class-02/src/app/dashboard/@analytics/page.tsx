import Card from '@/components/Card'
import { delay } from '@/lib/delay';
import React from 'react'

const page = async () => {
  await delay(3000);
  return <Card className="bg-orange-500">Analytics Page</Card>;
};

export default page