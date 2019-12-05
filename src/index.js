import { checkTypo } from './check'

export default function ({ types: t }) {
  const plugin = {
    name: 'error-massage-is-not-error-message',
    visitor: {
      StringLiteral(path) {
        const typo = checkTypo(path.node.value);
        if (typo) {
          path.replaceWith(t.stringLiteral(typo.fix));
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
