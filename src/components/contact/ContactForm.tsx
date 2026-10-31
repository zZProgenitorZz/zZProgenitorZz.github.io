import { useRef, useState, type FormEvent, type SyntheticEvent } from 'react'
import WaxSeal from '../decor/WaxSeal'
import { Input, TextArea } from '../ui/Input'
import { socials } from '../../content/socials'
import { useT } from '../../i18n/LanguageContext'

type Status = 'idle' | 'sending' | 'success' | 'mailto' | 'error'
type Field = HTMLInputElement | HTMLTextAreaElement

export default function ContactForm() {
  const t = useT()
  const f = t.contact.form
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const clearError = (e: SyntheticEvent<Field>) => {
    const name = e.currentTarget.name
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  // Replace the native bubble with inline text; focus the first invalid field.
  const onInvalid = (e: FormEvent<Field>) => {
    e.preventDefault()
    const el = e.currentTarget
    const msg = el.validity.valueMissing ? f.required : f.invalidEmail
    setErrors((prev) => ({ ...prev, [el.name]: msg }))
    if (form.current?.querySelector(':invalid') === el) el.focus()
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const id = import.meta.env.VITE_FORMSPREE_ID

    if (!id) {
      const body = `${data.message}\n\n${data.name} <${data.email}>`
      window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.current?.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const common = { onInvalid, onChange: clearError, required: true }

  return (
    <form ref={form} onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div className="grid gap-4 md:grid-cols-2">
        <Input id="cf-name" name="name" label={f.name} autoComplete="name" error={errors.name} {...common} />
        <Input id="cf-email" name="email" type="email" label={f.email} autoComplete="email" error={errors.email} {...common} />
      </div>
      <Input id="cf-subject" name="subject" label={f.subject} error={errors.subject} {...common} />
      <TextArea id="cf-message" name="message" rows={6} label={f.message} error={errors.message} {...common} />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-11 items-center gap-3 border border-crimson px-4 py-2 text-fg transition-colors hover:bg-crimson/20 disabled:cursor-not-allowed disabled:opacity-60 md:min-h-0"
        >
          <WaxSeal size={24} />
          {status === 'sending' ? f.sending : f.send}
        </button>
        <p id="form-status" role="status" className={status === 'success' ? 'text-accent-2' : ''}>
          {status === 'success' && f.success}
          {status === 'mailto' && f.mailtoOpened}
          {status === 'error' && f.error}
        </p>
      </div>
    </form>
  )
}
