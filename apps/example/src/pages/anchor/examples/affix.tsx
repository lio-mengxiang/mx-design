import { Affix } from '../locale';

const code = `
import { Anchor } from '@mx-design/web';

function App() {
  const titleList = [
    {
      title: 'Title1',
      href: 'Title1',
      children: [
        {
          title: 'title1.1',
          href: 'title1.1',
        },
        {
          title: 'title1.2',
          href: 'title1.2',
        }
      ]
    },
    {
      title: 'Title2',
      href: 'Title2',
    },
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Anchor offsetTop={300} items={titleList}></Anchor>
    </div>
  );
}`;

export const affix = {
  code,
  namespace: Affix,
};
