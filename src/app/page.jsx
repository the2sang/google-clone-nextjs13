import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        />

        <HomeSearch/>
      </div>
    </>
  );
}