import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { getAsset } from "@/app/utils/get";

export type linktreePlatforms =
  | "instagram"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "github";

export type linktreeType = {
  platform: linktreePlatforms;
  content: string;
  url: string;
};

function LinkTreeCard({ platform, content, url }: linktreeType) {
  return (
    <Link className="linktree-card-container" href={url} target="_blank">
      <Image
        src={getAsset("icon", platform, "svg")}
        alt={platform}
        width={28}
        height={28}
        loading="lazy"
      />
      <div className="linktree-card-content">{content}</div>
      <Image
        className="linktree-card-arrow"
        src={getAsset("icon", "arrow", "svg")}
        alt="Arrow"
        width={16}
        height={16}
      />
    </Link>
  );
}

export default LinkTreeCard;
