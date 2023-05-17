import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  //Event 接口的只读属性 currentTarget 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素，而 Event.target 则是事件触发的元素。
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  //JS引用CSS时不要用与直接操作CSS相关的API。例如 .css() / .show() / .hide() 等。改用 。addClass() / .removeClass() 等。
  //样式与控制分离。JS只负责控制，CSS只负责样式。
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    //eq() 方法将匹配元素集缩减值指定 index 上的一个。 .eq(0)指遍历元素并指定第一个。
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger('click')
