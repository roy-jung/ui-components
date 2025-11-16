import type { ComponentType } from 'react';

const _routeMap = {
  root: {
    name: 'root',
    children: [],
  },
};

export type RoutePath = keyof typeof _routeMap;

type BaseRoute = { name: string; link?: RoutePath };
export type ParentRoute = BaseRoute & { children: RoutePath[] };
export type ChildRoute = BaseRoute & { Component: ComponentType | null };
export type Route = ChildRoute | ParentRoute;
export const routeMap = _routeMap as Record<RoutePath, Route>;

export const isParentRoute = (route: Route): route is ParentRoute =>
  'children' in route;
export const gnbRootList: [RoutePath, Route][] = (
  routeMap.root as ParentRoute
).children.map(r => [r, routeMap[r]]);
