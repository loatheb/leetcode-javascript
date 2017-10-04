// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
//
// You must do this in-place without altering the nodes' values.
//
//
// For example,
// Given {1,2,3,4}, reorder it to {1,4,2,3}.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 
var reverseList = function (head) {
    if (head === null || head.next === null) return head;
    var prev = new ListNode(0);
    prev.next = head;
    head = prev;
    var cur = prev.next;
    while(cur.next !== null) {
        var tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = prev.next;
        prev.next = tmp;
    }
    return prev.next;
}
var reorderList = function(head) {
    if (!head || !head.next) return;
    var fast = head;
    var slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var second = reverseList(slow.next);
    slow.next = null;
    var first = head;
    while (second) {
        var temp = second.next;
        second.next = first.next;
        first.next = second;
        
        first = first.next.next;
        second = temp;
    }
   
};
