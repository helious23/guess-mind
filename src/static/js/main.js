(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = void 0;

var handleMessageNotif = function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
};

exports.handleMessageNotif = handleMessageNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBVTtBQUMxQyxNQUFRQyxPQUFSLEdBQThCRCxJQUE5QixDQUFRQyxPQUFSO0FBQUEsTUFBaUJDLFFBQWpCLEdBQThCRixJQUE5QixDQUFpQkUsUUFBakI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZ0JBQTZCRCxPQUE3QjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlTWVzc2FnZU5vdGlmID0gKGRhdGEpID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9IDogJHttZXNzYWdlfWApO1xufTtcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

var sendMessage = function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
};

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTE2YTYwYzEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUMvQkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRCxDQUhEOztBQUtBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNoQ1IsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRCxDQUZEOztBQUlBUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWYgfSBmcm9tIFwiLi9jaGF0XCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcblxuY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xuICBjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XG59O1xuXG5jb25zdCBzZXROaWNrbmFtZSA9IChuaWNrbmFtZSkgPT4ge1xuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XG59O1xuXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcbiJdfQ==
},{"./chat":1}]},{},[2])