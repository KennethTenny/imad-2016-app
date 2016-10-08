var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':
{
  title: 'Kenneth Article one',
  date: '8 Oct 2016',
  heading: 'Article one',
  content:` <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>`
},
'article-two':
{
  title: 'Kenneth Article two',
  date: '8 Oct 2016',
  heading: 'Article two',
  content:` <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>`
},
'article-three':
{
  title: 'Kenneth Article three',
  date: '8 Oct 2016',
  heading: 'Article three',
  content:` <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>
    <p>Hello.kjsnfsfnjksfnjksfjksdjkfsdjkfcjksdf</p>`
}

};





function createTemplate(data)
{
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    
    var htmlTemplate=`<html>
        <head>
            <link href="style.css" rel="stylesheet" >
            <title>${title}</title>
        </head>
        <body>
            <h1> ${heading} </h1>
            <h2> ${date} </h2>
            <h2>${content}</h2>
        </body>
        </html>`;

    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;

app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function(req,res){
    
    var articleName= req.params.articleName;
    
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-three', function(req,res){
    res.send('Article three!');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
