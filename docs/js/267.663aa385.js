"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[267],{1026:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var o=t(8631),a=t(4154),r=t(4317),i=t(1855),s=t(4141),c=t(1753),p=t(5849),d=t(6501),m=t(3056),u={code:"\nimport { Spin } from '@mx-design/web';\n\nfunction App() {\n  return <Spin />;\n};",namespace:m.x},l={code:"\nimport { Spin, Button, Space } from '@mx-design/web';\n\nfunction App() {\n  const [loading, setLoading] = React.useState(true);\n  return (\n    <>\n      <Button\n        style={{ display: 'block', marginBottom: 24, }}\n        onClick={() => setLoading(!loading)}\n      >\n        {`Loading: ${loading}`}\n      </Button>\n      <Space>\n        <Spin loading={loading}>\n          <div\n            style={{ width: '100%', paddingRight: '24px', boxSizing: 'border-box' }}\n          >\n          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.\n          </div>\n        </Spin>\n        <Spin loading={loading}>\n          <div\n            style={{ width: '100%', }}\n            title='Arco Card'\n            extra={<span> More </span>}\n          >\n          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.\n          </div>\n        </Spin>\n      </Space>\n      <Spin\n        loading={loading}\n        style={{ display: 'block', marginTop: 48, }}\n      >\n        <div>\n        An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.\n        </div>\n      </Spin>\n    </>\n  );\n}",namespace:m.mc},g={code:"\nimport { Spin } from '@arco-design/web-react';\n\nfunction App() {\n  return (\n    <Spin tip='This may take a while...' loading block={false}>\n      <div style={{ width: 360 }}>\n        ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around\n        the world. Toutiao started out as a news recommendation engine and gradually evolved into a\n        platform delivering content in various formats.\n      </div>\n    </Spin>\n  );\n}",namespace:m.Y6},f={code:"\nimport { Spin, Button } from '@arco-design/web-react';\n\nfunction App() {\n  const [loading, setLoading] = React.useState(true);\n  return (\n    <>\n      <Button style={{ display: 'block', marginBottom: 24 }} onClick={() => setLoading(!loading)}>\n        {`Loading: ${loading}`}\n      </Button>\n      <Spin delay={500} loading={loading} block={false}>\n        <div\n          style={{ width: 360 }}\n        >\n          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs..\n        </div>\n      </Spin>\n    </>\n  );\n}",namespace:m.Gu},S={code:"\nimport { Spin, IconLoading } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Spin loading={true} size={30} element={<IconFavorite spin />} block={false}>\n      <div\n        style={{ width: 360, }}\n      >\n      An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.\n      </div>\n    </Spin>\n  );\n}",namespace:m.Sv},y={code:"\nimport { Spin, Space } from '@arco-design/web-react';\n\nfunction App() {\n  return (\n    <Space size={40}>\n      <Spin size={20} />\n      <Spin size={30} />\n      <Spin size={40} />\n    </Space>\n  );\n};",namespace:m.or},w=(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},u.namespace,u),l.namespace,l),g.namespace,g),f.namespace,f),S.namespace,S),y.namespace,y);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function b(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,a.A)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}const h=function(){var n=(0,p.Y)({namespace:c.nD}),e=(0,r.A)(n,1)[0],t=(0,i.useMemo)((function(){return Object.keys(e).map((function(n){return b(b({},e[n]),w[n])}))}),[e,w]),a=(0,i.useMemo)((function(){return t.map((function(n){return{title:n.title,href:"#".concat(n.namespace)}}))}),[t]);return i.createElement(s.A,{titleList:a},t.map((function(n){return i.createElement(d.Qk,(0,o.A)({key:n.namespace},n))})))}}}]);