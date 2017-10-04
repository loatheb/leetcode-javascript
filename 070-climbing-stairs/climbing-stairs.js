// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var f1 = 2;
    var f2 = 1;
    if(n == 1) {
        return f2;
    } else if(n == 2) {
        return f1;
    }

    var fn;
    for(var i = 3; i <= n; i++) {
        fn = f1 + f2;
        f2 = f1;
        f1 = fn;
    }
    return fn;
};
