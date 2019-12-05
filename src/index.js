import { checkTypo } from './check'

export default function ({ types: t }) {
  const plugin = {
    visitor: {
      StringLiteral(path) {
        const typo = checkTypo(path.node.value);
        if (typo) {
          path.replaceWith(babel.types.stringLiteral(typo.fix));
          path.skip();
        }
      },
      Identifier(path) {
        const typo = checkTypo(path.node.name);
        if (typo) {
          path.node.name = typo.fix;
        }
      }
    },
  };

  return plugin;
}
