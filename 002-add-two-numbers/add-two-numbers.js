// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


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
var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    var l3 = new ListNode(0), fakeHead = l3, carry = 0, sum = 0;
    while (l1 || l2 || carry) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        l3.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        l3 = l3.next; l1 = l1 && l1.next; l2 = l2 && l2.next;
    }
    return fakeHead.next;
};
