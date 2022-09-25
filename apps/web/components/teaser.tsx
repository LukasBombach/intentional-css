type ReactComponent = () => JSX.Element;

interface Component extends ReactComponent {
  layout: <T>(this: T, ...args: any[]) => T;
  text: <T>(this: T) => T;
  tracking: <T>(this: T) => T;
  seo: <T>(this: T) => T;
}

function component(): Component {}

const Teaser = component().layout().text().tracking().seo();

const Layout = component().layout`
  rows:
    aspectRatio: 16/9;

    gap: 16px;

    height: 1 line;

    gap: sm;

    height: 3 lines;

    gap: sm;

    height: 24px;
`;

const Layout2 = component().layout("vstack", {});
