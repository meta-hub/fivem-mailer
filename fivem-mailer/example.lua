--
--  Credits to https://smtpjs.com/v3/smtp.js for the Email class.
--  Wrapped and converted by _meta
--

-- The data
local target = 'targetEmail@provider.com'
local sender = 'senderEmail@provider.com'
local subject = 'This is the email subject.'
local htmlString = '<div style="background-color:rgba(55,55,55,1.0);border-radius:20px;"><h1><center>This is the email content</center><h1><p3><center>You can insert raw html here to style your email contents.</center><p3></div>'

-- From the client
TriggerServerEvent('fivem-mailer:send',target,sender,subject,htmlString)

-- From the server
TriggerEvent('fivem-mailer:send',target,sender,subject,htmlString)
exports["fivem-mailer"]:send(target,sender,subject,htmlString)
