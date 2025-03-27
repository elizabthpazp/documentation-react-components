// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "ButtonCard", href: "/button-card", tag: "New" }, 
          { title: "CardProfile", href: "/card-profile", tag: "New" }, 
          { title: "Activities", href: "/activities", tag: "New" }, 
          { title: "GiftBox", href: "/gift-box", tag: "New" }, 
          { title: "TextMasking", href: "/text-masking", tag: "New" }, 
          { title: "Tree", href: "/tree", tag: "New" }, 
          { title: "TreeTriangle", href: "/tree-triangle", tag: "New" }, 
        ],
      },
      // { title: "Algolia Search", href: "/algolia-search", tag: "New" },
      //{ title: "Themes", href: "/themes" },
      // {
      //   title: "Customize",
      //   href: "/customize",
      // },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
