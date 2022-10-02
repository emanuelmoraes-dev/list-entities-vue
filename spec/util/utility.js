/**
 * find a HTML element and verify if it is visible
 * @param {import("@vue/test-utils").VueWrapper} component - the mounted vue component
 * @param {string} selector - element selector
 * @returns {boolean} true if a visible HTML element was found
 */
export function isVisible (component, className) {
    const child = component.find(className)
    return child.exists() && child.isVisible()
}
