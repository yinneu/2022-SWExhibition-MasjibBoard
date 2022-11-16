// NAVER Search Local : 네이버 지역검색 api를 사용하여 가게정보 가져오기
// 가게이름, 카테고리, 위도 경도
// body-parser, request 설치
const express = require("express");
const app = express();
const mysql = require("mysql");
const dbconfig = require("../config/database.js");
const connection = mysql.createConnection(dbconfig);

const client_id = "api아이디";
const client_secret = "api시크릿번호";

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 쿼리스트링 인코딩 처리
var request = require("request");
const qs = require("querystring");

let url = `http://localhost:3000/test?query=${qs.escape("춘천 --")}`;

request.get(url, (err, res) => {
  if (err) throw err;
  console.log(res.body); // {"q":"apple 쥬스"}
});

//Naver 지역 API
app.get("/test", function (req, res) {
  var api_url =
    //"https://openapi.naver.com/v1/search/local?query=" +
    "https://openapi.naver.com/v1/search/image?query=" +
    encodeURI(req.query.query); // JSON 결과

  var options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let info = JSON.parse(body).items[0];

      //가게 이름
      let tagcut = info.title.replace(/(<([^>]+)>)/gi, "");
      let repTitle = tagcut.replace("&amp;", "");
      console.log(repTitle);

      //데이터 베이스에 추가
      let sql = `insert into Random_mj.mjList(title, address, category, mapx, mapy) values("${repTitle}", "${info.roadAddress}", "${info.category}", "${info.mapx}", "${info.mapy}")`;
      connection.query(sql, function (error, result, field) {
        if (error) throw error;
        console.log(result);
      });

      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://localhost:3000/test?query=검색어 app listening on port 3000!"
  );
});
