import { Link, useParams } from '@tanstack/react-router';
import classNames from 'classnames';
import type { ChildRoute, ParentRoute, Route, RoutePath } from '@/routeMap';
import { gnbRootList, isParentRoute, routeMap } from '@/routeMap';

interface GnbItemProps {
  link: RoutePath;
  route: Route;
}
interface ParentGnbItemProps extends GnbItemProps {
  route: ParentRoute;
}
interface ChildGnbItemProps extends GnbItemProps {
  route: ChildRoute;
}

const ParentGnbItem = ({
  link,
  route: { name, link: routeLink, children },
}: ParentGnbItemProps) => {
  const { _splat } = useParams({ strict: false });
  const currentPath = _splat as RoutePath;
  const open = children.includes(currentPath);
  const actualLink = routeLink ?? link;

  return (
    <li className={classNames('parent', `items-${children.length}`, { open })}>
      <Link to="/$" params={{ _splat: actualLink }}>
        {name}
      </Link>
      <ul className="subRoutes">
        {children.map(r => (
          <GnbItem link={r} route={routeMap[r]} key={r} />
        ))}
      </ul>
    </li>
  );
};
const ChildGnbItem = ({
  link,
  route: { name, Component },
}: ChildGnbItemProps) => {
  const { _splat } = useParams({ strict: false });
  const currentPath = _splat as RoutePath;

  return (
    <li
      className={classNames({
        active: link === currentPath,
        disabled: !Component,
      })}
    >
      {Component ? (
        <Link to="/$" params={{ _splat: link }}>
          {name}
        </Link>
      ) : (
        name
      )}
    </li>
  );
};

const GnbItem = ({ link, route }: GnbItemProps) => {
  if (isParentRoute(route)) {
    return <ParentGnbItem link={link} route={route} />;
  }
  return <ChildGnbItem link={link} route={route} />;
};

const Gnb = () => {
  return (
    <aside>
      <h1>
        <Link to="/">
          UI 요소 모음 <sub>정재남</sub>
        </Link>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map(([link, r]) => (
          <GnbItem link={link} route={r} key={link} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
