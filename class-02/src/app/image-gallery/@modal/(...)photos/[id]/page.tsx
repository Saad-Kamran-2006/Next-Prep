"use client";
import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
// import {} from 'react-icons/io5'

interface Param {
  params: {
    id: string;
  };
}

const page = ({ params }: Param) => {
  // console.log(params.id);
  const images: Photo[] = photos;
  const image: Photo | any = images.find(
    (image: Photo) => image.id === params.id
  );
  return (
    <div className="fixed z-10 top-0 bottom-0 left-0 right-0 mx-auto backdrop-blur-sm bg-black/70">
      <div className="absolute bg-red-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Image
            src={image.imageSrc}
            alt="Image"
            height={500}
            width={700}
            className="max-h-screen object-contain"
          />
          <a href={"/image-gallery"} className="absolute -left-10 -top-10">
            <IoCloseCircleOutline className="stroke-slate-300" size={40} />
          </a>
          <a
            href={`/photos/${params.id}`}
            className="absolute -right-10 -top-10"
          >
            <IoMdSearch className="stroke-slate-300" size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
