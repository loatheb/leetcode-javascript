// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
//
//
// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.


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
    var fakeHead = new ListNode(-1);
    fakeHead.next = head;
    head = fakeHead;
    var isDup = false;
    while (head.next) {
        var current = head.next;
        while (current.next) {
            if (current.val === current.next.val) {
                current = current.next;
                isDup = true;
            } else {
                break;
            }
        }
        if (isDup) {
            head.next = current.next;
        } else {
            head.next = current;
            head = head.next;
        }
        isDup = false;
    }
    return fakeHead.next;
};
