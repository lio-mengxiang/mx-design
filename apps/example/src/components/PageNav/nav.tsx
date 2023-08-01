import React, { useLayoutEffect, useState } from 'react';
import styles from './styles/index.module.less';
import Mask from './mask';

function PageNav() {
  const [isShowMask, setShowMask] = useState(false);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isShowMask ? <Mask /> : null}</>;
}
export default PageNav;
