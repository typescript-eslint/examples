import { rules } from "./rules/index.js";

const { name, version } =
  // `import`ing here would bypass the TSConfig's `"rootDir": "src"`
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("../package.json") as typeof import("../package.json");

const plugin = {
  configs: {
    get recommended() {
      return recommended;
    },
  },
  meta: { name, version },
  rules,
};

const recommended = {
  plugins: {
    "example-typed-linting": plugin,
  },
  rules,
};

export = plugin;
