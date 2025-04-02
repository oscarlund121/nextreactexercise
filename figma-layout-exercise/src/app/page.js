'use client';
import Header from "@/components/Header";
import Text from "@/components/Text";
import Watch from "@/components/Watch";
import Watches from "@/components/Watches";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [changeImage, setChangeImage] = useState("/images/navy.png");

  return (
    <div>
      <Header />
      <div class="grid grid-cols-[2fr_1fr] items-center justify-center my-[10vh] mx-auto">
        <Text />
        <Watch
          changeImage={changeImage}
          setChangeImage={setChangeImage}
        />
        <Watches
          changeImage={changeImage}
          setChangeImage={setChangeImage}
        />
      </div>
    </div>
  );
}
