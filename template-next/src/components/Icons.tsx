


 async function onClick() {
  await alert()
}


export default function Icons(props) {
  return (
    <div onClick={props.onClick}  className={`
    bg-slate-700 fixed right-0 
      hidden rounded cursor-pointer
    `}>
      <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 50 50" width="30px" height="50px"><path
       d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0
       27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5
       L 50 37.5 Z"/></svg>
    </div>
  )
}