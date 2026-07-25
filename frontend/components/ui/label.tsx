import { cn } from '@/lib/utils';
import { forwardRef, type LabelHTMLAttributes } from 'react';

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(function Label(
  { className, ...props },
  ref,
) {
  return (
    <label
      ref={ref}
      className={cn('text-sm font-medium leading-none text-slate-700', className)}
      {...props}
    />
  );
});
