export function ProductRow ({product}) {

    const style = product.stocked ? undefined : {color: 'red'}

    return (
        <tr>
            <td className={`px-4 py-2 ${product.stocked ? 'text-black' : 'text-red-500'}`}>{product.name}</td>
            <td className="px-4 py-2">{product.price}</td>
        </tr>
    )
}