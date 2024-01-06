import { ScrollBoundary } from '../locale';

const code = `
import { Anchor } from '@mx-design/web';

function App() {
  const titleList = [
    {
      title: 'Basic',
      href: '#Basic',
    },
    {
      title: 'Affix',
      href: '#Affix',
    },
    {
      title: 'Lineless',
      href: '#Lineless',
    },
    {
      title: 'ScrollBoundary',
      href: '#ScrollBoundary',
    },
  ]

  return (
    <Anchor offsetTop={400} offset={-100} items={titleList}></Anchor>
  );
}`;

export const scrollBoundary = {
  code,
  namespace: ScrollBoundary,
};
