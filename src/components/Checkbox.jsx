export function Checkbox ({checked, onChange, label, id}) {
    return (
        <div className="flex items-center space-x-2">
            <input 
                id={id}
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                checked={checked} 
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className="text-gray-700">{label}</label>
        </div>
    )
}