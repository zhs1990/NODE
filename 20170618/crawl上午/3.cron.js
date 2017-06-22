let CronJob = require("cron").CronJob;
//创建任务实例
/*
* 秒 分 小时 日期 月份 星期
* 1，* 代表所有可能出现的值
* 2，固定值 精确匹配
* 3，枚举值   1,3,5,7,9  用逗号隔开的枚举值
* 4，用- 表示区间 表示一个范围的值
* 5，星/5 每隔5秒执行一次
* */
//每周一和周五10点执行一个任务
let job = new CronJob("0 0 22 * * 1,5",function () {
    console.log(new Date().toLocaleString());
});
//任务开始
job.start();