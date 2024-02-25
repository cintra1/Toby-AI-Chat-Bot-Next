import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { useChat } from 'ai/react';
import { ScrollArea } from "./ui/scroll-area"
import { ModeToggle } from "./ModeToggle"


export interface MessageProps {}

export function Message() {

    return (
        <Card className="w-[440px] bg-redded border-bored text-white text-xs pl-5 pr-5 pt-3 pb-3">
            <h1>Para o Chat Bot funcionar é necessário pagar a assinatura da OpenAI, por esse motivo o Toby AI 
                no momento está desligado.
        </h1>
      </Card>
    )
}