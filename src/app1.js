import "./app1.css";
import $ from "jquery";

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n");
//只读的localStorage 属性允许访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。存储在 localStorage 的数据可以长期保留
//getItem() 作为 Storage 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value）。
$number.text(n || 100);

$button1.on("click", () => {
  let n = parseInt($number.text());
  //parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});