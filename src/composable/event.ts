import { onBeforeUnmount, onMounted } from "vue";

export function useEventListener(target: Window, event: keyof WindowEventMap, callback: Function){
    onMounted(() => target.addEventListener(event, callback));
    onBeforeUnmount(() => target.removeEventListener(event, callback));
}