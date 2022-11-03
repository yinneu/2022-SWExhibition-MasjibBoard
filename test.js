// 네이버 map api를 받아와서 검색할 예정
// 네이버 검색 API 예제 - 블로그 검색 => 지역 검색 => 가게명, 주소 정도로만 나옴
var express = require("express");
var app = express();
var client_id = "gQlFJxjgkP7TjVhHF5md";
var client_secret = "MjOz2t4JSa";

app.get("/test", function (req, res) {
  var api_url =
    //"https://openapi.naver.com/v1/search/blog?query=" +
    "https://openapi.naver.com/v1/search/local?query=" +
    encodeURI(req.query.query); // JSON 결과
  var request = require("request");

  var options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
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
