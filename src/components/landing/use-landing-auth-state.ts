import { Route as RootRoute } from "@/routes/__root";

export function useLandingAuthState() {
  const { isAuthenticated } = RootRoute.useRouteContext();

  return {
    isAuthenticated,
  };
}
