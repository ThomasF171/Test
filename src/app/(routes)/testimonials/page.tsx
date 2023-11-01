import { Transition } from "@/components/Transition/Transition";
import { Cover } from './Cover'
import { Testimonial } from "@/components/Testimonials";

export default function TestimonialsPage() {
    return (
        <div>
            <Transition />
            <Testimonial />
            <Cover />
        </div>
    )
}
