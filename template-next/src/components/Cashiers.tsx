import Images from "./images"

interface CashierTopProps {
  green: 'green'
  subTitle: string
  text: string
}

export default function CashierTop(props: CashierTopProps) {
    return (
        <div className={`
          w-60 bg-slate-300
        `}>
            <div>
                <Images />
            </div>
                <div className={`
                p-4 
                `}>
                    <h2 className={`text-${props.green}-500`}>{ props.subTitle }</h2>
                    <p>{ props.text }</p>
                </div>
        </div>
    )
}