'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { useChat } from 'ai/react';
import { ScrollArea } from "./ui/scroll-area"
import { ModeToggle } from "./ModeToggle"


export interface ChatProps {}

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <Card className="w-[440px]">
        <CardHeader className="grid grid-cols-8">
          <div className="mt-2">
          <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="toby.png"/>
                  </Avatar>
          </div>
          <div className="col-span-6 ml-1">
            <CardTitle className="mb-2">Toby AI</CardTitle>
            <CardDescription>Chat Bot criado com Vercel SDK.</CardDescription>
          </div>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
            { messages.map(message => {
                return(
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                 {message.role === 'user' && (
                    <Avatar>
                    <AvatarFallback>User</AvatarFallback>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/101955322?v=4"/>
                  </Avatar>
                 )}

                {message.role === 'assistant' && (
                    <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="toby.png"/>
                  </Avatar>
                 )}

                
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário' : 'Toby'}:</span>
                  {message.content}
                </p>
              </div>
              )
            })}
        </ScrollArea>
        </CardContent>
        <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange}/>
                <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    )
}