// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 

var minDepth = function(root) {
 return root==null ? 0 : root.left==null ? minDepth(root.right) + 1 : 
                                            root.right == null? minDepth(root.left)+1 : 
                                                      Math.min(minDepth(root.left), minDepth(root.right))+1;
};
