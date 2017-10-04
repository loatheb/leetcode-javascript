// Sort a linked list using insertion sort.


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

var insetList = function (sortedList, item) {
    if (!sortedList) return null;
    var fakeHead = new ListNode(-1);
    fakeHead.next = sortedList;
    sortedList = fakeHead;
    while (sortedList.next) {
        if (item.val < sortedList.next.val) {
            item.next = sortedList.next;
            sortedList.next = item;
            return fakeHead.next;
        }
        sortedList = sortedList.next;
    }
    sortedList.next = item;
    return fakeHead.next;
}
var insertionSortList = function(head) {
    if (!head || !head.next) return head;
    var sorted = head;
    var result = sorted;
    var unsorted = head.next;
    sorted.next = null;
    while (unsorted) {
        var temp = unsorted.next;
        unsorted.next = null;

        sorted = insetList(sorted, unsorted);
        unsorted = temp;
    }
    return sorted;
};
