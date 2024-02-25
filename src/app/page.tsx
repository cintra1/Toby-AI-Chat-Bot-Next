import { Chat } from "@/components/Chat";
import { Message } from "@/components/Message";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-secondary items-center justify-center flex-col gap-3">
      <Chat />
      
    </div>
  );
}
