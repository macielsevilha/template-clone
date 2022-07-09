import Image from "next/image";

export default function Form({ heading, message, button}) {
    return (
       <div>
          <div>
            <h5 className="text-slate-100 text-3xl font-medium text-center pt-20 pb-7 ">{ heading }</h5>
            <form className="mx-4" action="">
               <div className="text-center bg-white bg-opacity-40 p-4 rounded-lg">
               <label htmlFor="messag">{ message }</label>
               </div>
             <div className="md:flex mt-5">
             <div className="max-w-full w-[50%] md:pr-3">
                <input className="md:w-[100%] w-[199%] bg-white bg-opacity-40 rounded-lg py-2 my-2" type="text" placeholder="name" />
                <input className="md:w-[100%] w-[199%] bg-white bg-opacity-40 rounded-lg py-2 my-2" type="email" placeholder="Email" />
                <input className="md:w-[100%] w-[199%] bg-white bg-opacity-40 rounded-lg py-2 my-2" type="text" placeholder="Subject" />
            
              </div>
              <div className="max-w-full md:w-[50%] md:pl-3 position">
              <input className="max-w-full md:w-[100%] w-[199%] bg-white bg-opacity-40 rounded-lg py-[65px] my-2" type="text" placeholder="Your message here...." />
              </div>
             </div>
             <div className="px-5 my-5 pb-5">
                <button className="rounded-xl px-9 py-3 hover:bg-slate-300 hover:text-slate-900 hover:border-slate-900 text-slate-300 bg-zinc-900 border border-zinc-200"> {button} </button>
            </div>
            </form>
          </div>
       </div>
       
    )
}