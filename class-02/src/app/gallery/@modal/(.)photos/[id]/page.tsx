import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import React from "react";

interface Param {
  params: {
    id: string;
  };
}

const page = ({ params }: Param) => {
  const images: Photo[] = photos;
  const image: Photo | any = images.find(
    (image: Photo) => image.id === params.id
  );
  // console.log(image);
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto backdrop-blur-sm bg-black/[70] ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-6">
        <Image
          alt=""
          src={image.imageSrc}
          height={600}
          width={600}
          className="w-full object-contain aspect-square col-span-2"
        />
      </div>
    </div>
  );
};

export default page;
