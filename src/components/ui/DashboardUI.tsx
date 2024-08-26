import {
  Command,
  Copy,
  Crown,
  Disc2,
  Ellipsis,
  MessageCircleMore,
  MicOff,
  Phone,
  Search,
  VideoOff,
} from "lucide-react";
import Logo from "../Logo";
import { profile1, user1, user2, user3, user4, user5 } from "../../assets";
import SummaryCard from "./SummaryCard";
import MessageCard from "./MessageCard";

const users = [
  {
    name: "Joy Umeh",
    image: user2,
  },
  {
    name: "Ukamaka",
    image: user3,
  },
  {
    name: "Ndu Samuel",
    image: user4,
  },
  {
    name: "Alima James",
    image: user5,
  },
];

const buttons = [
  {
    icon: MicOff,
    isActive: false,
  },
  {
    icon: VideoOff,
    isActive: false,
  },
  {
    icon: Disc2,
    isActive: false,
  },
  {
    icon: Copy,
    isActive: false,
  },
  {
    icon: MessageCircleMore,
    isActive: true,
  },
  {
    icon: Ellipsis,
    isActive: false,
  },
];
const DashboardUI = () => {
  return (
    <div className="bg-background rounded-2xl shadow-card-inset">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2 p-4 rounded-t-2xl bg-secondary border-b border-white/10 shadow-card-inset">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="inline-block h-[100%] w-0.5 self-stretch bg-white/10" />
        <h2 className="hidden lg:block text-sm">
          OneMeet is the best platform for video conference
        </h2>

        <div className="flex items-center rounded-lg bg-accent px-2 border border-white/10">
          <div className="flex items-center text-sm text-primary">
            <Command size={14} /> + L
          </div>
          <input
            type="text"
            placeholder="Search message"
            className="p-2 w-full flex-1 bg-transparent text-white border-none outline-none"
          />
          <Search size={18} className="text-muted cursor-pointer" />
        </div>

        <div className="flex items-center gap-1">
          <div className="rounded-profile">
            <img src={profile1} alt="" />
          </div>
          <div>
            <h3 className="text-sm">Mary Eze</h3>
            <div className="flex items-center gap-1">
              <Crown size={14} className="text-orange-400" />
              <p className="text-sm text-muted">Verified</p>
            </div>
          </div>
        </div>
      </div>
      {/* End top bar */}

      {/* Main Content */}
      <div className="flex flex-grow p-4 flex-col items-center min-[900px]:flex-row min-[900px]:justify-between">
        {/* Video section */}
        <div className="flex-1 w-full md:p-6">
          <div className="relative flex items-center justify-center bg-accent rounded-2xl shadow-card h-50 lg:h-96 overflow-hidden">
            <div className="absolute top-4 right-4 z-10 py-2 px-4 bg-secondary/50 backdrop-blur-3xl rounded-lg text-xs">
              Mr Adinuba
            </div>
            <img src={user1} alt="Presenter" className="h-full w-full" />
            <div className="absolute bottom-4 z-10 w-full flex items-center justify-center">
              <p className="py-2 px-3 max-w-[90%] bg-secondary/50 backdrop-blur-3xl rounded-lg text-xs line-clamp-2">
                This meeting is focusing on how to get Mr Adinuba youtube to 20k
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-4">
            {users.map((user) => (
              <div
                className="relative rounded-2xl overflow-hidden"
                key={user.image}
              >
                <div className="overflow-hidden h-fit lg:h-[150px]">
                  <img src={user.image} alt={user.name} />
                </div>
                <div className="absolute bottom-2 w-full flex items-center justify-between px-2">
                  <div className="rounded-icon bg-red-500 hover:bg-red-700 transition-all cursor-pointer">
                    <MicOff size={14} />
                  </div>
                  <p className="p-2 bg-secondary/50 backdrop-blur-3xl rounded-lg text-xs">
                    {user.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-col gap-5 mt-6 lg:flex-row">
            <div className="flex items-center gap-3">
              {buttons.map((button, index) => (
                <div
                  className={`rounded-icon border border-white/10 hover:bg-primary/30 cursor-pointer transition-all ${
                    button.isActive && "bg-primary"
                  }`}
                  key={index}
                >
                  <button.icon size={14} />
                </div>
              ))}
            </div>
            <button className="btn flex bg-red-600 hover:bg-red-700 hover:text-white shadow-card-inset items-center gap-1 text-xs">
                <Phone size={13}/> Leave call
            </button>
          </div>
        </div>
        {/* End video section */}
        
        {/* Sidebar */}
        <div className="w-full sm:w-80">
            {/* Summary section */}
            <SummaryCard className="my-5 left-10 rotate-12 hover:rotate-0 hover:left-0"/>
            {/* Summary section end */}

            {/* Message section */}
            <MessageCard className="mt-8"/>
            {/* Message section end */}
        </div>
        {/* Sidebar end */}
      </div>
      {/* End main Content */}
    </div>
  );
};

export default DashboardUI;
