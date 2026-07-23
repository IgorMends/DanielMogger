import { useState } from "react";

function MessageForm() {
    const [formData, setFormData] = useState({
        instanceId: "",
        instanceToken: "",
        clientToken: "",
        phone: "",
        messageType: "text",
    });

    async function request(endpoint, instanceId, instanceToken, clientToken, number, body){
        const response = await fetch(`https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/${endpoint}`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Client-Token": `${clientToken}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        console.log(data)
        return await response.json();
    }

    async function sendMessage(type, number, instanceId, instanceToken, clientToken){
        switch(type){
            case "text":
                await request("/send-text", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "message": "You have been mogged"
                    }
                )
                break;
            case "audio":
                await request("/send-audio", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "audio": "commingSoon"
                    }
                )
                break;
            case "image":
                await request("/send-image", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "image": "commingSoon"
                    }
                ) 
                break;       
        }
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div
            className="
                mt-12
                w-full
                bg-slate-900
                border-4 border-white
                shadow-[10px_10px_0_black]
                p-10
            "
        >
            <h2
                className="
                    font-terminal
                    text-4xl
                    text-green-400
                    tracking-[0.25em]
                    text-center
                    mb-10
                "
            >
                CONFIGURATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Instance ID */}
                <div>
                    <label
                        className="
                            block
                            mb-3
                            font-terminal
                            text-xl
                            tracking-widest
                            text-green-400
                        "
                    >
                        INSTANCE ID
                    </label>

                    <input
                        type="text"
                        name="instanceId"
                        value={formData.instanceId}
                        onChange={handleChange}
                        placeholder="Instance ID"
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

                {/* Instance Token */}
                <div>
                    <label
                        className="
                            block
                            mb-3
                            font-terminal
                            text-xl
                            tracking-widest
                            text-green-400
                        "
                    >
                        INSTANCE TOKEN
                    </label>

                    <input
                        type="text"
                        name="instanceToken"
                        value={formData.instanceToken}
                        onChange={handleChange}
                        placeholder="Instance Token"
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

                {/* Client Token */}
                <div>
                    <label
                        className="
                            block
                            mb-3
                            font-terminal
                            text-xl
                            tracking-widest
                            text-green-400
                        "
                    >
                        CLIENT TOKEN
                    </label>

                    <input
                        type="text"
                        name="clientToken"
                        value={formData.clientToken}
                        onChange={handleChange}
                        placeholder="Client Token"
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

                {/* Recipient */}
                <div>
                    <label
                        className="
                            block
                            mb-3
                            font-terminal
                            text-xl
                            tracking-widest
                            text-green-400
                        "
                    >
                        RECIPIENT NUMBER
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="5511999999999"
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

                {/* Message Type */}
                <div className="md:col-span-2">
                    <label
                        className="
                            block
                            mb-3
                            font-terminal
                            text-xl
                            tracking-widest
                            text-green-400
                        "
                    >
                        MESSAGE TYPE
                    </label>

                    <select
                        name="messageType"
                        value={formData.messageType}
                        onChange={handleChange}
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
                    >
                        <option value="text">📝 TEXT</option>
                        <option value="audio">🎵 AUDIO</option>
                        <option value="image">🖼 IMAGE</option>
                    </select>
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <button
                    onClick={() => {(sendMessage(formData.messageType,
                                                formData.phone,
                                                formData.instanceId,
                                                formData.instanceToken,
                                                formData.clientToken))}}
                    className="
                        font-terminal
                        text-2xl
                        tracking-widest

                        px-12
                        py-4

                        bg-slate-700
                        border-4 border-white

                        text-white

                        transition-all
                        duration-200

                        hover:bg-green-500
                        hover:-translate-y-1
                        hover:scale-105
                        hover:shadow-[8px_8px_0_black]

                        active:translate-y-1
                        active:shadow-none

                        cursor-pointer
                    "
                >
                    SEND MESSAGE
                </button>
            </div>
        </div>
    );
}

export default MessageForm;