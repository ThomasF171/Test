import { Services } from "@/components/Services/Services";
import { Transition } from "@/components/Transition/Transition";
import { Cover } from "./Cover";


export default function page() {
    return (
        <div>
            <Transition />
            <Services />
            <Cover />
        </div>
    )
}
