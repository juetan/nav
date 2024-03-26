import type { Scrollbar } from '@arco-design/web-vue'
import type { InjectionKey } from 'vue'

export const ScraollBarRef = Symbol('scrollbar') as InjectionKey<Ref<InstanceType<typeof Scrollbar> | null>>

export const OnScrollKey = Symbol('onScroll') as InjectionKey<(fn: (event: Event) => void) => void>
