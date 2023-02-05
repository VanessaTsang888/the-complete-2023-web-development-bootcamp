# 249 Posting Data to Mailchip's Servers via their API

We have setup the req and res to the GET requests and the POST requests on our home route. This is how we are able to load up our Signup with Bootstrap enabled and able to send this data over to our servers using bady-parser (GitBash Terminal). Therefore, now we can start incorporating our API.

## Mailchimp Developer

[Mailchip API](https://mailchimp.com/developer/)

We need api key to authenticate ourselves with their servers as we don't want some random person to start adding subscribers to our mailing list/ don't want someone to delete my entire mailing list by making post requests that are not authorised.

### Setup our API Key

Create a new Mailchip account: https://login.mailchimp.com/signup/ > https://us18.admin.mailchimp.com/account/

I'm signed up for an Free account > fruit = Mel.

Account name > Account > Extras > API Kyes > click 'Create API Key' btn: this will generate a new api key for me.

https://mailchimp.com/developer/ > api reference > https://mailchimp.com/developer/marketing/api/ use this to find out how to add subscribers to our list.

Navigate to: Lists/Audiences > Create: we want to subscrib some list memebers > Batch subscribe or unsubscribe: POST /lists/{kist_id} > list_id > https://us18.admin.mailchimp.com/lists/settings?id=299434 > xxxxxxxxxx > this is the list I want to put my subscribers into >

Get list info:
GET /lists/{list_id}
https://mailchimp.com/developer/marketing/api/lists/

Use this to write our data in app.js

url > Mailchip code examples >

POST data: https://nodejs.org/api/https.html#https_https_request_url_options_callback

### Testing

run app, start server: `nodemon app.js`
https://us18.admin.mailchimp.com/audience/
https://us18.admin.mailchimp.com/lists/members?id=299434#p:1-s:25-sa:last_update_time-so:false
I can now see I have a new contact within Audience which is the data I've input in the FE as a test. So now all added to my Audience > All contacts.

To add another member, just refresh the browser and input new user or member.
