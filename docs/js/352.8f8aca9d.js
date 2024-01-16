"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[352],{2334:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var r=t(2798),o=t(9641),a=t(7059),i=t(2983),f=t(6880),c=t(6623),s=t(1399),d=t(2476),p=t(2541),u={code:"\nimport { Affix, Button } from '@mx-design/web';\n\nfunction App() {\n  const [top, setTop] = React.useState(150);\n\n  const handleClick = () => {\n    setTop(top + 10);\n  };\n\n  return (\n    <Affix offsetTop={top} offsetBottom={10}>\n      <Button onClick={handleClick}>固钉</Button>\n    </Affix>\n  );\n}",namespace:p.Bb,demoContainerStyle:{zIndex:2}},l={code:"\nimport { Affix } from '@mx-design/web';\n\nfunction App() {\n  const [container, setContainer] = React.useState(null);\n  const [affixed, setAffixed] = React.useState(false);\n  const affixRef = React.useRef(null);\n\n  const handleFixedChange = (affixed, { top }) => {\n    console.log('top', top);\n    setAffixed(affixed);\n  };\n\n  const backgroundStyle = {\n    height: '1500px',\n    paddingTop: '100px',\n    backgroundColor: '#fff',\n    backgroundImage:\n      `linear-gradient(45deg,#ddd 25%,transparent 0),\n      linear-gradient(45deg,transparent 75%,#ddd 0),\n      linear-gradient(45deg,#ddd 25%,transparent 0),\n      linear-gradient(45deg,transparent 75%,#ddd 0)`,\n    backgroundSize: '30px 30px',\n    backgroundPosition: '0 0,15px 15px,15px 15px,0 0',\n  };\n\n  return (\n    <div\n      style={{\n        borderRadius: '3px',\n        height: '400px',\n        overflowX: 'hidden',\n        overflowY: 'auto',\n        overscrollBehavior: 'none',\n      }}\n      ref={(ref)=>{\n        setContainer(ref)\n      }}\n    >\n      <div style={backgroundStyle}>\n        <Affix\n          offsetTop={50}\n          container={container}\n          zIndex={5}\n          onFixedChange={handleFixedChange}\n          ref={affixRef}\n          isInScrollContainer\n        >\n          <Button>affixed: {`${affixed}`}</Button>\n        </Affix>\n      </div>\n    </div>\n  );\n}",namespace:p.W2},x=(0,o.Z)((0,o.Z)({},u.namespace,u),l.namespace,l);function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}const b=function(){var n=(0,s.b)({namespace:c.iV}),e=(0,a.Z)(n,1)[0],t=(0,i.useMemo)((function(){return Object.keys(e).map((function(n){return m(m({},e[n]),x[n])}))}),[e,x]),o=(0,i.useMemo)((function(){return t.map((function(n){return{title:n.title,href:"#".concat(n.namespace)}}))}),[t]);return i.createElement(f.Z,{titleList:o},t.map((function(n){return i.createElement(d.AN,(0,r.Z)({key:n.namespace},n))})))}}}]);