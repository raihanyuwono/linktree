import Image from "next/image";
import LinkTreeCard, { linktreePlatforms } from "./LinkTreeCard";
import "./styles.css";
import linktree from "@/app/data/linktree.json";

const logo = {
  src: "/assets/icons/logo.svg",
  alt: "logo",
};

function LinkTree() {
  return (
    <div className="linktree-container">
      <div className="linktree-logo">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={32}
          height={32}
          loading="lazy"
        />
        <h1 className="linktree-title">LinkTree</h1>
      </div>
      {linktree.map((data, id) => (
        <LinkTreeCard
          key={id}
          platform={data.platform as linktreePlatforms}
          content={data.content}
          url={data.url}
        />
      ))}
    </div>
  );
}

export default LinkTree;
