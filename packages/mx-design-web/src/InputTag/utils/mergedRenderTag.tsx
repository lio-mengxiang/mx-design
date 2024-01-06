import React from 'react';
import { cs, isString } from '@mx-design/web-utils';
import { Tag } from '../../Tag';
import { tagCloseHandler } from './tagCloseHandler';
import type { InputTagProps, ObjectValueType } from '../interface';

interface RenderTagProps {
  readOnly: InputTagProps['readOnly'];
  item: ObjectValueType;
  disabled: InputTagProps['disabled'];
  index: number;
  renderTag: InputTagProps['renderTag'];
  value: ObjectValueType[];
  prefixCls: string;
  onRemove: InputTagProps['onRemove'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagProps['onChange'];
  tagClassName: InputTagProps['tagClassName'];
  labelInValue: InputTagProps['labelInValue'];
}

export function mergedRenderTag({
  readOnly,
  item,
  disabled,
  index,
  renderTag,
  value,
  prefixCls,
  onRemove,
  setValue,
  onChange,
  tagClassName,
  labelInValue,
}: RenderTagProps) {
  const { value: itemValue, label } = item;
  const closable = !readOnly && !disabled && item.closable !== false;
  const onClose = (event) => {
    tagCloseHandler({ item, index, event, onRemove, value, disabled, readOnly, setValue, onChange, labelInValue });
  };

  if (renderTag) {
    return renderTag(
      {
        value: itemValue,
        label,
        closable,
        onClose,
      },
      index,
      value
    );
  }

  return (
    <Tag
      key={index}
      visible
      className={cs(`${prefixCls}-tag`, {
        [tagClassName]: tagClassName,
      })}
      closable={closable}
      title={isString(label) ? label : undefined}
      onClose={onClose}
    >
      {/* fillNBSP */}
      {label}
    </Tag>
  );
}
1;
2;
