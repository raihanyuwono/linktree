import Image from "next/image";
import "./styles.css";

import LinkTree from "./components/LinkTree";
import { getAsset } from "./utils/get";

const bgImage = {
  src: "bg",
  alt: "Dark Forest",
};

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Image
        className="bg-image"
        src={getAsset("image", bgImage.src, "webp")}
        alt={bgImage.alt}
        loading="lazy"
        fill
      />
      <LinkTree />
    </div>
  );
}
