import Header from "@/components/Header";
import Text from "@/components/Text";
import Watch from "@/components/Watch";
import Watches from "@/components/Watches";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Text />
        <Watch />
        <Watches />
      </div>
    </div>
  );
}
