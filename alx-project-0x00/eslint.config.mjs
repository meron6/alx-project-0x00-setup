import { FlatCompat } from "eslint-define-config";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Add custom rules here if needed
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    },
  },
];
