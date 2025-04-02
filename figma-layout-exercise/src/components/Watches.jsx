"use client";
import Image from "next/image";

const Watches = ({ setChangeImage }) => {
  return (
    <div class="flex gap-16 mt-16 col-start-2 col-end-[-1] row-start-2">
      <div
        onClick={() => setChangeImage("navy")}
        class="w-32 h-16 flex-shrink-0 rounded-lg flex justify-center items-end bg-[rgba(67,69,88,0.6)]"
      >
        <Image src="/images/smallNavy.png" alt="Navy watch" width={100} height={100} />
      </div>
      <div
        onClick={() => setChangeImage("mint")}
        class="w-32 h-16 flex-shrink-0 rounded-lg flex justify-center items-end bg-[rgba(106,221,204,0.6)]"
      >
        <Image src="/images/smallMint.png" alt="Mint watch" width={100} height={100} />
      </div>
      <div
        onClick={() => setChangeImage("ocean")}
        class="w-32 h-16 flex-shrink-0 rounded-lg flex justify-center items-end bg-[rgba(249,205,196,0.6)]"
      >
        <Image src="/images/smallOcean.png" alt="Ocean watch" width={100} height={100} />
      </div>
    </div>
  );
};

export default Watches;
