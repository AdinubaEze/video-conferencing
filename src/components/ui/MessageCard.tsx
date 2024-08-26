import { ArrowRightToLine } from "lucide-react";
import { user2, user3, user4 } from "../../assets";

interface IProps {
  className?: string;
}
const messages = [
  {
    name: "Joy Umeh",
    image: user2,
    message: "Can you hear me guys? I reconnected before",
    time: "08:45",
  },
  {
    name: "Ukamaka",
    image: user3,
    message: "Yes I can hear you, we can start now",
    time: "08:45",
  },
  {
    name: "Alima James",
    image: user4,
    message: "Let's start! This meeting, cause we are running out of time",
    time: "08:45",
  },
];
const MessageCard = ({ className }: IProps) => {
  return (
    <div
      className={`relative bg-secondary p-4 border border-white/10 rounded-2xl overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2">Messages</h3>
        <ArrowRightToLine size={15} />
      </div>

      <div className="p-4 pb-11 rounded-md space-y-4 h-48 overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {messages.map((message) => (
          <div
            className="space-x-2 max-w-fit py-2 px-3 bg-accent/70 hover:bg-accent rounded-lg"
            key={message.image}
          >
            <div className="flex items-center gap-2">
              <div className="rounded-profile-small">
                <img src={message.image} alt="" />
              </div>
              <h3 className="text-sm">{message.name}</h3>
              <p className="text-xs text-muted ml-auto">{message.time}</p>
            </div>
            <p className="text-xs mt-2 text-muted">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCard;
