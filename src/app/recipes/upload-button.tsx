"use client";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { useState } from "react";
export default function UploadButton({
  imageCallback,
}: {
  imageCallback: any;
}) {
  //   const [imageId, setImageId] = useState("");

  function returnImageID(imageId) {
    imageCallback(imageId);
  }
  return (
    <Button asChild>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faUpload} />
        <CldUploadButton
          onUpload={(result: UploadResult) => {
            returnImageID(result.info.public_id);
          }}
          uploadPreset="lzdcmstw"
        />
      </div>
    </Button>
  );
}
