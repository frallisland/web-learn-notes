// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    let [str, st, ed]=input_array[0].split(' ');
    let chrs=str.split('');

    let [stIdx, edIdx]=[0, chrs.length-1];

    for(let i=0; i<chrs.length-1; i++){
        if(chrs[i]===st){
            stIdx=i;break;
        }
    }
    for (let i = chrs.length-1; i >=0 ; i--) {
        if(chrs[i]===ed){
            edIdx=i;break;
        }
    }
    for(let l=stIdx, r=edIdx; l<r; l++, r--){
        [chrs[l], chrs[r]]=[chrs[r], chrs[l]];
    }
    let ans=chrs.join('');
    console.log(ans);
});