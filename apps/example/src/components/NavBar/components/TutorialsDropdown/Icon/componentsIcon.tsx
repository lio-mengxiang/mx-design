import React from 'react';

export function ComponentsIcon({ className }) {
  return (
    <svg stroke="var(--brand-color)" strokeWidth={2} width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M17 11L24 4L31 11L24 18L17 11Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 25L37 18L44 25L37 32L30 25Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 37L24 30L31 37L24 44L17 37Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 24L11 17L18 24L11 31L4 24Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
