# VueTimeSlot 

VueTimeSlot 是一项预约时间组件，concise design设计风格，时间轴为早7-晚11，可自由选择，并且非常方便，将返回一个时间数组



![](http://whxxw.oss-cn-hangzhou.aliyuncs.com/5683974fd8b6e145e14b26f3e54327e3.png)



安装

>yarn add vue3-time-slot

使用

> 在页面中引入
>
> import VueTimeSlot from "vue3-time-slot";
>
> 即可

如果是在ts项目中使用，报错的话，暂时没用设置声明文件,可以暂时在你的声明文件中，写下下面这一句声明

> declare module 'vue3-time-slot'

# Apis

### Props

### Event

**name** | **params** | **usage** | **description** |

:---: | :---: | :---: | :---: |

ok  | v:Date[] | @ok="ok" | ok| 

cancel  | event | @cancel="cancel" | cancel|

