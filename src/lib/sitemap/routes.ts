import RouteCategory from "./category";
import Route from "./route";

/**
 * Well-known routes on the website.
 */
type Routes = RouteCategory[];

export const useBasicRoutes = (): Route[] => ([
  {
    name: "Meny",
    href: "/meny",
  },
  {
    name: "Blogg",
    href: "/blogg",
  },
  {
    name: "Schema",
    href: "/schema",
  },
  {
    name: "Digibruh",
    href: "/digibruh",
  },
  {
    name: "Nyheter",
    href: "/nyheter",
  },
]);

/**
 * React hook to use the routes.
 */
export const useRoutes = (): Routes => [
  {
    name: "Navigera",
    routes: useBasicRoutes(),
  },
  {
    name: "Organisationen",
    routes: [{
      name: "Författare",
      href: "/författare",
    }],
  },
  {
    name: "Resurser",
    routes: [
      {
        name: "Maträtter",
        href: "/maträtter",
      },
      {
        name: "Serverstatus",
        href: "https://status.södermalmsskolan.com",
      },
    ],
  },
];

export default Routes;