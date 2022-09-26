export {};

type ReactComponent = () => JSX.Element;

interface Component extends ReactComponent {
  layout: <T>(this: T, ...args: any[]) => T;
  text: <T>(this: T) => T;
  tracking: <T>(this: T) => T;
  seo: <T>(this: T) => T;
}

function component(): Component {}
function layout(...args: any[]): any {}
function text(...args: any[]): any {}

const Teaser = component().layout().text().tracking().seo();

const stack = layout`
  display: layout(stack);
  --rows: min-content 1rem 3rem 24px;
  --gap: var(--sm);
`;

const twoCols = layout`
  display: layout(columns);
  --cols: 168px 1fr;
  --gap: var(--md);
`;

const headline = text`
  font-family: var(--text-sans);
  font-weight:  var(--text-bold);
  font-size: var(--text-14);
  line-height: var(--line-120);
  color: var(--color-salems-fur);
`;

/*

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

const stack = (props: { gap: any }) => `
  display: grid;
  grid-template-columns: 100%;
  grid-gap: ${props.gap} 0;
`;
*/
