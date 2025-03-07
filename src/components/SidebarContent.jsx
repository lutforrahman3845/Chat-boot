import useChat from "@/hooks/useChat";
import Image from "next/image";
import { GiUpgrade } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";
const SidebarContent = ({ setMenuOpen, setNewChat }) => {
  const { chatSessions, loadChat, startNewChat } = useChat();
  return (
    <div>
      <div className="flex items-center gap-2 relative">
        <Image
          src="/assets/logo.png"
          width={36}
          height={36}
          alt="Logo"
          className="rounded-full dark:bg-white"
        />
        <h4 className="text-xl font-semibold font-roboto dark:text-white">
          Chat Bot
        </h4>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-0 md:hidden"
        >
          <IoMdClose className="size-6 dark:fill-white" />
        </button>
      </div>
      <button
        onClick={() => {
          setNewChat(true);
          startNewChat();
        }}
        className="flex items-center justify-center gap-3 py-2 px-2 border border-gray-500 mt-4 dark:text-white font-roboto font-medium rounded-md w-full max-w-48 mx-auto cursor-pointer mb-4"
      >
        <RiChatNewLine className="size-5 dark:fill-white" />
        New Chat
      </button>
      {chatSessions.length <= 0 ? (
        <p className="text-sm text-gray-500 font-semibold mb-4 font-roboto">Chat not yet</p>
      ) : (
        <div>
          <p className="text-sm text-gray-800 dark:text-white font-semibold mb-4 font-roboto">Histroy :</p>
          {chatSessions.map((chat) => (
            <button
              key={chat.id}
              onClick={() => loadChat(chat.id)}
              className="  py-1 px-3  dark:text-white block font-medium font-roboto"
            >
              {chat.name}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-start justify-center gap-3 py-2 px-3 mt-4 dark:text-white font-roboto font-medium rounded-md w-full max-w-52 mx-auto cursor-pointer mb-4 absolute bottom-4 hover:border hover:border-gray-500">
        <GiUpgrade className="size-5 dark:fill-white p-1 border rounded-full mt-2" />
        <p>
          Upgrade Plan{" "}
          <span className="block text-xs text-gray-600 dark:text-gray-400">
            access to the best version
          </span>
        </p>
      </div>
    </div>
  );
};

export default SidebarContent;
