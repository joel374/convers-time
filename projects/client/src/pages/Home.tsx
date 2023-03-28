import { Helmet } from "react-helmet"
import ChatItems from "../components/ChatItems"
const Home = () => {

    return <div className="bg-slate-800 h-screen text-gray-300 p-3">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Convers Time</title>
        </Helmet>
        <div className="flex  border-slate-700 border-2 rounded-lg h-full">

            {/* Left */}
            <div className="p-2 w-1/3  border-r-2 border-slate-700 overflow-y-hidden">
                <div className="text-2xl p-3 font-semibold mb-4 ">Chat</div>
                <div className="overflow-y-auto h-full">
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                    <ChatItems />
                </div>
            </div>

            {/* Right */}
            <div className="w-full">
                <div className="flex  p-4 border-b-2 border-slate-700">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white ml-2" />
                    <div className="ml-4 flex items-center">Nama Pengguna</div>
                </div>
            </div>
        </div>
    </div>
}

export default Home