//npm i selenium-webdriver
//npm i chromedriver
const express = require("express");
const app = express();
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);

const { Builder, By, Key, until } = require("selenium-webdriver");
let row;

connection.query("SELECT title from random_mj.mjlist", (error, rows) => {
  if (error) throw error;
  //console.log("User info is: ", rows[0].title);
  row = rows;
  // console.log(row);
});

//반복
setTimeout(() => {
  for (let i = 3; i < 4; i++) {
    setTimeout(function () {
      console.log(row[i].title);
      (async function example() {
        let driver = await new Builder().forBrowser("chrome").build();

        try {
          // 네이버맵 실행
          await driver.get("https://map.naver.com/v5/search");

          //입력창이 나올때까지 대기
          await driver.wait(
            until.elementLocated(By.css(".input_search")),
            10000
          );

          // 검색창 아이디로 element얻어오기
          let searchInput = await driver.findElement(By.css(".input_search"));

          // 키워드 입력 후 엔터
          let keyword = `춘천 ${row[i].title}`;
          searchInput.sendKeys(keyword, Key.ENTER);

          try {
            await driver.wait(() => {
              return false;
            }, 5000);
          } catch (err) {}

          //css selector로 가져온 element가 위치할때까지 최대 10초간 대기
          await driver.wait(
            until.elementLocated(By.css("#searchIframe")),
            10000
          );

          //상세페이지가 바로 나오지 않는다면
          if ((await driver.findElements(By.css("#entryIframe"))).length == 0) {
            //프레임변경
            await driver.switchTo().defaultContent();
            await driver.switchTo().frame("searchIframe");

            try {
              await driver.wait(() => {
                return false;
              }, 4000);
            } catch (err) {}

            let store;

            //.N_KDL : 단일 리스트 페이지 <a> 태그 클릭
            if ((await driver.findElements(By.css(".tzwk0"))).length == 0) {
              store = await driver.findElements(By.className("P7gyV"));
            } else {
              store = await driver.findElements(By.className("tzwk0"));
            }

            await store[0].click();
          }

          try {
            await driver.wait(() => {
              return false;
            }, 4000);
          } catch (err) {}

          //프레임변경
          await driver.switchTo().defaultContent();
          await driver.switchTo().frame("entryIframe");

          console.log(i + " 번째");
          //썸네일 이미지
          let imageSc = await driver
            //.findElement(By.id("ibu_2"))
            .findElement(By.css(".hEm4D .K0PDV"))
            .getCssValue("background-image");
          let image = imageSc.replace(/[\)\(\"]/g, "");
          image = image.replace("url", "");
          //console.log(image);

          //전화번호
          let contact = "정보없음";
          if ((await driver.findElements(By.css(".dry01"))).length != 0) {
            contact = await driver.findElement(By.className("dry01")).getText();
          }
          console.log(contact);

          //url
          let url = (await driver.getCurrentUrl()).toString();
          //console.log(url);

          //insert db
          //데이터 베이스에 추가
          let sql = `update Random_mj.mjList set image="${image}", contact="${contact}", link="${url}" where title = "${row[i].title}"`;
          connection.query(sql, function (error, result, field) {
            if (error) throw error;
            console.log(result);
          });
        } finally {
          driver.quit();
        }
      })();
    }, 2000);
  }
}, 3000);
