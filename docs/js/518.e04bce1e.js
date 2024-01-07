"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[518],{7530:(e,n,r)=>{r.r(n),r.d(n,{default:()=>v});var t=r(2798),a=r(9641),o=r(7059),p=r(2983),l=r(6880),c=r(6623),s=r(1399),u=r(2179),i={code:"\nimport { Input } from '@mx-design/web';\n\nfunction App() {\n  return <Input style={{ width: 350 }} placeholder=\"Please Enter something\" />;\n}",namespace:u.Bb},d={code:'\nimport { GridLayout, Input } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">\n      <Input status="error" placeholder="error status" />\n      <Input status="warning" placeholder="warning status" />\n      <Input disabled placeholder="disabled input" />\n    </GridLayout>\n  );\n}',namespace:u.qb},m={code:"\nimport { GridLayout, Input } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <GridLayout columns=\"repeat(2, 350px)\" rows={2} gap=\"24px\">\n        <Input addAfter='RMB' placeholder='Please enter' />\n        <Input addBefore='+86' placeholder='Please enter' />\n        <Input addBefore='www.' addAfter='.com' placeholder='Please enter' />\n    </GridLayout>\n  );\n}",namespace:u.__},h={code:'\nimport { GridLayout, Input } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">\n      <Input prefix={<IconSearch />} placeholder="Please enter" />\n      <Input allowClear suffix={<IconSearch />} placeholder="Please enter" />\n      <Input prefix={<IconSearch />} suffix={<IconPrompt />} placeholder="Please enter" />\n      <Input\n        addBefore="+86"\n        addAfter={<IconLink />}\n        prefix={<IconSearch />}\n        suffix={<IconPrompt />}\n        allowClear\n        placeholder="Please enter"\n      />\n    </GridLayout>\n  );\n}',namespace:u.CM},f={code:'\nimport { Input } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">\n      <Input.Search allowClear placeholder="Please Enter something" />\n      <Input.Search loading allowClear placeholder="Please Enter something" />\n      <Input.Search searchButton allowClear placeholder="Please Enter something" />\n      <Input.Search searchButton="Search" allowClear placeholder="Please Enter something" />\n      <Input.Search loading searchButton="Search" allowClear placeholder="Please Enter something" />\n    </GridLayout>\n  );\n}',namespace:u.ol},w={code:"\nimport { Input } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <GridLayout columns=\"repeat(2, 350px)\" rows={2} gap=\"24px\">\n        <Input\n          maxLength={{ length: 10 }}\n          showWordLimit\n          placeholder='Please enter no more than 10 letters'\n          style={{ width: 300 }}\n        />\n        <Input\n          maxLength={{ length: 10, errorOnly: true }}\n          showWordLimit\n          defaultValue='More than 10 letters will be error'\n          style={{ width: 300 }}\n        />\n    </GridLayout>\n  );\n}",namespace:u.cd},g={code:'\nimport { Space, Input } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Input.Password defaultValue="password" style={{ width: 350 }} />\n      <Input.Password defaultValue="password" defaultVisibility placeholder="Please enter ..." style={{ width: 350 }} />\n    </Space>\n  );\n}',namespace:u.ro},I={code:"\nimport { Input } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <div>\n        <>trim whitespace when out of focus：</>\n        <Input\n          onChange={(v) => {\n            console.log('current value: ', v);\n          }}\n          normalizeTrigger={['onBlur']}\n          normalize={(v) => (v ? v.trim() : v)}\n          style={{ width: 350 }}\n        />\n      </div>\n      <div>\n        <>trim whitespace when press enter：</>\n        <Input\n          onChange={(v) => {\n            console.log('current value: ', v);\n          }}\n          normalize={(v) => (v ? v.trim() : v)}\n          normalizeTrigger={['onPressEnter']}\n          style={{ width: 350 }}\n        />\n      </div>\n    </Space>\n  );\n}",namespace:u.Bc},y=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},i.namespace,i),d.namespace,d),m.namespace,m),h.namespace,h),f.namespace,f),w.namespace,w),g.namespace,g),I.namespace,I),b=r(5772);function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function P(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}const v=function(){var e=(0,s.b)({namespace:c.U9}),n=(0,o.Z)(e,1)[0],r=(0,p.useMemo)((function(){return Object.keys(n).map((function(e){return P(P({},n[e]),y[e])}))}),[n,y]),a=(0,p.useMemo)((function(){return r.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[r]);return p.createElement(l.Z,{titleList:a},r.map((function(e){return p.createElement(b.AN,(0,t.Z)({key:e.namespace},e))})))}}}]);