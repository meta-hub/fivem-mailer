/*
  Credits to https://smtpjs.com/v3/smtp.js for the Email class.
*/

const __VERSION = '1.0.00'
const token = "replace-this-with-your-token";

const name = GetCurrentResourceName();

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Email = { 
  send: function (a) { 
    return new Promise(function (n, e) { 
      a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; 
      var t = JSON.stringify(a); 
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { 
        n(e) 
      })
    }).catch(error => {console.log(error.message); })
  }, ajaxPost: function (e, n, t) { 
    var a = Email.createCORSRequest("POST", e); 
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { 
      var e = a.responseText; null != t && t(e) 
    }, a.send(n) 
  }, ajax: function (e, n) { 
    var t = Email.createCORSRequest("GET", e); 
    t.onload = function () { 
      var e = t.responseText; 
      null != n && n(e) 
    }, t.send() 
  }, createCORSRequest: function (e, n) { 
    var t = new XMLHttpRequest; 
    return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t 
  } 
};

function send(t,f,s,b) {
  console.log(t)
  Email.send({
      SecureToken: token,
      To : t,
      From : f,
      Subject : s,
      Body : b
  }).then(
    function(message) {
      var res = (message == "OK") ? "Success." : "Failure";
      console.log("["+name+"] Result : " + res );
    }
  );
};

exports('send', send);
onNet('fivem-mailer:send', send);
