import { isNumber, isObject } from '@mx-design/web-utils';
import type { ColProps } from '../interface';

export function adaptationGrid({
  prefixCls,
  mergeClassName,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
}: {
  prefixCls: string;
  mergeClassName: { [key: string]: any };
  xs: ColProps['xs'];
  sm: ColProps['sm'];
  md: ColProps['md'];
  lg: ColProps['lg'];
  xl: ColProps['xl'];
  xxl: ColProps['xxl'];
  xxxl: ColProps['xxxl'];
}) {
  const screenList = { xs, sm, md, lg, xl, xxl, xxxl };
  Object.keys(screenList).forEach((screen) => {
    const screenValue = screenList[screen];
    if (isNumber(screenValue)) {
      if (screenValue >= 0) {
        mergeClassName[`${prefixCls}-${screen}-${screenValue}`] = true;
      }
    } else if (isObject(screenValue)) {
      mergeClassName[`${prefixCls}-${screen}-${screenValue.span}`] = screenValue.span;
      mergeClassName[`${prefixCls}-${screen}-offset-${screenValue.offset}`] = screenValue.offset;
      mergeClassName[`${prefixCls}-${screen}-order-${screenValue.order}`] = screenValue.order;
      mergeClassName[`${prefixCls}-${screen}-pull-${screenValue.pull}`] = screenValue.pull;
      mergeClassName[`${prefixCls}-${screen}-push-${screenValue.push}`] = screenValue.push;
    }
  });
}
