"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col justify-between">
      Hello
      {/* <CldImage
        width="960"
        height="600"
        src="cceyh4kypzhtxynme7si"
        sizes="100vw"
        alt="Description of my image"
      /> */}
    </main>
  );
}
