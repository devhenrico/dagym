import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface FormFieldProps {
  icon: LucideIcon;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
  maxLength?: number;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(
  (
    { icon: Icon, placeholder, type = "text", isTextarea = false, maxLength },
    ref,
  ) => {
    return (
      <div className="relative">
        <div className="absolute top-4 left-3.5 text-neutral-400 sm:top-3.5 sm:left-3">
          <Icon className="size-4 sm:size-5" />
        </div>

        {isTextarea ? (
          <Textarea
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            className="h-30 resize-none rounded-xl border-none bg-neutral-800/50 py-3.5 pr-4 pl-10 text-sm text-white placeholder:text-neutral-400"
            placeholder={placeholder}
            maxLength={maxLength}
          />
        ) : (
          <Input
            ref={ref as React.RefObject<HTMLInputElement>}
            className="h-12 rounded-xl border-none bg-neutral-800/50 py-3 pr-4 pl-10 text-sm text-white placeholder:text-neutral-400"
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        )}
      </div>
    );
  },
);
