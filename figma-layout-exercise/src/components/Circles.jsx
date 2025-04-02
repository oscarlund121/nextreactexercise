"use client";

const Circle = ({ changeImage, setChangeImage }) => {
  return (
    <div class="flex flex-col items-center gap-2 p-8">
      <button
        onClick={() => setChangeImage("navy")}
        class={`w-8 h-8 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-150 ${
          changeImage === "navy" ? "bg-[#434558]" : "bg-transparent"
        }`}
      ></button>

      <div class="flex flex-col justify-between items-center h-10">
        <div class="w-1 h-1 bg-white rounded-full"></div>
        <div class="w-1 h-1 bg-white rounded-full"></div>
        <div class="w-1 h-1 bg-white rounded-full"></div>
      </div>

      <button
        onClick={() => setChangeImage("mint")}
        class={`w-8 h-8 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-150 ${
          changeImage === "mint" ? "bg-[#6ADDCC]" : "bg-transparent"
        }`}
      ></button>

      <div class="flex flex-col justify-between items-center h-10">
        <div class="w-1 h-1 bg-white rounded-full"></div>
        <div class="w-1 h-1 bg-white rounded-full"></div>
        <div class="w-1 h-1 bg-white rounded-full"></div>
      </div>

      <button
        onClick={() => setChangeImage("ocean")}
        class={`w-8 h-8 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-150 ${
          changeImage === "ocean" ? "bg-[#F9CDC4]" : "bg-transparent"
        }`}
      ></button>
    </div>
  );
};

export default Circle;
