import React, { ReactNode } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import { keepFocus } from '../utils';
import { useClassNames } from '../hooks';
import { OMIT_PROPERTY } from '../constants';
import { InputTagProps, ObjectValueType } from '../interface';
import type { RefInputType } from '../../Input/interface';

interface BaseInputTagProps {
  needWrapper: boolean;
  className: InputTagProps['className'];
  style: InputTagProps['style'];
  focused: boolean;
  refInput: React.MutableRefObject<RefInputType>;
  onClick: InputTagProps['onClick'];
  prefixCls: string;
  hasPrefix: boolean;
  prefix: InputTagProps['prefix'];
  draggable: boolean;
  children: ReactNode;
  hasSuffix: boolean;
  suffix: InputTagProps['suffix'];
  clearIcon: ReactNode;
  disabled: InputTagProps['disabled'];
  status: InputTagProps['status'];
  readOnly: InputTagProps['readOnly'];
  value: ObjectValueType[];
  rest: Record<string, any>;
}

function BaseInputTag(props: BaseInputTagProps, ref) {
  const {
    needWrapper,
    className,
    style,
    focused,
    refInput,
    onClick,
    prefixCls,
    hasPrefix,
    prefix,
    draggable,
    children,
    hasSuffix,
    suffix,
    clearIcon,
    disabled,
    status,
    readOnly,
    value,
    rest,
  } = props;

  const { innerClassNames } = useClassNames({ prefixCls, disabled, status, focused, readOnly, hasSuffix, value });

  return (
    <div
      {...omit(rest, OMIT_PROPERTY)}
      {...(needWrapper ? {} : { style })}
      className={needWrapper ? innerClassNames : cs(innerClassNames, className)}
      onMouseDown={(event) => {
        focused && keepFocus(event);
      }}
      onClick={(e) => {
        !focused && refInput.current?.focus();
        onClick?.(e);
      }}
      ref={ref}
    >
      <div className={`${prefixCls}-view`}>
        {hasPrefix && (
          <div className={`${prefixCls}-prefix`} tabIndex={-1}>
            {prefix}
          </div>
        )}
        {/* {draggable ? (
          <div className={`${prefixCls}-inner`}>
            <Draggable
              itemWrapperStyle={{ display: 'inline-block' }}
              direction="horizontal"
              onIndexChange={(index, prevIndex) => {
                const moveItem = function (arr, fromIndex, toIndex) {
                  arr = arr.slice();
                  const isMoveLeft = fromIndex > toIndex;
                  const [item] = arr.splice(fromIndex, 1);
                  arr.splice(isMoveLeft ? toIndex : toIndex - 1, 0, item);
                  return arr;
                };
                valueChangeHandler(moveItem(value, prevIndex, index), 'sort');
              }}
            >
              {newChildren}
            </Draggable>
          </div>
        ) : (
          <div className={`${prefixCls}-inner`}>{newChildren}</div>
        )} */}
        <div className={`${prefixCls}-inner`}>{children}</div>
        {hasSuffix && (
          <div className={`${prefixCls}-suffix`} tabIndex={-1}>
            {clearIcon}
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}
export const BaseInputTagComponent = React.forwardRef<any, BaseInputTagProps>(BaseInputTag);
