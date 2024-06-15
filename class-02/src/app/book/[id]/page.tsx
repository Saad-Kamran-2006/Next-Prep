import React from "react";

interface Param {
  params: {
    id: string;
  };
}

interface Book {
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

const page = async ({ params }: Param) => {
  //   console.log(params.id);
  const bookData = await fetch(
    `https://simple-books-api.glitch.me/books/${params.id}`
  );
  const book: Book = await bookData.json();
  // console.log(book)
  const errorData = await fetch(
    `https://simple-books-api.glitch.me/books/${params.id}`
  );
  const error = await errorData.json();
  //   console.log(error.error)
  return (
    <div className="flex justify-center items-center min-h-screen">
      {params.id < "7" ? (
        <div className="bg-gray-300 p-5 rounded-xl space-y-3 w-[21rem] h-60 relative">
          <h1 className="font-bold text-2xl">{book.name}</h1>
          <div className="space-y-1">
            <p className="text-sm font-semibold">
              <strong>Author:</strong> {book.author}
            </p>
            <span
              className={`text-sm font-semibold block ${
                book.isbn ? "" : "hidden"
              }`}
            >
              <strong>ISBN:</strong> {book.isbn}
            </span>
            <span className="text-sm font-semibold block">
              <strong>Type:</strong> {book.type}
            </span>
            <span className="text-sm font-semibold block">
              <strong>Stock:</strong> {book["current-stock"]}
            </span>
            <span className="text-xl font-bold block">${book.price}</span>
            <button
              disabled={!book.available}
              className={`bg-gray-900 text-white text-sm px-3 py-1 rounded absolute right-5 bottom-5 ${
                book.available ? "" : "cursor-not-allowed bg-opacity-80"
              }`}
            >
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <div className="font-bold text-7xl">{error.error}</div>
      )}
    </div>
  );
};

export default page;
