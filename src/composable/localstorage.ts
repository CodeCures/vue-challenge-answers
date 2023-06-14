import { ref, watchEffect } from "vue";

export function useLocalStorage<T>(key: string, initialValue: T){
    const storedValue = localStorage.getItem(key)
    const state = ref<T>(storedValue ? JSON.parse(storedValue) : initialValue);

    watchEffect(() => localStorage.setItem(key, JSON.stringify(state.value)));


    return state
}