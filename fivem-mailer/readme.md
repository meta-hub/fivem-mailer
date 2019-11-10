# Information
A simple wrapper for a nodejs emailer, modified for FiveM.

You must supply an authorization token in the `handler.js`.


To generate an authorization token, head to: https://www.smtpjs.com/.

If you don't have an SMTP server, you can sign-up for free by heading to: https://elasticemail.com/.


# Installation

* Extract both of the folders into your `resources` directory.
* Once you have generated a security token, add it to `const token = ""` found at the top of `handler.js`.
* Replace the sender email at the top of `handler.js`.
* Make sure you have `start yarn` in your server.cfg.
* Add `start fivem-mailer` in your server-cfg, below `start yarn`.
* Check the example.lua for examples on how to use the mailer.
