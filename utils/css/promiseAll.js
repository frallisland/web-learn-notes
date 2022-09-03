// 给Promise添加静态方法myAll，因为原生的all就是静态方法
Promise.myAll = function (promises) {
  if (!typeof promises[Symbol.iterator] === "function") {
    // 检查是否是可迭代类型
    const type = typeof promises;
    // 拼接错误提示字符串，基本数据类型要把值也提示给开发者
    return Promise.reject(
      `${type} ${
        type === "object" ? "" : promises
      } is not iterable (cannot read property Symbol(Symbol.iterator))`
    );
  }
};
