export interface RouteModule {
  path: string;
  component: React.FC;
  isPublic?: boolean;
  special?: boolean;
  accessPage: string;
}
