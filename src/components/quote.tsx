import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"

import { quotes } from "@/data/quotes"

export default function Quote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    const time = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`

    return (
        <div className="flex flex-row items-end gap-5">
            <Avatar>
                <AvatarImage src="/jason-statham.jpg" />
                <AvatarFallback>JS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <div className="text-xs flex flex-row gap-2">
                    <span className="font-medium">Джейсон Стетхем</span>
                    <p>{time}</p>
                </div>
                <p className="p-2 bg-neutral-100 rounded-lg text-md italic">{quote}</p>
            </div>
        </div>
    )
}