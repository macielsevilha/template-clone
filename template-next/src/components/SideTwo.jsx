import Image from "../../node_modules/next/image"

export default function SlideTwo({ image, heading,  messageOne, messageTwo,  button }) {
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
                   <p>{ messageTwo }</p>
                </div>
                <div className="m-4 text-center">
                     <button className="px-8 py-2 bg-white border border-zinc-400 rounded-lg mb-10">{ button }</button>
                 </div>
             </div>
         </div>
     </div>
    )
}
