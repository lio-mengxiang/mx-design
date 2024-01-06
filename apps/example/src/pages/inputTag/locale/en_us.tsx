import React from 'react';
import { Basic, PrefixSuffix, LabelInValue, RenderTag, SaveOnBlur, TokenSeparator, ValidateFormat } from './constants';

export const en_us_input_tag = {
  [Basic]: {
    title: 'Basic',
    desc: 'Basic usage of tags',
  },
  [PrefixSuffix]: {
    title: 'Prefix-Suffix',
    desc: (
      <div>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">addBefore</code> to customize the prefix content
        </li>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">addAfter</code> to customize the postfix content
        </li>
        <li style={{ lineHeight: '32px' }}>
          The front icon is customized by using <code className="mx-code">prefix</code>
        </li>
        <li style={{ lineHeight: '32px' }}>
          Use <code className="mx-code">suffix</code> to customize the rear icon
        </li>
      </div>
    ),
  },
  [LabelInValue]: {
    title: 'Get select item value',
    desc: (
      <>
        Use <code className="mx-code">labelInValue=true</code> to get label of the select item value
      </>
    ),
  },
  [ValidateFormat]: {
    title: 'Validate/format input',
    desc: (
      <>
        Use <code className="mx-code">validate</code> to enable custom validator for input value. Additionally, non-boolean can be returned
        to format user-entered strings in a specific <code className="mx-code">value</code> format
      </>
    ),
  },
  [SaveOnBlur]: {
    title: 'Save on blur',
    desc: (
      <>
        Set <code className="mx-code">saveOnBlur</code> to automatically save the text being entered as a label when it loses focus.
      </>
    ),
  },
  [RenderTag]: {
    title: 'Render tag',
    desc: (
      <>
        Use <code className="mx-code">renderTag</code> to customize tag rendering
      </>
    ),
  },
  [TokenSeparator]: {
    title: 'Token Separator',
    desc: (
      <>
        Set <code className="mx-code">tokenSeparators</code> to use automatic word segmentation. Try copying text below into the input box
      </>
    ),
  },
};
