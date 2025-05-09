import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialRowProps {
  testimonials: typeof testimonials;
}

export function TestimonialRow({ testimonials }: TestimonialRowProps) {
  const firstRowTestimonials = testimonials.slice(
    0,
    Math.ceil(testimonials.length / 2),
  );
  const secondRowTestimonials = testimonials.slice(
    Math.ceil(testimonials.length / 2),
  );

  return (
    <div className="relative mt-6 flex max-w-6xl justify-center overflow-hidden px-4 sm:mt-8 sm:px-6 md:mt-12 md:px-8">
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-black to-transparent sm:w-12 md:w-16"></div>
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r from-black to-transparent sm:w-12 md:w-16"></div>

      <div className="flex w-full flex-col gap-6">
        <div className="scroll-left flex w-fit">
          {[...firstRowTestimonials, ...firstRowTestimonials].map(
            (testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                name={testimonial.name}
                function={testimonial.function}
                img={testimonial.img}
                feedback={testimonial.feedback}
              />
            ),
          )}
        </div>

        <div className="scroll-right flex w-fit">
          {[...secondRowTestimonials, ...secondRowTestimonials].map(
            (testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                name={testimonial.name}
                function={testimonial.function}
                img={testimonial.img}
                feedback={testimonial.feedback}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
