import Image from "next/image";
import Link from "next/link";
import "./styles.css";

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
        src={`/assets/icons/${platform}.svg`}
        alt={platform}
        width={24}
        height={24}
      />
      <div className="linktree-card-content">{content}</div>
    </Link>
  );
}

export default LinkTreeCard;
