import "@fontsource/press-start-2p";
import "@fontsource/pixelify-sans";
import "@fontsource/vt323";
import StartComponent from "./components/StartComponent";
import MainTitle from "./components/MainTitle";


function App(){
    

    return(
         <div className="relative w-full min-h-screen overflow-y-scroll bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center p-10">
            <div className="
                    fixed
                    inset-0
                    pointer-events-none
                    opacity-10
                    bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,.08)_51%)]
                    bg-[length:100%_4px]
                "/>

            <div className="max-w-4xl w-full space-y-7 text-center relative z-10">
                
                <MainTitle />        

                <StartComponent />

                <p className="font-terminal text-3xl text-green-400">
                    Press START<span className="animate-pulse">_</span>
                </p>

                <p className="text-white font-pixel">
                This is a website developed for learning React and TailwindCSS using the Z-API together.
                </p>
            </div>
        </div>
    )
}

export default App