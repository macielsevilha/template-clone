export default function({ heading, message }) {
    return (
        <div className="text-center px-7 text-slate-100 font-bold">
            <h3 className="text-4xl"> { heading } </h3>
            <p> { message } </p>
        </div>
    )
}