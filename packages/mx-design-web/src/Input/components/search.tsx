import React, { useContext, useRef } from 'react';
import { cs, omit } from '@mx-design/web-utils';
import { ConfigContext } from '../../ConfigProvider';
import { Input } from './input';
import { Button } from '../../Button';
import { IconLoading, IconSearch } from '../../Icon';
// type
import type { InputSearchProps, RefInputType } from '../interface';

export const Search = React.forwardRef<RefInputType, InputSearchProps>((props: InputSearchProps, ref) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const { className, style, disabled, searchButton, loading, defaultValue, ...rest } = props;

  const getInputValueRef = useRef<string>('');
  const prefixCls = getPrefixCls('input-search');
  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-button`]: searchButton,
    },
    className
  );

  const onSearch = () => {
    if (disabled) return;
    props.onSearch?.(getInputValueRef.current);
  };

  return (
    <Input
      {...omit(rest, ['onSearch'])}
      disabled={disabled}
      className={classNames}
      style={style}
      ref={ref}
      _getInputValueRef={getInputValueRef}
      addAfter={
        searchButton ? (
          <Button
            disabled={disabled}
            className={`${prefixCls}-btn`}
            type="brand"
            onClick={onSearch}
            loading={loading}
            icon={searchButton === true && <IconSearch />}
          >
            {searchButton !== true && searchButton}
          </Button>
        ) : null
      }
      suffix={!searchButton && (loading ? <IconLoading spin /> : <IconSearch onClick={onSearch} />)}
      onChange={(value, e) => {
        props.onChange?.(value, e);
      }}
      onPressEnter={() => {
        onSearch();
        props.onPressEnter?.(getInputValueRef.current);
      }}
    />
  );
});
