import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
};

export function TextInput({ label, name, error, hint, ...props }: BaseFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const describedBy = [hint ? `${name}-hint` : undefined, error ? `${name}-error` : undefined].filter(Boolean).join(' ');
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={describedBy || undefined} {...props} />
      {hint ? <span id={`${name}-hint`} className="field-hint">{hint}</span> : null}
      {error ? <span id={`${name}-error`} className="field-error" role="alert">{error}</span> : null}
    </div>
  );
}

export function SelectInput({
  label,
  name,
  error,
  children,
  ...props
}: BaseFieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} {...props}>
        {children}
      </select>
      {error ? <span id={`${name}-error`} className="field-error" role="alert">{error}</span> : null}
    </div>
  );
}

export function TextArea({
  label,
  name,
  error,
  hint,
  ...props
}: BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const describedBy = [hint ? `${name}-hint` : undefined, error ? `${name}-error` : undefined].filter(Boolean).join(' ');
  return (
    <div className="field field--full">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} aria-invalid={Boolean(error)} aria-describedby={describedBy || undefined} {...props} />
      {hint ? <span id={`${name}-hint`} className="field-hint">{hint}</span> : null}
      {error ? <span id={`${name}-error`} className="field-error" role="alert">{error}</span> : null}
    </div>
  );
}
