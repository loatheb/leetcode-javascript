// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var res = new ListNode(-1);
    var temp = res;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            res.next = l1;
            l1 = l1.next;
        } else {
            res.next = l2;
            l2 = l2.next;
        }
        res = res.next;
    }
    if (l1) {
        res.next = l1;
    }
    if (l2) {
        res.next = l2;
    }
    return temp.next;
};
