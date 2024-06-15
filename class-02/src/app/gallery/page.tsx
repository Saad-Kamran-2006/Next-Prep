"use client";
import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const images: Photo[] = photos;
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-10 place-self-center">
        {images.map((image: Photo) => (
          <div
            key={image.id}
            className="max-h-80 place-self-center shadow-xl shadow-gray-300 w-fit hover:scale-105 transition-transform duration-300"
          >
            <Link href={`/gallery/photos/${image.id}`}>
              <Image
                src={image.imageSrc}
                alt="Shoes Image"
                height={400}
                width={400}
                className="cursor-pointer max-h-52 max-w-80 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
