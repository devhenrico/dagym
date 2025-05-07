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
    <Card className="ml-6 w-90 border-neutral-800/50 bg-neutral-900 transition-colors duration-300 hover:cursor-pointer hover:bg-neutral-700/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>
              {name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-md font-medium text-white">{name}</h4>
            <p className="text-sm tracking-wide text-neutral-400">
              {userFunction}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-neutral-300">{feedback}</p>
      </CardContent>
    </Card>
  );
}
