type MessageProps = {
    message: string
    name: string
    age: number
    isOldEnough: boolean
}

const Message = (props: MessageProps) => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1>
                {
                    props.isOldEnough ? "Old enough" : "Not old enough"
                }
            </h1>
            <h2 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-purple-800 shadow-2xl bg-slate-500">{props.name}</h2>
            <p>{props.message}</p>
            <p>{props.age}</p>
        </div>
    )
}
export default Message