import { VueWrapper } from '@vue/test-utils'

export function isVisibleClass (component: VueWrapper<any>, className: string) {
	const child = component.find(className)
	return child.exists() && child.isVisible()
}
