import { X } from "lucide-react";
import { toast } from "sonner";

export function Toast() {
  return toast.custom((t) => (
    <div className="bg-base flex items-center justify-between gap-14 rounded-xl border-none p-2 text-white sm:p-3">
      <span className="text-xs sm:text-sm">
        Formulário enviado com sucesso!
      </span>
      <button
        onClick={() => toast.dismiss(t)}
        className="cursor-pointer text-white transition-colors duration-300 hover:text-gray-200"
      >
        <X className="size-3 sm:size-4" />
      </button>
    </div>
  ));
}
