import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRef } from "react";
import { useCardAnimation } from "@/hooks/useCardAnimation";

interface Process {
  title: string;
  description: string;
  step: string;
  icon: React.ElementType;
  position: "left" | "right";
}

interface ProcessGridProps {
  process: Process[];
}

export function ProcessGrid({ process }: ProcessGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useCardAnimation(gridRef);

  return (
    <div
      className="relative mt-16 flex w-full max-w-5xl justify-center"
      ref={gridRef}
    >
      <div className="bg-base absolute h-full w-1 rounded-2xl"></div>
      <div className="grid grid-cols-2 gap-y-7">
        {process.map((item) => (
          <>
            {item.position === "left" ? (
              <>
                <div className="pr-18 text-right">
                  <Card className="card-left border-none bg-neutral-900 transition-colors duration-300 hover:bg-neutral-700/20">
                    <CardHeader>
                      <h3 className="text-2xl font-semibold text-white/90">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative flex items-center">
                  <div className="bg-base absolute -left-7 flex h-14 w-14 items-center justify-center rounded-full">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="pl-18">
                    <p className="text-md font-medium tracking-wide text-zinc-400">
                      {item.step}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex items-center justify-end">
                  <div className="bg-base absolute -right-7 flex h-14 w-14 items-center justify-center rounded-full">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="pr-18">
                    <p className="text-md font-medium tracking-wide text-zinc-400">
                      {item.step}
                    </p>
                  </div>
                </div>
                <div className="pl-18">
                  <Card className="card-right border-none bg-neutral-900 transition-colors duration-300 hover:bg-neutral-700/20">
                    <CardHeader>
                      <h3 className="text-2xl font-semibold text-white/90">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
