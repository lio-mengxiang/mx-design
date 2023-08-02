## Preface

- [The github address of this article component](https://github.com/lio-mengxiang/mx-design/tree/main/packages/mx-design-web/src/GridLayout)
- [This article demo](https://lio-mengxiang.github.io/mx-design/#/components/gridLayout)
## Why do we need such a component

Now the domestic(china) and foreign mainstream react component libraries will have Layout component . In China, there are basically two components to realize Layout component:
- Grid grid layout component(use flex)
- Layout component(use flex)

It is because the compatibility of early browsers with grid layout is not good, so these libraries basically use flex layout to achieve complex two-dimensional layout.

But today grid layout compatibility is good, as shown below

![Alt text](image.png)

And obviously grid layout far exceeds flex when dealing with more complex two-dimensional layouts. That's why it appeared. So my react ui component library directly uses the GridLayout component to replace the above two components (Grid and Layout) of the traditional domestic component library.


### Ant design's layout component example is as follows:

![Alt text](image-1.png)
### The element plus layout component example is as follows:

![Alt text](image-2.png)

Someone who have used it know that these components are mainly to help us layout, and can set the layout style under different screen sizes.

If we want to layout in the following style, the above layout components are more troublesome to implement, you might as well try it:


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de19cd471abe43c991e0c35dbd874322~tplv-k3u1fbpfcp-watermark.image?)

I started to write by flex. I always felt that the code was very inelegant, and there were many conditional judgments. Later, I thought, we are a new project, not compatible with IE, why not use grid layout, but it is not difficult to write pure css for grid layout. How to encapsulate it into a common component, and use it to:

### Replace the grid component of ant design and other similar components implemented in flex

Here comes the problem. There is no such component in the general component library on the market. What should I do? Write it by hand. Referring to the open source project styled-css-grid, we use react functional components to implement it, with online examples. Because the code only involves css encapsulation, vue can also learn from it and encapsulate its own super layout components.

The code is elegant with only two files. Let’s look at the effect first. All the following effects are available in the demo example at the beginning of the article:

Case 1 (the purpose of this case is to illustrate that our component has the ability to offset child elements):

![Alt text](image-3.png)

```JAVASCRIPT
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
   const cellStyle = { background: "var(--bg-color-component)", padding: '20px 0' };
   return (
     <GridLayout columns={3}>
       <Cell style={cellStyle} middle>Top Left</Cell>
       <Cell left={3} style={cellStyle} middle>Top Right</Cell>
       <Cell left={2} top={2} style={cellStyle} middle>Middle</Cell>
       <Cell top={3} style={cellStyle} middle>Bottom Left</Cell>
       <Cell top={3} left={3} style={cellStyle} middle>Bottom Right</Cell>
     </GridLayout>
   )
}
```
Case 2 (this case shows that our components have the ability to realize the grid systems):

![Alt text](image-4.png)

```javascript
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
   const cellStyle = { background: "var(--bg-color-component)", padding: '4px 0' };
   return (
       <GridLayout columns={6}>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={1} middle>1/6</Cell>
         <Cell style={cellStyle} width={2} middle>2/6</Cell>
         <Cell style={cellStyle} width={2} middle>2/6</Cell>
         <Cell style={cellStyle} width={2} middle>2/6</Cell>
         <Cell style={cellStyle} width={3} middle>1/3</Cell>
         <Cell style={cellStyle} width={3} middle>1/3</Cell>
         <Cell style={cellStyle} width={6} middle>1/1</Cell>
       </GridLayout>
   )
}
```

Case 3 (representing our component has the ability to be strange):
![Alt text](image-6.png)

Of course, we also have the functions of left alignment, right alignment, and middle alignment of flex itself:

![Alt text](image-5.png)

## The flex layout is not outdated, but it is different from the grid applicable scenarios

If you need to deal with slightly complicated two-dimensional layout scenarios, grid layout is obviously the strongest CSS layout method at present, but usually our business is relatively simple, which can be solved by using flex layout instead of using grid layout.

Why we need to encapsulate such a component is because some react ui libraries mentioned above use flex layout to achieve grid systems, but the implementation is relatively complicated because early browsers are not very compatible with grid layout .

Since there is no compatibility problem now, why not use native css to implement rasterized layout?
