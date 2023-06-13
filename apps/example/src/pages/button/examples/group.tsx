import { Group } from '../locale';

const code = `
import { Button, IconArrowBottom } from '@mx-design/web';

function App() {
  const ButtonGroup = Button.Group;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 200px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <ButtonGroup>
        <Button type="brand">Publish</Button>
        <Button type="brand" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="outline">Publish</Button>
        <Button type="outline" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="text">Publish</Button>
        <Button type="text" icon={<IconArrowBottom />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="brand" status="warning">
          Publish
        </Button>
        <Button type="brand" status="warning" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="outline" status="warning">
          Publish
        </Button>
        <Button type="outline" status="warning" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="text" status="warning">
          Publish
        </Button>
        <Button type="text" status="warning" icon={<IconArrowBottom />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="brand" status="error">
          Publish
        </Button>
        <Button type="brand" status="error" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="outline" status="error">
          Publish
        </Button>
        <Button type="outline" status="error" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="text" status="error">
          Publish
        </Button>
        <Button type="text" status="error" icon={<IconArrowBottom />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="brand" status="success">
          Publish
        </Button>
        <Button type="brand" status="success" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="outline" status="success">
          Publish
        </Button>
        <Button type="outline" status="success" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="text" status="success">
          Publish
        </Button>
        <Button type="text" status="success" icon={<IconArrowBottom />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="brand" status="default">
          Publish
        </Button>
        <Button type="brand" status="default" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="outline" status="default">
          Publish
        </Button>
        <Button type="outline" status="default" icon={<IconArrowBottom />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="text" status="default">
          Publish
        </Button>
        <Button type="text" status="default" icon={<IconArrowBottom />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="brand" icon={<IconFavorite />} />
        <Button type="brand" icon={<IconFabulous />} />
        <Button type="brand" icon={<IconGood />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="outline" icon={<IconFavorite />} />
        <Button type="outline" icon={<IconFabulous />} />
        <Button type="outline" icon={<IconGood />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button type="text" icon={<IconFavorite />} />
        <Button type="text" icon={<IconFabulous />} />
        <Button type="text" icon={<IconGood />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button disabled type="brand" icon={<IconFavorite />} />
        <Button disabled type="brand" icon={<IconFabulous />} />
        <Button disabled type="brand" icon={<IconGood />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button disabled type="outline" icon={<IconFavorite />} />
        <Button disabled type="outline" icon={<IconFabulous />} />
        <Button disabled type="outline" icon={<IconGood />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button disabled type="text" icon={<IconFavorite />} />
        <Button disabled type="text" icon={<IconFabulous />} />
        <Button disabled type="text" icon={<IconGood />} />
      </ButtonGroup>
    </div>
  );
}`;

export const group = {
  code,
  namespace: Group,
};
