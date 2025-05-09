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
      className="relative mt-8 flex w-full max-w-5xl justify-center px-4 sm:mt-16 sm:px-6"
      ref={gridRef}
    >
      <div className="bg-base absolute hidden h-full w-1 rounded-2xl sm:block"></div>
      <div className="grid w-full grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-y-7">
        {process.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center sm:hidden"
          >
            <div className="bg-base mb-4 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14">
              <item.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </div>
            <p className="sm:text-md mb-3 text-sm font-medium tracking-wide text-zinc-400">
              {item.step}
            </p>
            <Card className="w-full border-none bg-neutral-900 transition-colors duration-300 hover:bg-neutral-700/20">
              <CardHeader>
                <h3 className="text-center text-xl font-semibold text-white/90 sm:text-2xl">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}

        {process.map((item) => (
          <>
            {item.position === "left" ? (
              <>
                <div className="hidden pr-6 text-right sm:block sm:pr-18">
                  <Card className="card-left border-none bg-neutral-900 transition-colors duration-300 hover:bg-neutral-700/20">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-white/90 sm:text-2xl">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative hidden items-center sm:flex">
                  <div className="bg-base absolute -left-7 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14">
                    <item.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                  </div>
                  <div className="pl-6 sm:pl-18">
                    <p className="sm:text-md text-sm font-medium tracking-wide text-zinc-400">
                      {item.step}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative hidden items-center justify-end sm:flex">
                  <div className="bg-base absolute -right-7 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14">
                    <item.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                  </div>
                  <div className="pr-6 sm:pr-18">
                    <p className="sm:text-md text-sm font-medium tracking-wide text-zinc-400">
                      {item.step}
                    </p>
                  </div>
                </div>
                <div className="hidden pl-6 sm:block sm:pl-18">
                  <Card className="card-right border-none bg-neutral-900 transition-colors duration-300 hover:bg-neutral-700/20">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-white/90 sm:text-2xl">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
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
