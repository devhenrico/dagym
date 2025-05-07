import GitHub from "../assets/images/icons/github.svg";
import X from "../assets/images/icons/x.svg";
import TikTok from "../assets/images/icons/tiktok.svg";
import YouTube from "../assets/images/icons/youtube.svg";
import Instagram from "../assets/images/icons/instagram.svg";
import Nubank from "../assets/images/icons/nubank.svg";
import Microsoft from "../assets/images/icons/microsoft.svg";
import PlayStation from "../assets/images/icons/playstation.svg";
import Uber from "../assets/images/icons/uber.svg";
import Amazon from "../assets/images/icons/amazon.svg";

const iconsMap: Record<string, string> = {
  github: GitHub,
  x: X,
  tiktok: TikTok,
  youtube: YouTube,
  instagram: Instagram,
  nubank: Nubank,
  microsoft: Microsoft,
  playstation: PlayStation,
  uber: Uber,
  amazon: Amazon,
};

interface IconProps {
  name: keyof typeof iconsMap;
  alt?: string;
  className?: string;
}

export const Icons = ({
  name,
  alt = `${name} logo`,
  className = "",
}: IconProps) => {
  const src = iconsMap[name];

  return (
    <img
      src={src}
      alt={alt}
      className={`invert transition-opacity duration-300 hover:opacity-90 ${className}`}
    />
  );
};
