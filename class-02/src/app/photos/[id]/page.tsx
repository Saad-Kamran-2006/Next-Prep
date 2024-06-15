import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import React from "react";

interface Param {
  params: {
    id: string;
  };
}

const page = ({ params }: Param) => {
  // console.log(params.id)
  const images: Photo[] = photos;
  const image: Photo | any = images.find(
    (image: Photo) => image.id === params.id
  );
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image src={image.imageSrc} alt="Image" height={500} width={700} className="max-h-screen object-contain" />
    </div>
  );
};

export default page;
