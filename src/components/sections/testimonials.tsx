import { Container } from "@/components/ui/container";

const testimonials = [
  {
    content:
      "The AI agents have transformed our customer support operations. We're now able to provide 24/7 support with faster response times and higher customer satisfaction.",
    author: "Sarah Johnson",
    role: "Customer Support Manager",
    company: "TechCorp Inc.",
  },
  {
    content:
      "Implementing the data analyst agent has given us insights we never knew existed in our data. It's like having a team of data scientists working around the clock.",
    author: "Michael Chen",
    role: "Chief Data Officer",
    company: "DataDrive Solutions",
  },
  {
    content:
      "The content creator agent has revolutionized our marketing efforts. We're producing more high-quality content with less effort, and our engagement metrics have never been better.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthMedia",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            Trusted by Innovative Companies
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            See what our customers are saying about our AI agents platform.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
            >
              <div>
                <div className="flex gap-1 text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  "{testimonial.content}"
                </div>
              </div>
              <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-700">
                <div className="font-medium text-neutral-900 dark:text-neutral-100">
                  {testimonial.author}
                </div>
                <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 