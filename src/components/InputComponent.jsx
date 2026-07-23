function InputComponent(props){
    return(
        <div>
            <label
                className="block mb-3 font-terminal text-xl tracking-widest text-green-400
                "
            >
                {props.labelName}
            </label>

            <input type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.labelName}
                className="
                    w-full
                    px-4
                    py-3

                    bg-slate-800
                    border-4 border-white

                    font-pixel
                    text-white

                    outline-none

                    transition-all
                    duration-200

                    focus:border-green-400
                    focus:bg-slate-700
                    focus:shadow-[5px_5px_0_black]
                "
            />
        </div>
    )
}

export default InputComponent