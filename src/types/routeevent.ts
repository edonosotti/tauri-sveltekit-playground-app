export enum RouteEventType {
  DarkMode = "darkmode",
};

export interface RouteEvent {
  type: RouteEventType,
  data: unknown,
};
