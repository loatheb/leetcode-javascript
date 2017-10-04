// Given a singly linked list, determine if it is a palindrome.
//
// Follow up:
// Could you do it in O(n) time and O(1) space?


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
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    var dev = null;
    var slow = head;
    var fast = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow=slow.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while (slow) {
        if (slow.val !== head.val) {
            return false;
        }
        slow = slow.next;
        head = head.next;
    }
    return true;
};

var reverseList = function(head) {
    var prev = null;
    var next = null;
    while(head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
