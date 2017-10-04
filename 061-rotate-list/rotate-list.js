// Given a list, rotate the list to the right by k places, where k is non-negative.
//
// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
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
var rotateRight = function(head, k) {
    if (!head) return null;
    var count = 1;
    var fakeHead = head;
    while (head.next) {
        count += 1;
        head = head.next;
    }

    if (k > count) {
        k = k % count;
    }

    var target = count - k;
    if (target <= 0) {
        return fakeHead;
    }
    head.next = fakeHead;
    head = head.next;
    count = 1;

    var tail = null;
    while (head) {
        if (count === target) {
            tail = head.next;
            head.next = null;
        }
        count += 1;
        head = head.next;
    }
    return tail;
};
