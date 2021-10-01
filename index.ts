// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function similarTrees(firstTree?: any, secondTree?: any): boolean {
  const getSizeTree = (tree: {}) => {
    let totalNodes: number = 0;
    const keyTrees = typeof tree === 'object' && Object.keys(tree);
    if (keyTrees?.length > 0) {
      totalNodes = keyTrees.length;
      keyTrees.forEach((keyTree) => {
        totalNodes = getSizeTree(tree[keyTree]) + totalNodes;
      });
      return totalNodes;
    } else {
      return totalNodes;
    }
  };
  return getSizeTree(firstTree) === getSizeTree(secondTree);
}
const first = {
  node1: { left1: 'node2', right1: 'node3' },
};

const object1 = {
  node1: {
    node2: { node4: 'value', node5: 'value' },
    node3: { node6: { node7: 'value' } },
  },
};
const object2 = {
  node1: {
    node2: { node4: 'value' },
    node3: { node5: 'value', node6: { node2: 'value' } },
  },
};

console.log(similarTrees(object1, object2));
