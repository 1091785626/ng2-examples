# Extracting Selectors for Reuse

Through the course of building your application you will often utilize similar queries, or projections of state in your views. A common way to eliminate the duplication of this logic is to place popular selections into services, injecting these services where needed in your components or other services. While this certainly works, there is another more flexible, composable way to tackle this issue.

Because nothing about these projections is Angular specific, we can export each small query, or 12 selector independantly, without the need for Angular service wrapping. Leveraging the let operator, these selectors can then be mixed and matched for the desired result, whether in components, services, or middleware. This toolbox of targeted, composable queries is called the selector pattern.

To accomplish this we will create a new file to house our application selectors. We can then extract the projection function being applied in combineLatest to filter people and produce statistics into a selector.
[原文地址](https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse)

# 目录结构

以路由名字划分文件夹，比如`test`，然后在里面创建selectors

# 引入reselect