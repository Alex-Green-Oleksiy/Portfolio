import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, VIEWPORT } from './config'

export default function Reveal({
  children,
  className,
  as = 'div',
  variant = fadeUp,
  delay = 0,
  once = true,
}) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduce) {
    const Tag = as === 'div' ? 'div' : as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, once }}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}
