import VideoOne from "@/assets/videos/7pjjHThDJ0d7FSLOtDrTA4pRXEc.mp4";
import VideoTwo from "@/assets/videos/Cw4grH0hI3nRYQLiC53MUuRL0.mp4";
import VideoThree from "@/assets/videos/LzP7kaWtEH5iEWLmFk0w7mQ9oJw.mp4";
import VideoFour from "@/assets/videos/6lIeCq70Ms7a34UU3ZOrrZrBSQg.mp4";

interface Video {
  src: string;
  link: string;
  spanTwo?: boolean;
}

export const videos: Video[] = [
  {
    src: VideoOne,
    link: "https://streamplaydev.vercel.app",
    spanTwo: true,
  },
  {
    src: VideoTwo,
    link: "https://streamplaydev.vercel.app",
  },
  {
    src: VideoThree,
    link: "https://www.tiempo.fitness",
  },
  {
    src: VideoFour,
    link: "https://streamplaydev.vercel.app",
    spanTwo: true,
  },
];
