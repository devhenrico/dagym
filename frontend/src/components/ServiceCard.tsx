import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceCardProps {
  services: Service[];
}

export function ServiceCard({ services }: ServiceCardProps) {
  return (
    <div className="mt-8 flex w-full justify-center sm:mt-10 sm:px-2 md:mt-12 md:px-4">
      <div className="grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-24">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group relative rounded-2xl border-0 bg-transparent px-3 py-5 shadow-none transition-all duration-300 hover:bg-zinc-800/30 sm:py-7"
          >
            <div className="from-base/4 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <CardHeader>
                <div className="relative mb-3 h-10 w-10 sm:mb-5 sm:h-12 sm:w-12">
                  <div className="bg-base absolute inset-0 rounded-full opacity-10 blur-xl"></div>
                  <service.icon className="relative z-10 h-10 w-10 text-base sm:h-12 sm:w-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold whitespace-pre-line text-white sm:mb-3 sm:text-2xl">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                  {service.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
