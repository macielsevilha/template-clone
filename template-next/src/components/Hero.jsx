export default function Hero({heading, message}) {
    return (
        <div className="custom-img h-[35rem] bg-fixed bg-left-bottom bg-no-repeat bg-cover">
            {/* Overlay */}
            <div className="flex justify-center items-center h-full">
                <div className="text-center text-slate-200">
                    <h1 className="text-6xl font-medium">{ heading }</h1>
                    <p className="text-md">{ message }</p>
                </div>
            </div>
        </div>
    )
}