import React, { ReactNode, Suspense } from 'react';
import { Spin } from '@mx-design/web';

export function layLoad(Component: React.LazyExoticComponent<any>): ReactNode {
  return (
    <Suspense
      fallback={
        <div
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
      }
    >
      <Component />
    </Suspense>
  );
}
