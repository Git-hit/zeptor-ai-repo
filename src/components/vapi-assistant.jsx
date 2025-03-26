import Vapi from "@vapi-ai/web";
import { Phone, X } from "lucide-react";
import { useState } from "react";

export default function VAPI() {
    const [isVapiOn, setIsVapiOn] = useState(false);
    const vapi = new Vapi(`62d1de6c-e6b8-4b11-afcb-cbadcb1515fe`);

    async function call() {
        setIsVapiOn(true);
        const start = await vapi.start(`69452e5c-78e2-46ca-a34c-a373e8446453`);
    }

    async function stop() {
        const end = vapi.stop();
        setIsVapiOn(false);
    }

    vapi.on('call-end', () => {
        vapi.say("It's been great! Meet you next time.", true);
    });

    vapi.on('error', (e) => {
        vapi.say("Sorry! I couldn't catch up.", false);
    });

    return (
        <div onClick={() => isVapiOn ? stop() : call()} className="fixed bottom-10 right-14 size-14 flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-150 rounded-full bg-green-light">
            {isVapiOn ? <X /> : <Phone />}
        </div>
    )
}