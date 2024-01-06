import { CustomIcon } from '../locale';

const code = `
import { useNotification, Space, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();

  const IconFace = createIcon({
    viewBox: '0 0 36 36',
    paths: (
      <>
        <path
          fill="#FFCB4C"
          d="M35.597 14.232c2.083 9.72-4.108 19.289-13.828 21.372C12.049 37.687 2.48 31.496.397 21.776C-1.686 12.056 4.506 2.487 14.225.404c9.72-2.084 19.289 4.108 21.372 13.828"
        />
        <path fill="#F4F7F9" d="M29.284 9.012a6.734 6.734 0 1 1-13.169 2.821a6.734 6.734 0 0 1 13.169-2.821z" />
        <circle fill="#292F33" cx="22.306" cy="9.291" r="2.037" />
        <path fill="#F4F7F9" d="M14.088 14.282a3.938 3.938 0 1 1-7.7 1.65a3.938 3.938 0 0 1 7.7-1.65z" />
        <circle transform="rotate(-12.095 10.236 15.853)" fill="#292F33" cx="10.238" cy="15.857" r="1.942" />
        <path
          fill="#65471B"
          d="M18.625 20.937c-3.543.759-5.981.85-9.01.908c-.691.015-1.955.419-1.536 2.375c.838 3.911 6.379 7.837 12.642 6.495c6.262-1.342 9.708-7.194 8.87-11.105c-.419-1.956-1.739-1.808-2.375-1.536c-2.786 1.187-5.048 2.104-8.591 2.863z"
        />
        <path fill="#E8596E" d="M11 24.004v6c0 3 2 6 6 6s6-3 6-6v-6H11z" />
        <path fill="#DD2F45" d="M17 31.883a.545.545 0 0 0 .545-.545v-6.295h-1.091v6.295a.546.546 0 0 0 .546.545z" />
        <path
          fill="#FFF"
          d="M10.034 23.801s3.143.349 9.01-.908c5.867-1.257 8.591-2.864 8.591-2.864s-1.117 4.33-7.962 5.797c-6.845 1.467-9.639-2.025-9.639-2.025z"
        />
      </>
    ),
  });

  return (
    <Button
      onClick={() =>
        Notification.add({
          icon: <IconFace />,
          title: 'Upgrade',
          content: 'Ready to upgrade ArcoDesign 2.0',
        })
      }
    >
      Info
    </Button>
  );
};`;

export const customIcon = {
  code,
  namespace: CustomIcon,
};
