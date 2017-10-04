// Reverse a linked list from position m to n. Do it in-place and in one-pass.
//
//
//
// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,
//
//
// return 1->4->3->2->5->NULL.
//
//
// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseList = function (head) {
    var prev = null;
    var next = null;
    while (head) {
        var temp = head.next;
        prev = head;
        prev.next = next;
        next = prev;

        head = temp;
    }
    return prev;
}
var reverseBetween = function(head, m, n) {
    if (!head || !head.next) return head;
    if (m === n) return head;
    var fakeHead = new ListNode(0);
    fakeHead.next = head;
    var dupHead = fakeHead;

    var count = 0;
    var prev = null;
    var next = null;
    while (fakeHead) {
        if (count === m - 1) {
            prev = fakeHead;
        }
        if (count === n) {
            next = fakeHead.next;
            fakeHead.next = null;
        }
        count += 1;
        fakeHead = fakeHead.next;
    }

    var reverseHead = reverseList(prev.next);

    prev.next = reverseHead;

    head = dupHead;
    while (head.next) {
        head = head.next;
    }
    head.next = next;
    return dupHead.next;
};
