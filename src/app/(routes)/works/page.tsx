import { Transition } from "@/components/Transition/Transition";
import { Cover } from './Cover'
import { Work } from "@/components/Work";


export default function WorksPage() {
    return (
        <div>
            <Transition />
            <Work />
            <Cover />
        </div>
    )
}
