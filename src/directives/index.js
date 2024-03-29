// 定义img-lazy
import { useIntersectionObserver } from '@vueuse/core'
import loading from '@/assets/images/loading.webp'

export const lazyLoad = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          el.src = isIntersecting ? binding.value : loading
          if (isIntersecting) stop()
        })
      }
    })
  }
}
