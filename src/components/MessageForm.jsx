import { useState } from "react";
import InputComponent from "./InputComponent";
import FeedBackMessageComponent from "./FeedBackMessageComponent";

function MessageForm() {
    const [statusCode, setStatusCode] = useState(null);

    const [formData, setFormData] = useState({
        instanceId: "",
        instanceToken: "",
        clientToken: "",
        phone: "",
        messageType: "text",
    });

    async function fetchBase64(){
        const response = await fetch("/AudioTxt.txt");
        return await response.text();
    }


    async function request(endpoint, instanceId, instanceToken, clientToken, number, body){
        const response = await fetch(`https://api.z-api.io/instances/${instanceId}/token/${instanceToken}${endpoint}`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Client-Token": `${clientToken}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        console.log(data)
        return{ 
            status: response.status,
            data 
        };
    }


    async function sendMessage(type, number, instanceId, instanceToken, clientToken){
        let data;

        switch(type){
            case "text":
                data = await request("/send-text", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "message": "You have been mogged"
                    }
                )

                break;
            case "audio":
                data = await request("/send-audio", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "audio": `data:audio/mp3;base64,${await fetchBase64()}`
                    }
                )  
                await request("/send-text", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "message": "You have been mogged by audio"
                    }  
                )
                break;
            case "image":
                data = await request("/send-image", instanceId, instanceToken, clientToken, number, 
                    {
                        "phone": `${number}`,
                        "image": "https://i.scdn.co/image/ab67616d0000b273e7eb9716e4fbee97553083d0",
                        "caption": "This image mogged you"
                    }
                ) 
                break;       
        }

        return data.status
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="mt-12 w-full bg-slate-900 border-4 border-white shadow-[10px_10px_0_black] p-10">
            <h2 className="font-terminal text-4xl text-green-400 tracking-[0.25em] text-center mb-10">
                CONFIGURATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Instance ID */}
                
                <InputComponent labelName={"INSTANCE ID"} value={formData.instanceId} onChange={handleChange} name={"instanceId"}/>


                {/* Instance Token */}
                 
                <InputComponent labelName={"INSTANCE TOKEN"} value={formData.instanceToken} onChange={handleChange} name={"instanceToken"}/>

                {/* Client Token */}
                
                <InputComponent labelName={"CLIENT TOKEN"} value={formData.clientToken} onChange={handleChange} name={"clientToken"}/>


                {/* Recipient */}
                
                <InputComponent labelName={"RECIPIENT NUMBER"} value={formData.number} onChange={handleChange} name={"phone"}/>


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
                    onClick={async () => {
                        
                        if (
                            !formData.instanceId.trim() ||
                            !formData.instanceToken.trim() ||
                            !formData.clientToken.trim() ||
                            !formData.phone.trim()
                        ) {
                            alert("Preencha todos os campos.");
                            return;
                        }
                        
                        const status = await sendMessage(formData.messageType, formData.phone, formData.instanceId, formData.instanceToken, formData.clientToken);
                        setStatusCode(status);
                        console.log(status)
                    }}
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
                
                <FeedBackMessageComponent
                    open={statusCode !== null}
                    statusCode={statusCode}
                    onClose={() => setStatusCode(null)}
                />
            </div>
        </div>
    );
}

export default MessageForm;