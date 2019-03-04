// const {google} = require('googleapis');
// const express = require('express');
// const URL = require('url');
// const ls = require('local-storage');

// var app=express();
// const googleConfig = {
//     ClientID:"648191701681-mp7qoaevahpt0kekqt26jq8f1bibtahu.apps.googleusercontent.com",
//     Clientsecret:"Waw0zzQOPzCRR9NJqnQ1z2-r",
//     redirect:"http://localhost:8080/contact/"	
// };

// const oauth2Client = new google.auth.OAuth2(
//     googleConfig.ClientID,
//     googleConfig.Clientsecret,
//     googleConfig.redirect
// );

// //url that asks permissions 

// const scopes = [
//     'https://www.googleapis.com/auth/plus.me',
//     'https://www.googleapis.com/auth/userinfo.email',
//     'https://www.googleapis.com/auth/contacts.readonly'
// ];


// const url = oauth2Client.generateAuthUrl ({
//     access_type:'offline',
//     prompt: 'consent',
//     scope:scopes
// });

// app.get('/',(req,res) => {
//     res.redirect(url);
// });
// app.get('/contact',async (req,response) => {
//     var qs = URL.parse(req.url,true);
//     const {tokens} = await oauth2Client.getToken(qs.query.code);
//     // response.send(tokens);
//      oauth2Client.setCredentials(tokens);
//      console.log(tokens);
//      ls.set('rtoken',tokens);
//     // response.send(ls.get('token'));
//     response.redirect('/mycontacts');
// });

// app.get('/mycontacts',(req,response) => {
//     oauth2Client.setCredentials(ls.get('rtoken'));
//     const peopleService = google.people({
//     version:'v1',
//     auth :oauth2Client
//     });
//     peopleService.people.connections.list({
//     resourceName: 'people/me',
//     personFields: 'names,phoneNumbers'
//     },(err, res) => {
//     if(err)
//     {
//     console.log("Errrro afafs");
//     console.log(err);
//     }
//     else
//     {
//     //data tobe fetch 
//     //con[0].names[0].displayName;
//     //con[0].phoneNumbers[0].canonicalForm;
//     let con = res.data.connections;
//     let data= [];
//     let number = { };
//     console.log(con instanceof Array )
//     console.log(typeof(con));
//     console.log()
//     for(let i=0;i<con.length;i++){
//     // if(i=== 75){ 
//     // continue;
//     // } 
//     if(con[i].names && con[i].phoneNumbers){
//     number = {
//     name:con[i].names[0].displayName,
//     phoneNumber:con[i].phoneNumbers[0].value,
//     }
//     }else{
//     number['error'] ="Not Found";
//     number['index'] = `${i}`
//     }
   
    
//     data.push(number);
//     number = {};
//     }
//     console.log(data);
//     response.send(con);
//     }
//     });
//     });
   
   
//    app.listen(8080,() => {
//     console.log('server started ....');
//    });