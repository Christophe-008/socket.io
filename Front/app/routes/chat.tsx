import ChatPage from "../pages/chat/chat";
import type { Route } from "./+types/chat";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "My Chat" },
        { name: "description", content: "Welcome to Chat!" },
    ];
}

export default function Chat() {
    return <ChatPage />;
}
