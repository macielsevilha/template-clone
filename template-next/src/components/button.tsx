
interface ButtonProps {
  cor?: 'red' | 'green' | 'gray',
  className?: string
  children: any
  onClick?: () => void
}

export default function buttons(props: ButtonProps) {
   return (
    <button className={props.className}>
        {props.children}
    </button>
   )
}