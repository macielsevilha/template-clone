import Image from "next/image"

export default function SlideOne({ image, heading,  messageOne, messageTwo, }) {
    return (
        <div className="w-full mt-5 mx-3">
        <div className="md:w-[100%]  bg-stone-100">
        <div className="">
           <Image src={`/${image}`} width="1000%" height="550px" objectFit='cover' />
        </div>
        <div className="px-5">
            <h2 className="text-slate-500 text-2xl font-bold mb-7 mt-3 text-center">{ heading }</h2>
           <div className="text-md text-slate-600 font-thin text-sm">
              <p className="mb-4">{ messageOne }</p>
              <p className="pb-10">{ messageTwo }</p>
           </div>
        </div>
    </div>
    </div>
    )
}
