type Props = {
    text: string;
};

export default function Title({text}: Props) 
{
    return(
        <h1 className="font-display text-[40px] font-bold">{text}</h1>
    )
}