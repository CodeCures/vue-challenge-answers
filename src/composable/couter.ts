import { ref } from "vue"

interface CounterOption {
    min: number,
    max: number
}

export function useCounter(defaultValue: number, option: CounterOption){
    const count = ref(0);
    const {min, max} = option;

    const inc = () => count.value >= max || count.value++;
    const dec = () => count.value == min || count.value--;
    const reset = () => count.value = 0;


    return {count, inc, dec, reset}
}   