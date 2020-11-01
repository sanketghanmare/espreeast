const { Parser } = require("acorn")
const traverse = require("ast-traverse");
const fs = require('fs')
const buffer = fs.readFileSync('input.js').toString()
// const ast = Parser.parse(buffer)


const espree = require("espree");

const ast = espree.tokenize(buffer,{ ecmaVersion: 6 });
console.log(ast)
let indent = 0;
traverse(ast, {
    pre: function(node) {
        console.log(Array(indent + 1).join(" ") + node);
        indent += 4;
    },
    post: function() {
        indent -= 4;
    }
});
console.log();

// console.log(ast.expression)
