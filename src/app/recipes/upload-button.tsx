"use client";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { useState } from "react";
export default function UploadButton() {
  const [imageId, setImageId] = useState("");
  return (
    <Button asChild>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faUpload} />
        <CldUploadButton
          onUpload={(result: UploadResult) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="lzdcmstw"
        />
      </div>
    </Button>
  );
}
