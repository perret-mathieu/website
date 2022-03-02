/* Transition */

const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = fonction(entries,observer) {
  entries.forEach(onction (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('row-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('row'))
