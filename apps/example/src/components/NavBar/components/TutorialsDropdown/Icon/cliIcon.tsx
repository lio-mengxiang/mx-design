import React from 'react';

export function CliIcon({ className }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" stroke="var(--brand-color)" strokeWidth={2} fill="none" className={className}>
      <rect x="4" y="8" width="40" height="32" rx="2" fill="none" strokeLinejoin="round" />
      <path d="M12 18L19 24L12 30" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 32H36" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
