"use client";
import Circles from "./Circles";
import Image from "next/image";

const Watch = ({ changeImage, setChangeImage }) => {
  return (
    <div class="flex items-center gap-8">
      <Image
        src={`/images/${changeImage}.png`}
        alt="Watch image"
        width={400}
        height={400}
      />
      <Circles changeImage={changeImage} setChangeImage={setChangeImage} />
    </div>
  );
};

export default Watch;
