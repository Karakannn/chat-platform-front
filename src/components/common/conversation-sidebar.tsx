import { ConversationType } from "@/lib/types";
import { Button } from "../ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import useDialog from "@/hooks/dialogs";

type Props = {
  conversations: ConversationType[];
};
export default function ConversationSidebar({ conversations }: Props) {
  const navigate = useNavigate();
  const { createDialog } = useDialog();

  return (
    <div className="h-screen w-[350px] border-r">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Conversations</h2>
        <Button
          variant={"outline"}
          onClick={() => {
            createDialog({ name: "create-conversation" });
          }}
          size={"icon"}
        >
          <Pencil1Icon />
        </Button>
      </div>

      <div className="space-y-2">
        {conversations.map((conversation) => (
          <div onClick={() => navigate("/conversations/" + conversation.id)} key={conversation.id} className="p-4 hover:bg-gray-100 cursor-pointer">
            <h3 className="text-lg font-semibold">{conversation.name}</h3>
            <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
