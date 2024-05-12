import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

export function ProductTable ({products, filterText, inStockOnly}) {
    const rows = []
    let lastCategory = null

    for ( let product of products ) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
    )
}