module.exports = {
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:lodash/recommended", "plugin:jest/recommended", "plugin:flowtype/recommended"],
  "plugins": ["flowtype", "jest", "react", "lodash"],
  "globals": {
    "Generator": true,
    "waitFor": true,
    "device": true,
    "__DEV__": true,
    "element": true,
    "by": true,
    "module": true,
    "setTimeout": true,
    "clearTimeout": true,
    "Promise": true,
    "global": true,
    "console": true,
    "setInterval": true,
    "clearInterval": true,
    "navigator": true,
    "fetch": true,
    "Headers": true,
    "Request": true,
    "process": true
  },
  "settings": {
    "react": {
      "version": "16.6",
      "flowVersion": "0.81"
    }
  },
  "rules": {
    "no-console": ["error"],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": [
      "error",
      120,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "object-curly-spacing": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "prefer-const": ["error"],
    "prefer-arrow-callback": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "curly": ["error", "all"],
    "no-implicit-coercion": ["error"],
    "no-multiple-empty-lines": ["error", {"max": 1, "maxEOF": 0, "maxBOF": 0}],
    "quotes": ["error", "single"],
    "no-multi-spaces": ["error"],
    "semi": ["error", "never"],
    "no-unused-vars": ["error"],
    "spaced-comment": ["error", "always"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "no-unused-expressions": ["error",
      {"allowShortCircuit": false, "allowTernary": false, "allowTaggedTemplates": false}],
    "react/display-name": ["off"],
    "react/jsx-handler-names": ["error"],
    "react/sort-comp": ["error"],
    "react/jsx-curly-brace-presence": ["error", {"props": "never", "children": "never"}],
    "react/jsx-curly-spacing": ["error", {"when": "never", "allowMultiline": true, "children": {"when": "never"}}],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always", "beforeClosing": "never" }],
    "react/jsx-no-bind": ["error", {"ignoreRefs": true}],
    "react/no-unused-prop-types": [2, {"customValidators": [], "skipShapeProps": true}],
    "func-style": ["error", "expression", { "allowArrowFunctions": true }],
    "no-trailing-spaces": ["error"],
    "brace-style": ["error"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "space-infix-ops": "error",
    "no-negated-condition": "error",
    "comma-dangle": [2, "never"],
    "keyword-spacing": ["error"]
  },
  "env": {
    "jest/globals": true
  }
};
