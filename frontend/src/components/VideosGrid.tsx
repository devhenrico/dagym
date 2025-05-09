interface Video {
  src: string;
  link: string;
  spanTwo?: boolean;
}

interface VideosGridProps {
  videos: Video[];
}

export function VideosGrid({ videos }: VideosGridProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 px-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 sm:px-6 md:mt-12 md:grid-cols-3 md:gap-7 md:px-0">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`${
            video.spanTwo ? "md:col-span-2" : ""
          } h-60 overflow-hidden rounded-2xl border border-neutral-800/50 shadow-[0_0_30px_0_rgba(255,91,1,0.10)] transition-opacity duration-300 hover:opacity-70 sm:h-72 md:h-90`}
        >
          <a href={video.link} target="_blank" rel="noopener noreferrer">
            <video
              src={video.src}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </a>
        </div>
      ))}
    </div>
  );
}
