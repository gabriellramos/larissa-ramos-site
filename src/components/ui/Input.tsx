import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    const inputId = id || props.name;
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-semibold text-surface-text-variant">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full bg-surface-container border px-4 py-3 text-surface-text transition-all duration-200 outline-none rounded-xl focus:bg-white focus:shadow-sm ${
            error 
              ? 'border-error focus:border-error bg-error-container/20' 
              : 'border-outline/20 focus:border-primary'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs font-semibold text-error mt-0.5">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    const textareaId = id || props.name;
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-semibold text-surface-text-variant">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={`w-full bg-surface-container border px-4 py-3 text-surface-text transition-all duration-200 outline-none rounded-xl focus:bg-white focus:shadow-sm min-h-[120px] resize-y ${
            error 
              ? 'border-error focus:border-error bg-error-container/20' 
              : 'border-outline/20 focus:border-primary'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs font-semibold text-error mt-0.5">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
