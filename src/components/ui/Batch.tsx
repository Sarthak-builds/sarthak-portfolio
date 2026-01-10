// src/components/ui/Batch.tsx
import { HTMLAttributes, forwardRef } from 'react'

export interface BatchProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

const Batch = forwardRef<HTMLDivElement, BatchProps>(
  (
    {
      className = '',
      variant = 'default',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      rounded-full font-medium
      transition-colors select-none
    `

    const sizeStyles = {
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3.5 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    }

    const variantStyles = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline:
        'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      accent: 'bg-purple-600 text-white hover:bg-purple-700',
    }

    return (
      <div
        ref={ref}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Batch.displayName = 'Batch'

export { Batch }