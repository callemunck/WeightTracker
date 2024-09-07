type CounterProps = { 
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: React.ReactNode
}

const Counter = ({ setCount, children}: CounterProps) => {
    
    return (
        <div>
            <h4>{children}</h4>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    )
    }
export default Counter
