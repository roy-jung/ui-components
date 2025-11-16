import { TanstackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import Gnb from '@/components/gnb';

export const Route = createRootRoute({
  component: () => (
    <>
      <Gnb />
      <main>
        <Outlet />
      </main>
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
});
