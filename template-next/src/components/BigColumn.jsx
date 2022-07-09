import Image from "next/image"

export default function BigColumn({ image, heading, messageOne, messageTwo, button }) {
    return (
        <div className="bg-stone-200">
            <div>
                <Image src={`/${image}`} width="2000%" height="800%" objectFit="cover" />
            </div>
            <div className="p-5">
                <h4 className="text-stone-600 text-2xl font-bold mb-3 mt-3">{heading}</h4>
                <p className="text-md pb-5 text-slate-600 font-thin text-sm">{messageOne}</p>
                <p className="text-md text-slate-600 font-thin text-sm">{messageTwo}</p>
            </div>
            <div className="px-5 my-5 pb-5">
                <button className="rounded-xl px-6 py-3 text-slate-500"> {button} </button>
            </div>
        </div>
    )
}