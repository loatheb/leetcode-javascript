// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
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
    if (l1) res.next = l1;
    if (l2) res.next = l2;
    return temp.next;
};
var mergeKLists = function(lists) {
    var result = lists[0] || null;
    for (var i = 1, l = lists.length; i < l; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};
