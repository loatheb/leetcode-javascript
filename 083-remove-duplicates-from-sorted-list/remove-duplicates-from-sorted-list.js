// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.


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
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var prev = head;
    var next = head.next;
    while (next) {
        if (next.val !== prev.val) {
            prev.next = next;
            prev = next;
        }
        next = next.next;
    }
    prev.next = null;
    return head;
};
