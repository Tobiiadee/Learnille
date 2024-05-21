/** @format */

import Card from "@/components/ui/Card/Card";
import Recieve_Chat from "@/layout/Chat/Conversation/Chat_Sender_Reciever/Recieve_Chat";
import Send_Chat from "@/layout/Chat/Conversation/Chat_Sender_Reciever/Send_Chat";

export default function Session_Conversation() {
  return (
    <Card>
      <section>
        <h2 className='text-sm font-semibold text-black border-b pb-2'>
          Conversations (<span>40</span>)
        </h2>
      </section>
      <div>
        <Recieve_Chat />
        <Send_Chat />
      </div>
    </Card>
  );
}
