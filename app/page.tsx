import Image from "next/image";
import "./styles.css";

import LinkTree from "./components/LinkTree";

const bgImage = {
  src: "/assets/images/bg.webp",
  alt: "Dark Forest",
};

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Image
        className="bg-image"
        src={bgImage.src}
        alt={bgImage.alt}
        loading="lazy"
        fill
      />
      <LinkTree />
    </div>
  );
}
