import React from 'react';
import { createIcon } from '../../createIcon';

export const IconEllipsis = createIcon({
  paths: (
    <>
      <path d="M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
      <path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
      <path d="M832 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    </>
  ),
});

IconEllipsis.displayName = 'IconEllipsis';
