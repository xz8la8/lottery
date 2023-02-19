/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 999,
    text: "正在抽取新一年的幸运与美好送给蚂蚁足球队",
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "欧足联礼品套装",
    img: "../img/anteur.jpg",
  },
  {
    type: 2,
    count: 2,
    text: "一等奖",
    title: "欧洲杯书包",
    img: "../img/anteur.jpg",
  },
  {
    type: 3,
    count: 4,
    text: "二等奖",
    title: "欧洲杯足球+围巾",
    img: "../img/anteur.jpg",
  },
  {
    type: 4,
    count: 10,
    text: "三等奖",
    title: "蚂蚁足球队围巾",
    img: "../img/anteur.jpg",
  },
  {
    type: 5,
    count: 10,
    text: "阳光普照奖",
    title: "欧洲旅行套装",
    img: "../img/anteur.jpg",
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
// const EACH_COUNT = prizes.map(({count}) => count); // 一次抽完
const EACH_COUNT = prizes.map(({ count }) => (count % 2 ? count : count / 2)); // 一半一半抽
EACH_COUNT[0] = 0;
/**
 * 卡片公司名称标识
 */
const COMPANY = "AntFC";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
