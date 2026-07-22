function StartComponent() {
    return (
        <div className="flex justify-center">
            <button
                className="
                    font-terminal
                    text-6xl
                    px-10
                    py-5

                    bg-slate-700
                    border-4 border-white

                    text-white

                    transition-all
                    duration-200

                    hover:bg-red-500
                    hover:scale-105
                    hover:shadow-[6px_6px_0_black]
                    active:translate-y-1
                "
            >
                ▶ START
            </button>
        </div>
    );
}

export default StartComponent