export function Input ({placeholder, value, onChange}) {
    return (
        <div className="mt-2">
            <input 
                type="text"
                className="form-input border-gray-300 p-2 w-full rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={value} 
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}