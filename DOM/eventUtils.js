// ********************************************
// 校验 input 的输入是否有效
// HTML 代码为 <input type="text" id="my-input" />
var input = document.getElementById("my-input");
input.addEventListener("keypress", checkName, false);

function checkName(e) {
  if (e.charCode < 97 || e.charCode > 122) {
    e.preventDefault();
  }
}
// ********************************************


// ********************************************
// 阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数
function stopEvent(e) {
  e.stopPropagation();
}

el.addEventListener("click", stopEvent, false);
// ********************************************


// ********************************************
// 阻止同一个事件的其他监听函数被调用
function l1(e) {
  e.stopImmediatePropagation();
}

function l2(e) {
  console.log("hello world");
}

el.addEventListener("click", l1, false);
el.addEventListener("click", l2, false);
// ********************************************


// ********************************************
// 事件的最底层节点和依次冒泡经过的所有上层节点
// HTML 代码如下
// <div>
//   <p>Hello</p>
// </div>
var div = document.querySelector("div");
var p = document.querySelector("p");

div.addEventListener(
  "click",
  function (e) {
    console.log(e.composedPath());
  },
  false
);
// [p, div, body, html, document, Window]
// ********************************************

