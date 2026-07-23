function FeedBackMessageComponent(props){

    if (!props.open) {
        return null;
    }

    if(props.statusCode >= 300 || props.statusCode < 200){
        return(
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="w-[500px] bg-slate-900 border-4 border-white shadow-[10px_10px_0_black] p-8 text-center">
                    <div className="text-6xl mb-6">❌</div>

                    <h2 className=" font-terminal text-3xl tracking-[0.2em] text-red-400 mb-6">
                        FAILED
                    </h2>

                    <p className="font-pixel text-white text-xl mb-8">
                        Message failed, please try again!
                    </p>

                    <button
                        onClick={props.onClose}
                        className="
                            px-8
                            py-3
                            bg-slate-700
                            border-4 border-white
                            text-white
                            font-terminal
                            tracking-widest
                            hover:bg-green-500
                            hover:shadow-[5px_5px_0_black]
                            transition-all
                        "
                    >
                        OK
                    </button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="w-[500px] bg-slate-900 border-4 border-white shadow-[10px_10px_0_black] p-8 text-center">
                    <div className="text-6xl mb-6">✅</div>

                    <h2 className=" font-terminal text-3xl tracking-[0.2em] text-green-400 mb-6">
                        SUCCESS
                    </h2>

                    <p className="font-pixel text-white text-xl mb-8">
                        Message sent successfully!
                    </p>

                    <button
                        onClick={props.onClose}
                        className="
                            px-8
                            py-3
                            bg-slate-700
                            border-4 border-white
                            text-white
                            font-terminal
                            tracking-widest
                            hover:bg-green-500
                            hover:shadow-[5px_5px_0_black]
                            transition-all
                        "
                    >
                        OK
                    </button>
                </div>
            </div>
        )
    }
}

export default FeedBackMessageComponent