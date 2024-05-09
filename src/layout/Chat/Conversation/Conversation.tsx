/** @format */

import Recieve_Chat from "./Chat_Sender_Reciever/Recieve_Chat";
import Send_Chat from "./Chat_Sender_Reciever/Send_Chat";

export default function Conversation() {
  return (
    <main className='absolute w-full h-full pb-10 px-4 flex flex-col gap-4 pt-4 overflow-y-scroll -z-10'>
      <Recieve_Chat />
      <Send_Chat />
      <Recieve_Chat />
      <Send_Chat />
    </main>
  );
}
