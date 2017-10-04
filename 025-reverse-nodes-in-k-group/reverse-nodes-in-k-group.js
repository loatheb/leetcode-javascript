// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
//
//
// If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
//
// You may not alter the values in the nodes, only nodes itself may be changed.
//
// Only constant memory is allowed.
//
//
// For example,
// Given this linked list: 1->2->3->4->5
//
//
//
// For k = 2, you should return: 2->1->4->3->5
//
//
//
// For k = 3, you should return: 3->2->1->4->5


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
};

var reverseKGroup = function(head, k) {
    if (!head) return head;
    if (k === 1) return head;
    var count;
    var result = new ListNode(-1);
    var res = result;
    while (head) {
        var fakeHead = head;
        var next = null;
        count = 1;
        while (head && count !== k) {
            count += 1;
            head = head.next;
        }
        if (head && count === k) {
            next = head.next;
            head.next = null;
            result.next = reverseList(fakeHead);
            while (result.next) {
                result = result.next;
            }
            head = next;
        } else if (!head){
            while (result.next) {
                result = result.next;
            }
            result.next = fakeHead;
        }
    }
    return res.next;
};
