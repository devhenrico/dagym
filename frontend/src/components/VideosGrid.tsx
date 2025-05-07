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
    <div className="mt-12 grid grid-cols-3 gap-7">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`${
            video.spanTwo ? "col-span-2" : ""
          } h-90 overflow-hidden rounded-2xl border border-neutral-800/50 shadow-[0_0_30px_0_rgba(255,91,1,0.10)] transition-opacity duration-300 hover:opacity-70`}
        >
          <a href={video.link} target="_blank" rel="noopener noreferrer">
            <video
              src={video.src}
              className="object-cover"
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
