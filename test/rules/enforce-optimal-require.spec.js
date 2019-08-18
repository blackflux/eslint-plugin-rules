const rule = require('../../src/rules/enforce-optimal-require');
const tester = require('./rule-tester');

tester.run('enforce-optimal-require', rule, {
  valid: [
    {
      filename: '/dir/file-a.js',
      code: "const fileB = require('./file-b');"
    },
    {
      code: 'import _ from "lodash"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import find from "lodash.find"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import foo from "./foo"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import foo from "../foo"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import foo from "foo"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import foo from "./"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'import foo from "@scope/foo"',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var _ = require("lodash")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var find = require("lodash.find")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var foo = require("./foo")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var foo = require("../foo")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var foo = require("foo")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var foo = require("./")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var foo = require("@scope/foo")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var bar = require("./bar/index")',
      filename: '/dir/file-a.js'
    },
    {
      code: 'var bar = require("./bar")',
      filename: '/dir/bar/index.js'
    },
    {
      code: 'var bar = require("./bar")',
      filename: '<text>'
    },
    {
      code: 'var dynamic = "."; var bar = require(dynamic);'
    }
  ],
  invalid: [
    {
      filename: '/dir/file-a.js',
      code: "const fileB = require('../dir/file-b');",
      errors: ['Non optimal import path detected. Please use "./file-b"']
    },
    {
      code: 'import bar from "../dir/file-b"',
      errors: ['Non optimal import path detected. Please use "./file-b"'],
      filename: '/dir/file-a.js'
    },
    {
      code: 'var bar = require("../dir/file-b")',
      errors: ['Non optimal import path detected. Please use "./file-b"'],
      filename: '/dir/file-a.js'
    },
    {
      code: 'var bar = require("../dir/file-b")',
      errors: ['Non optimal import path detected. Please use "./file-b"'],
      filename: '/dir/file-a.js'
    },
    {
      code: 'var bar = require("../dir/.")',
      errors: ['Non optimal import path detected. Please use "./"'],
      filename: '/dir/index.js'
    },
    {
      code: 'var bar = require("../dir/")',
      errors: ['Non optimal import path detected. Please use "./"'],
      filename: '/dir/index.js'
    },
    {
      code: 'var bar = require("../dir/./././")',
      errors: ['Non optimal import path detected. Please use "./"'],
      filename: '/dir/index.js'
    },
    {
      code: 'var bar = require("../folder")',
      errors: ['Non optimal import path detected. Please use "./"'],
      filename: '/folder/index.js'
    }
  ]
});
