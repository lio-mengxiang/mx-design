/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MxConfigProvider } from '../../ConfigProvider';

function MxProviderWrapper(props: any) {
  return <MxConfigProvider {...props} />;
}

export interface MxRenderOptions extends RenderOptions {
  withProvider?: boolean;
}

export function render(
  ui: React.ReactElement,
  { withProvider, ...options }: MxRenderOptions = {
    withProvider: true,
  }
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup();

  if (withProvider) {
    options.wrapper = MxProviderWrapper;
  }

  const result = rtlRender(ui, options);

  return { user, ...result };
}
