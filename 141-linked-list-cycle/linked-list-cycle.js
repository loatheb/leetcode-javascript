// Given a linked list, determine if it has a cycle in it.
//
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    var faster = head;
    var slower = head;
    while (faster && faster.next) {
        faster = faster.next.next;
        slower = slower.next;
        if (slower === faster) return true;
    }
    return false;
};
