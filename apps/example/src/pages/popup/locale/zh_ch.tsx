import React from 'react';
import { Basic, Controlled, DifferentTrigger, Disabled, Dynamic, FloatingLayer, Mount, Position, TriggerMode } from './constants';

export const zn_ch_popup = {
  [Basic]: {
    title: '基础弹出层',
    desc: (
      <>
        由是让浮层内容和触发元素组成，两者均可自定义。使用<code className="mx-code">content</code>自定义浮层内容
      </>
    ),
  },
  [TriggerMode]: {
    title: '触发元素',
    desc: (
      <>
        可以使用<code className="mx-code">triggerElement</code>自定义触发元素
      </>
    ),
  },
  [DifferentTrigger]: {
    title: '不同触发方式的弹出层',
    desc: (
      <>
        提供<code className="mx-code">悬浮时触发(默认)</code>、<code className="mx-code">点击时触发</code>、
        <code className="mx-code">获取焦点时触发</code>、<code className="mx-code">右击时触发</code>等方式
      </>
    ),
  },
  [Position]: {
    title: '位置方向',
    desc: (
      <>
        使用 placement 控制浮层方向，如果需要浮层箭头，设置 <code className="mx-code">showArrow=true</code> 即可
      </>
    ),
  },
  [FloatingLayer]: {
    title: '浮层样式',
    desc: (
      <div>
        <div>
          浮层样式可以使用 <code className="mx-code">overlayClassName</code>、 <code className="mx-code">overlayStyle</code>、
          <code className="mx-code"> overlayInnerStyle</code>控制
        </div>
        <div className="mt4">1、overlayClassName 用于定义浮层样式类名</div>
        <div className="mt4">2、overlayStyle 用于定义浮层样式，比如浮层宽度。浮层宽度默认根据内容宽度呈现，可自由设置宽度和最大宽度</div>
        <div className="mt4">
          3、overlayInnerStyle
          用于定义浮层内容部分样式，比如内容最大高度以及是否出滚动条。值为类型为函数时，可以实现浮层内容宽度和触发元素同宽
        </div>
      </div>
    ),
  },
  [Controlled]: {
    title: '可控制显示的弹出层',
    desc: (
      <>
        可以通过<code className="mx-code">visible</code> 自由控制弹出层的显示或隐藏
      </>
    ),
  },
  [Mount]: {
    title: '挂载父节点',
    desc: (
      <>
        浮层默认父节点是 body ，可通过 <code className="mx-code">attach</code> 自由调整挂载的父节点元素
      </>
    ),
  },
  [Disabled]: {
    title: '禁用状态的弹出层',
    desc: '组件禁用后，不再显示弹出层',
  },
  [Dynamic]: {
    title: '动态自适应',
    desc: '当trigger或popup显示内容动态变化时，自适应调整位置',
  },
};
