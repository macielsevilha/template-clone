
export default function AboutUs({ heading, message, name, color, image}) {
  return (
    <div >
      <div className="flex bg-stone-100 w-80 m-3">
        <div className="">
          <img src={image} alt="" />
          <h2>{heading}</h2>
          <p>{message}</p>
         <button>{ name }</button>
        </div>
      </div>
    </div>
  );
}
