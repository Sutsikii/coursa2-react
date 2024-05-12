import { Checkbox } from "./Checkbox";
import { Input } from "./Inputs";

export function SearchBar ({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
    return(
        <div className="container mx-auto px-4 py-2"> 
            <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
            <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="N'afficher que les produits en stock" />
        </div>
    )
}