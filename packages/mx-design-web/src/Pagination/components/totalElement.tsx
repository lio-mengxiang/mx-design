import React from 'react';
import { PAGINATION_NAMESPACE } from '../constants';
import { useLocale } from '../../Locale/useLocal/useLocal';

export function TotalElement({ showTotal, prefixCls, total, current, pageSize }) {
  const [locale, t] = useLocale({ namespace: PAGINATION_NAMESPACE });

  if (typeof showTotal === 'boolean' && showTotal) {
    return <div className={`${prefixCls}-total-text`}>{t(locale.total, { 0: total })}</div>;
  }
  if (typeof showTotal === 'function') {
    return <div className={`${prefixCls}-total-text`}>{showTotal(total, [(current - 1) * pageSize + 1, current * pageSize])}</div>;
  }
  return null;
}
