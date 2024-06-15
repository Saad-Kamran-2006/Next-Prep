import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const images: Photo[] = photos;
  // console.log(images)
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center p-10 gap-10">
        {images.map((image: Photo) => (
          <div key={image.id} className="">
            <Link href={`/photos/${image.id}`}>
              <Image
                src={image.imageSrc}
                alt="Image"
                height={200}
                width={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
