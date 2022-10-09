import { computed } from 'vue'

/**
 * @param {import("@vue/reactivity").Ref} r1 - reference
 * @returns computed of (!r)
 */
export const not = r => computed(
    () => !r.value
)

/**
 * @param {import("@vue/reactivity").Ref} r1 - first reference
 * @param {import("@vue/reactivity").Ref} r2 - second reference
 * @returns computed of (r1 && r2)
 */
export const and = (r1, r2) => computed(
    () => r1.value && r2.value
)

/**
 * @param {import("@vue/reactivity").Ref} r1 - first reference
 * @param {import("@vue/reactivity").Ref} r2 - second reference
 * @returns computed of (r1 || r2)
 */
 export const or = (r1, r2) => computed(
    () => r1.value || r2.value
)
