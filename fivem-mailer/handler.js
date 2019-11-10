/*
  Credits to https://smtpjs.com/v3/smtp.js for the Email class.
*/

const SecureToken = "enter-your-security-token-here"
const Mailer = "enter-your-sender-email-here"
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


/* Test/Example Function 
  var testTarget  = 'targetEmail@provider.com'
  var testSubject = 'This is the email subject.'
  var testContent = '<div style="background-color:rgba(55,55,55,1.0);border-radius:20px;"><h1><center>This is the email content</center><h1><p3><center>You can insert raw html here to style your email contents.</center><p3></div>'
  send(testTarget,testSubject,testContent)
*/
