import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

interface TestimonialCardProps {
  name: string;
  function: string;
  img: string;
  feedback: string;
}

export function TestimonialCard({
  name,
  function: userFunction,
  img,
  feedback,
}: TestimonialCardProps) {
  return (
    <Card className="ml-4 w-62 border-neutral-800/50 bg-neutral-900 transition-colors duration-300 hover:cursor-pointer hover:bg-neutral-700/20 sm:w-72 md:ml-6 md:w-80">
      <CardHeader>
        <div className="flex items-center gap-3 md:gap-4">
          <Avatar className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>
              {name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="md:text-md text-sm font-medium text-white">
              {name}
            </h4>
            <p className="text-xs tracking-wide text-neutral-400 sm:text-sm">
              {userFunction}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
          {feedback}
        </p>
      </CardContent>
    </Card>
  );
}
