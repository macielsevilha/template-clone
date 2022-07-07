import Image from "../../node_modules/next/image"

export default function Column({ heading, message, button, images}) {
    return (
        <div className="">
            <div className="">
                <div className=" bg-stone-200 m-3 col-span-4">
                    <div>
                        <Image src={`/${images}`} width="1000%" height="650%"  />
                    </div>
                    <div className="p-3">
                    <h4 className="text-stone-600 text-2xl font-bold mb-3 mt-3 text-center">{ heading }</h4>
                    <p className="text-md text-slate-600 font-thin text-sm">{ message }</p>
                    <div className="flex justify-center my-5">
                        <button className="rounded-xl px-8 py-2 text-slate-500"> {button} </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}