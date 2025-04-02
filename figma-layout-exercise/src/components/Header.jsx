import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div class="flex justify-between items-center text-white h-[10vh] px-8">
      <FaApple class="text-5xl" />

      <nav>
        <ul class="flex flex-row justify-between items-center gap-16">
          <li>
            <a href="#" class="font-bold px-8 py-1 hover:bg-white hover:text-[#b6ccda] rounded-full transition-colors duration-300">
              Mac
            </a>
          </li>
          <li>
            <a href="#" class="font-bold px-8 py-1 hover:bg-white hover:text-[#b6ccda] rounded-full transition-colors duration-300">
              iPhone
            </a>
          </li>
          <li>
            <a href="#" class="font-bold px-8 py-1 hover:bg-white hover:text-[#b6ccda] rounded-full transition-colors duration-300">
              iPad
            </a>
          </li>
          <li>
            <a href="#" class="font-bold px-8 py-1 hover:bg-white hover:text-[#b6ccda] rounded-full transition-colors duration-300">
              iWatch
            </a>
          </li>
          <li>
            <a href="#" class="font-bold px-8 py-1 hover:bg-white hover:text-[#b6ccda] rounded-full transition-colors duration-300">
              Support
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex flex-row items-center gap-4">
        <CiSearch class="text-xl" />
        <p class="font-bold">|</p>
        <FiShoppingBag class="text-xl" />
      </div>
    </div>
  );
};

export default Header;
