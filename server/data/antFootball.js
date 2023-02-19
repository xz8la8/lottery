var xlsx = require("node-xlsx");
var fs = require("fs");
var path = require("path");

const jiabin = ["童年", "胡巴", "新扎师妹"];

const dongzhan = [
  "姜涛",
  "臻理",
  "蒋敬",
  "岸子",
  "彪哥",
  "酒香",
  "六爷",
  "社长",
  "日春",
  "锦皇",
  "万沥",
  "楠哥",
  "马退敌",
  "刚山",
  "克赛",
  "语忌",
  "屹启",
  "红魔",
  "木合",
  "新峰",
  "雷震子",
];

const nanzhan = [
  "苍淼",
  "煊冰",
  "门希",
  "球霸",
  "铁骏",
  "林青",
  "正月",
  "禾彬",
  "凯淇",
  "弘德",
  "守持",
  "子汗",
  "梅戈",
  "纳纳（梅戈家属）",
];

const xizhan = [
  "慕川",
  "超粤",
  "道昆",
  "内德",
  "一万",
  "觉生",
  "盛战",
  "芳芳",
  "赛指",
  "K指",
  "景聿",
  "金琦",
  "大劉",
];

const beizhan = [
  "乔巴",
  "阡越",
  "燕客",
  "洋浩",
  "宗之",
  "潜隐",
  "小坡",
  "江蓝",
  "一丁",
  "马融",
  "风牧",
  "成宣",
  "凡晨",
  "兰成",
  "羽义",
  "水力",
];

const data = [["战区", "姓名", "类型"]]
  .concat(jiabin.map((name) => ["中战", name, "⚽️"]))
  .concat(dongzhan.map((name) => ["东战", name, "⚽️"]))
  .concat(nanzhan.map((name) => ["南战", name, "⚽️"]))
  .concat(xizhan.map((name) => ["西战", name, "⚽️"]))
  .concat(beizhan.map((name) => ["北战", name, "⚽️"]));

var worksheets = [
  {
    name: "蚂蚁足球队年会与会名单",
    data,
  },
];

var buffer = xlsx.build(worksheets);

fs.writeFileSync(path.resolve(__dirname, "./users.xlsx"), buffer, {
  encoding: "utf-8",
});
