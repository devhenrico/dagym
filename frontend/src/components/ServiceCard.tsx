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
    <div className="mt-12 flex w-full justify-center">
      <div className="grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group relative rounded-2xl border-0 bg-transparent px-3 py-7 shadow-none transition-all duration-300 hover:bg-zinc-800/30"
          >
            <div className="from-base/4 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <CardHeader>
                <div className="relative mb-5 h-12 w-12">
                  <div className="bg-base absolute inset-0 rounded-full opacity-10 blur-xl"></div>
                  <service.icon className="relative z-10 h-12 w-12 text-base" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold whitespace-pre-line text-white">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-neutral-400">
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
