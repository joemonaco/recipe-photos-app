"use client";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
export default function RecipePage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Recipes</h1>

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
      </div>
    </section>
  );
}
