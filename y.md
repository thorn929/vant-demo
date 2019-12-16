+ hash ("#)
  + hash虽然出现在URL中，但不会被包括在HTTP请求中。它是用来指导浏览器动作的，对服务器端完全无用，因此，改变hash不会重新加载页面

#### history.pushState()相比于直接修改hash主要有以下优势：
+ pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL
+ pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中
+ pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串
