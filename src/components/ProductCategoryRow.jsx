export function ProductCategoryRow ({category}) {
    return (
        <tr className="bg-gray-100">
            <th colSpan="2" className="px-4 py-2 text-left text-gray-800">{category}</th>
        </tr>
    )
}