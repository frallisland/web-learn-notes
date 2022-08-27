// // leetcode 跳跃游戏IV
// let str = "hello world";
// let idx1 = str.indexOf("d", 11);
// let idx2 = str.indexOf("h", -1);
// console.log(idx1, idx2);

function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))