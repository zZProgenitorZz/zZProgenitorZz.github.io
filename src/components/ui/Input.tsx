import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

const field =
  'w-full border border-line bg-bg px-2 py-2 text-fg placeholder:text-muted transition-colors focus:border-accent'

type Common = { label: string; error?: string; id: string }

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={`${id}-error`} className="mt-1 text-xs">
      {error}
    </p>
  )
}

export function Input({ label, error, id, className = '', ...rest }: Common & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        className={field}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      <FieldError id={id} error={error} />
    </div>
  )
}

export function TextArea({ label, error, id, className = '', ...rest }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={label}
        className={`${field} resize-y`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      <FieldError id={id} error={error} />
    </div>
  )
}
