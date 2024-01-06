import { Basic } from '../locale';

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
    <Anchor affix={false} items={titleList}></Anchor>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
