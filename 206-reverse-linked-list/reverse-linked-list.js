// Reverse a singly linked list.
//
// click to show more hints.
//
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?


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
var reverseList = function(head) {
    var temp = null;
    var next = null;
    while(head !== null) {
        temp = new ListNode(head.val);
        temp.next = next;
        next = temp;
        head = head.next;
    }
    return temp;
};
