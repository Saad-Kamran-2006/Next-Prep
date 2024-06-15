import { redirect } from 'next/navigation';
import React from 'react'

interface Param {
    params: {
        id: string
    }
}

const page = async ({ params }: Param) => {
    // console.log(params.id)
    const res = await fetch(`https://simple-books-api.glitch.me/books/${params.id}`);
    const bookData = await res.json()
    //  console.log(bookData);
    if (!bookData.available) {
redirect('/order-book')
    }
    
  return (
    <div>
      <h1>Book ID: {params.id}</h1>
      <p>{bookData.available ? "This book is available": ""}</p>
    </div>
  );
}

export default page
