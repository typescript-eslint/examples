import * as tsESTree from "@typescript-eslint/typescript-estree";
import * as tsutils from "ts-api-utils";

import ts from "typescript";

const { ast, services } = tsESTree.parseAndGenerateServices(
  `const hello = 'world';`,
  {
    projectService: {
      allowDefaultProject: ['estree.ts']
    },
  }
);

const typeChecker = services.program!.getTypeChecker();

function logNode(node: ts.Node) {
  const type = typeChecker.getTypeAtLocation(node);
  console.log("Node:\n  ", ts.SyntaxKind[node.kind], node.getText());

  if (!tsutils.isIntrinsicErrorType(type)) {
    console.log("Type:\n  ", typeChecker.typeToString(type));
  }

  console.log("");

  ts.forEachChild(node, logNode);
}

ts.forEachChild(services.esTreeNodeToTSNodeMap.get(ast), logNode);
