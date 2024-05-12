
# Vue d'ensemble des Hooks React

## `useState`

`useState` est un Hook qui permet d'ajouter la gestion d'état aux composants fonctionnels dans React. Cela permet de maintenir les valeurs d'état à travers les différents rendus du composant.

**Syntaxe de base :**
```jsx
const [state, setState] = useState(initialState);
```
- `state` : la valeur actuelle de l'état.
- `setState` : une fonction pour mettre à jour l'état.
- `initialState` : la valeur initiale de l'état.

**Exemple d'utilisation :**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez moi
      </button>
    </div>
  );
}
```

## `useEffect`

`useEffect` permet d'effectuer des effets de bord dans les composants fonctionnels, utilisé pour la récupération de données, la manipulation directe du DOM ou la mise en place d'abonnements.

**Syntaxe de base :**
```jsx
useEffect(() => {
  // Code pour l'effet ici
  return () => {
    // Nettoyage (facultatif)
  };
}, [dependencies]);
```
- Premier argument : fonction contenant l'effet.
- Deuxième argument : tableau des dépendances qui détermine quand ré-exécuter l'effet.

**Exemple d'utilisation :**
```jsx
useEffect(() => {
  document.title = `Vous avez cliqué {count} fois`;
}, [count]); // S'exécute uniquement si `count` change.
```

## `useMemo`

`useMemo` mémorise le résultat d'une fonction coûteuse si ses dépendances n'ont pas changé, évitant des recalculs inutiles lors des rendus.

**Syntaxe de base :**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- Fonction qui calcule la valeur.
- Tableau de dépendances.

**Exemple d'utilisation :**
```jsx
const memoizedResult = useMemo(() => computeExpensiveValue(count), [count]);
```

## `useRef`

`useRef` est utilisé pour accéder aux éléments du DOM et stocker des valeurs qui ne provoquent pas de re-rendus lorsqu'elles sont modifiées.

**Syntaxe de base :**
```jsx
const refContainer = useRef(initialValue);
```
- `initialValue` : la valeur initiale de la référence.

**Exemple d'utilisation :**
```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Mettez le focus sur l'input</button>
    </div>
  );
}
```
