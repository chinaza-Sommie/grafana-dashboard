


// Define a TypeScript interface for our API response
interface AddEventServicesProp {
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    placeholder?: string;
}

function EventInputUI({value, type, onChange, name, placeholder }: AddEventServicesProp) {

    return (
        <input type={type}
            placeholder={placeholder}
            className='rounded'
            value={value}
            name={name}
            onChange={onChange}/>
    );
}

export default EventInputUI;