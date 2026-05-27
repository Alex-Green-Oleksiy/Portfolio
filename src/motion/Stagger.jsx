import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT } from './config'

export function Stagger({
  children,
  className,
  stagger = 0.09,
  as = 'div',
  role,
  ...rest
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} role={role} {...rest}>
        {children}
      </Tag>
    )
  }

  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      role={role}
      {...rest}
      variants={{
        ...staggerContainer,
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({ children, className, as = 'div' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const Component = motion[as] ?? motion.div

  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  )
}
