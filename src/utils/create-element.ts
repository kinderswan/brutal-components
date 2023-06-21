export const createElement = (tag: keyof HTMLElementTagNameMap, args: Record<string, any>) => {
  const el = document.createElement(tag);
  for (let key in args) {
    el[key] = args[key];
  }

  return el;
};
