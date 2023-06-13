import { Container } from '../locale';

const code = `
import { Affix } from '@mx-design/web';

function App() {
  const [container, setContainer] = React.useState(null);
  const [affixed, setAffixed] = React.useState(false);
  const affixRef = React.useRef(null);

  const handleFixedChange = (affixed, { top }) => {
    console.log('top', top);
    setAffixed(affixed);
  };

  const backgroundStyle = {
    height: '1500px',
    paddingTop: '100px',
    backgroundColor: '#fff',
    backgroundImage:
      \`linear-gradient(45deg,#ddd 25%,transparent 0),
      linear-gradient(45deg,transparent 75%,#ddd 0),
      linear-gradient(45deg,#ddd 25%,transparent 0),
      linear-gradient(45deg,transparent 75%,#ddd 0)\`,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0,15px 15px,15px 15px,0 0',
  };

  return (
    <div
      style={{
        borderRadius: '3px',
        height: '400px',
        overflowX: 'hidden',
        overflowY: 'auto',
        overscrollBehavior: 'none',
      }}
      ref={setContainer}
    >
      <div style={backgroundStyle}>
        <Affix
          offsetTop={50}
          container={container}
          zIndex={5}
          onFixedChange={handleFixedChange}
          ref={affixRef}
        >
          <Button>affixed: {\`\${affixed}\`}</Button>
        </Affix>
      </div>
    </div>
  );
}`;

export const container = {
  code,
  namespace: Container,
};
