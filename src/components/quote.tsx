import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"

import { quotes } from "@/data/quotes"

import { QuoteIcon } from "lucide-react"

export default function Quote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <div className="flex flex-row gap-5">
            <Avatar>
                <AvatarImage src="/jason-statham.jpg" />
                <AvatarFallback>JS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <div className="text-xs font-medium">Джейсон Стетхем</div>
                <p className="p-2 bg-neutral-100 rounded-lg text-md italic">{quote}</p>
            </div>
        </div>
    )
}