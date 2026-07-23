import { useNavigate } from "react-router-dom";
import MainTitle from "../components/MainTitle";
import MessageForm from "../components/MessageForm";
import { ChevronsLeft } from "lucide-react";


function MenuPage(){
    const navigate = useNavigate()
    return(
        <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center p-10">
            <div className="
                    fixed
                    inset-0
                    pointer-events-none
                    opacity-10
                    bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,.08)_51%)]
                    bg-[length:100%_4px]
                "/>

            <div className="max-w-4xl w-full space-y-7 text-center relative z-10">
                <div className="relative mb-8">
                    <button
                        onClick={() => navigate("/")}
                        className="
                            fixed
                            left-8
                            top-[60px]
                            z-50
                            px-5 py-1
                            bg-slate-700
                            border-4 border-white
                            text-white
                            transition-transform duration-100
                            hover:bg-green-500
                            hover:shadow-[6px_6px_0_black]
                            hover:scale-105
                            active:scale-95
                        "
                    >
                        <ChevronsLeft />
                    </button>

                    <MainTitle />

                </div>
      

                <MessageForm/>


            </div>
        </div>
    )
}

export default MenuPage