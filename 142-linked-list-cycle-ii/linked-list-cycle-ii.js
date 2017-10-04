// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
//
//
//
// Note: Do not modify the linked list.
//
//
// Follow up:
// Can you solve it without using extra space?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    var hash = {};
    while(head) {
        if (hash[head.val]) {
            for(let i = 0; i < hash[head.val].length; i++) {
                if (head === hash[head.val][i]) {
                    return hash[head.val][i];
                }
            }
            hash[head.val].push(head);
        } else {
            hash[head.val] = [head];
        }
        head = head.next;
    }
    return null;
};
