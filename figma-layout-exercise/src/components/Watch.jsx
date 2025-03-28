import Circles from "./Circles";
import Image from "next/image";

const watch = (props) => {
  return (
    <div className="watch">
      <Image
        src="/images/navyWatch.png"
        alt="Navy watch"
        width={400}
        height={400}
        priority
      />
      <Circles />
    </div>
  );
};

export default watch;
