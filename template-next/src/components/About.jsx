import Image from "next/image";

export default function AboutUs({ heading, message, name, color, image }) {
    return (
        <div className="flex justify-center">
            <div className="w-full mt-5  md:mx-3">
                <div className="md:w-[100%] mx-4 bg-stone-100">

                    <div  className="flex justify-center">
                        <Image alt={image} src={`/${image}`} width="1000%" height="550px" objectFit='cover' />

                    </div>
                    <div className="p-4">
                        <h2 className={`text-${color}-600 text-2xl font-bold mb-2`}>{heading}</h2>
                        <p className="text-md text-slate-600 font-thin text-sm">{message}</p>
                        <div className="flex justify-center my-5">
                            <button className={`bg-${color}-600 px-6 py-2 rounded-lg text-slate-100`}>{name}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
