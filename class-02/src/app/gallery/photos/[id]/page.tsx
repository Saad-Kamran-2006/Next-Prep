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
    <div className="max-w-screen max-h-screen">
        <Image
          src={image.imageSrc}
          alt="Shoe Image"
          width={800}
          height={800}
          className="max-w-screen max-h-screen object-contain"
        />
    </div>
  );
};

export default page;
