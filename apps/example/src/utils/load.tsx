import React from 'react';
import loadable from '@loadable/component';
import { Spin } from '@mx-design/web';

// https://github.com/gregberge/loadable-components/pull/226
function load(fn, options) {
  const Component = loadable(fn, options);
  return Component;
}

function LoadingComponent() {
  return (
    <div
      className="fade-animation"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '300px',
      }}
    >
      <Spin />
    </div>
  );
}

export default (loader) =>
  load(loader, {
    fallback: LoadingComponent(),
  });
