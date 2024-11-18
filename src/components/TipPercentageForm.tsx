import {Dispatch, SetStateAction} from "react";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageProps = {
    setTip: Dispatch<SetStateAction<number>>
}

const TipPercentageForm = ({setTip}: TipPercentageProps) => {
    return (
        <div>
            <h3 className='font-black text-2xl my-3'>Propina</h3>
            <form>
                {tipOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3" style={{marginBottom: '10px'}}>
                        <label htmlFor={option.id}>{option.label}</label>
                        <input type="radio" id={option.id} name="tip" value={option.value}
                               onChange={(e) => setTip(+e.target.value)}/>
                    </div>
                ))}

            </form>
        </div>
    )
}
export default TipPercentageForm
