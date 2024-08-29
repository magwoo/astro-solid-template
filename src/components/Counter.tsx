import { createSignal } from "solid-js";

export function Counter(props: { initial?: number }) {
  const [counter, setCounter] = createSignal<number>(props.initial || 0);

  const increment = () => setCounter(counter() + 1);

  return (
    <button
      class="text-2xl bg-stone-100 rounded-xl px-4 py-2 hover:bg-stone-200 transition-colors"
      onClick={increment}
    >
      click me! {counter()}
    </button>
  );
}
