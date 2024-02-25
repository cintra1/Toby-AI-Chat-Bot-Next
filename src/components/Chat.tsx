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
        
  
        </ScrollArea>
        </CardContent>
        <CardFooter>
            <form className="w-full flex gap-2" >
                <Input placeholder="Como posso te ajudar?" />
                <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    )
}