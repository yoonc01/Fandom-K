import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error", // Prettier 규칙을 ESLint에서 오류로 표시
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier, // Prettier 설정 추가
];
