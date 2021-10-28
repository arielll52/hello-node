const axios = require("axios");
let stockCode = "0050";
let today = "20211017"; // 自動給當天的日期
let format = "json";

async function searchStock() {
  try {
    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );

    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
}
searchStock();
