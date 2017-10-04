// Find the sum of all left leaves in a given binary tree.
//
// Example:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.


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
var sumOfLeftLeaves = function(root, isLeft = false) {
    if (!root) return 0;
    if (!root.left && !root.right) return isLeft ? root.val : 0;
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
