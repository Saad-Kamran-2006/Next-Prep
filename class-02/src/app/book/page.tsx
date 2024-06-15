import Link from "next/link";
import React from "react";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const bookAPi = await fetch("https://simple-books-api.glitch.me/books");
  const bookData: Book[] = await bookAPi.json();
  //   console.log(bookData);
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="font-bold text-6xl">Book Store</h1>
      <div className="grid grid-cols-3 gap-40">
        {bookData.map((book: Book) => (
          <div
            key={book.id}
            className="relative bg-gray-300 p-5 h-40 rounded-lg"
          >
            <h1 className="font-bold text-xl">{book.name}</h1>
            <span className="block font-medium text-sm">{book.type}</span>
            <Link
              href={`/book/${book.id}`}
            >
              <button
                className={`bg-gray-900 text-xs rounded px-3 py-1 text-white mt-8 absolute right-5 bottom-5`}
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
