import { Component, Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react'

// If WebGL is unavailable or the scene crashes, the page simply shows no 3D.
class Boundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/**
 * Loads a three.js scene only when it is near the screen, and unmounts it
 * when it scrolls away. This keeps the first load light and frees GPU memory.
 */
function Lazy3D({ loader, className = '' }) {
  const ref = useRef(null)
  const [near, setNear] = useState(false)
  const Scene = useMemo(() => lazy(loader), [loader])
  const reduced = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setNear(e.isIntersecting), { rootMargin: '200px' })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {near && (
        <Boundary>
          <Suspense fallback={null}>
            <Scene reduced={reduced} />
          </Suspense>
        </Boundary>
      )}
    </div>
  )
}

export default Lazy3D
