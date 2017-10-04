// Given a binary tree, return the inorder traversal of its nodes' values.
//
//
// For example:
// Given binary tree [1,null,2,3],
//
//    1
//     \
//      2
//     /
//    3
//
//
//
// return [1,3,2].
//
//
// Note: Recursive solution is trivial, could you do it iteratively?


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var dfs = function (result, node) {
    if (!node) return ;
    dfs(result, node.left);
    result.push(node.val);
    dfs(result, node.right);
    return ;
};
var inorderTraversal = function(root) {
    var result = [];
    dfs(result, root);
    return result;
};
