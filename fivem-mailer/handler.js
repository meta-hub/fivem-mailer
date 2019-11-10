/*
  Credits to https://smtpjs.com/v3/smtp.js for the Email class.
*/

const SecureToken = "replace-with-your-token"
const Mailer = "replace-with-your-sender-email"
const ResName = GetCurrentResourceName()

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

function send(to,subject,body) {
  Email.send({
      SecureToken: SecureToken,
      To : to,
      From : Mailer,
      Subject : subject,
      Body : body
  }).then(
    function(message) {
      var res = (message == "OK") ? "Success." : "Failure";
      console.log("["+ResName+"] Result : " + res );
    }
  );
};

exports('send', send);
onNet('fivem-mailer:send', send);


/* Test/Example Function
  var testTarget  = "replace-with-your-target-email"
  var testSubject = "replace-with-your-subject"
  var testContent = "replace-with-your-content (this can be a raw html string, EG: <div style='color:white;text-align:center;border-radius:10px;background-color:rgba(25,25,25,1.0)'>Test</div>)"
  send(testTarget,testSubject,testContent)
*/
