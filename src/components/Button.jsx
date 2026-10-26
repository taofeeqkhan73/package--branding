import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component for Package Branding
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} to - React Router link path (renders <Link>)
 * @param {string} href - External URL or anchor link (renders <a>)
 * @param {boolean} fullWidth - Whether button occupies 100% container width
 * @param {React.ReactNode} icon - Optional icon element
 * @param {string} iconPosition - 'left' | 'right'
 * @param {string} className - Additional custom classes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  to,
  href,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) => {
  // Base styling common to all button variants
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-300 select-none cursor-pointer outline-none focus:outline-none focus:ring-0 active:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  // Rounded shapes
  const roundings = {
    full: 'rounded-full',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    lg: 'rounded-lg',
  };

  // Variant color styles
  const variants = {
    primary:
      'text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transform hover:-translate-y-0.5',
    secondary:
      'text-gray-800 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/80',
    outline:
      'text-gray-700 hover:text-indigo-600 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-2xs',
    ghost:
      'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/60',
    dark:
      'text-white bg-gray-900 hover:bg-gray-800 shadow-md shadow-gray-950/20',
  };

  // Sizing definitions
  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const combinedStyles = `
    ${baseStyles}
    ${roundings[rounded] || roundings.full}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  // If "to" prop is passed, render React Router <Link>
  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  // If "href" prop is passed, render external/anchor <a>
  if (href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  // Otherwise render standard <button>
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
