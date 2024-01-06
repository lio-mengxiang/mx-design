import { CustomContent } from '../locale';

const code = `
import { Checkbox, Space } from '@mx-design/web';

function App() {
  const Card = ({ item, checked }) => {
    const customCheckboxCard = {
      padding: '10px 16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '250px',
      boxSizing: 'border-box',
      border: \`1px solid \${checked ? '#cc449b' : '#ddd'}\`,
      color: checked ? '#cc449b' : ''
    }

    return (
      <div style={customCheckboxCard} key={item}>
        <strong>Checkbox Card {item}</strong>
        <div>this is a text</div>
      </div>
    )
  }

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '24px',
    padding: '0 8px',
    border: '1px solid transparent',
    background: 'var(--bg-color-component)',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '22px'
  }
  return (
    <div>
      <div
        style={{ marginBottom: 20 }}
      >
        <Checkbox.Group defaultValue={['Beijing']} >
          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
            return (
              <Checkbox key={item} value={item} style={tagStyle}>
                {({ checked }) => {
                  return (
                    <div key={item} style={{ color: checked ? '#cc449b' : '' }}>
                      {item}
                    </div>
                  );
                }}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
      <Checkbox.Group defaultValue={[1]}>
        {[1, 2].map((item) => {
          return (
            <Checkbox key={item} value={item}>
              {({ checked }) => {
                return <Card item={item} checked={checked} />;
              }}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </div>
  );
};`;

export const customContent = {
  code,
  namespace: CustomContent,
};
