type Props = {
    type: string;
    placeholder: string;
}

export default function DataBox({type, placeholder}: Props){
    return (
        <>
            <input type={type} placeholder={placeholder} className="
                w-[500px] px-4 py-2 border border-gray outline-none rounded-lg text-[#888] text-[15px] font-display
            "/>
        </>
    )
}