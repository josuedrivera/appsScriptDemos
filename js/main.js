//
 function testOne() {
    var spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getRange('A1:B7').activate();
    spreadsheet.getActiveRangeList().setFontColor('red')
    .setBackground('purple').setFontStyle('italic').setFontWeight('bold')
 };

//
 function testTwo() {
    var spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getCurrentCell().setFormula('=SUM(C3:D3)');
 };

//
 function testThree() {
    var spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getRange('E6').activate();
    spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('E6:E12'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    spreadsheet.getRange('E6:E12').activate();
 };




//
 function test1() {
    var doc = DocumentApp.create('my name of doc 2');

    var url = doc.getUrl();
    var id = doc.getId();
    var docName = doc.getName();

    var email = Session.getActiveUser().getEmail();
    var str = 'url : ' +url+' id : '+id+' name : ' +docName+ ' email : '+email;
    doc.getBody().appendParagraph('hello world '+ str);

    var body = 'Added this content to the new doc'+str;
    GmailApp.sendEmail(email, 'test email', body);
 }


function test2(){
var doc = DocumentApp.openById('13F-08lDGdvJ9Mm5XglVQ0YyXeHxnQMouCVqzJnfxl-8');
Logger.log(doc.getId());
var url = doc.getUrl();
var id = doc.getId();
var docName = doc.getName();
var now = new Date();
var email = Session.getActiveUser().getEmail();
var str = '\n url : ' +url+' \n id : '+id+'\n name : ' +docName+ '\n email : '+email;
var app = doc.getBody().appendParagraph('hello world \n'+ str + '\n added on :'+now);
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;
app.setAttributes(style);
app.appendHorizontalRule();
var app1 = doc.getBody().appendParagraph('done');

}

function test3(){
Logger.log(TEST);
var myString = "Hello World";
var myNumber = 1000;
var myBoolean = true;
Logger.log(myString + ' ' +myNumber + ' ' +myBoolean);
}

function test4(){
var myArr = ['test','test2','test3','test4'];
Logger.log(myArr);
myArr.forEach(function(item,index,array){
Logger.log(index + ' ' + item);
})
var addLast = myArr.push('test5');
var removeLast = myArr.pop();
var removeFirst = myArr.shift();
var addFirst = myArr.unshift('test0');

var pos = myArr.indexOf('test3');
Logger.log(pos);

}

function test5(){
var myArr = [['test','test2','test3'],['test','test2','test3'],['test','test2','test3']];
var ss = SpreadsheetApp.openById('16uE8Ef3PGosKqEb0vuq0o86DiV6qcC0GXbeBYMLiKPE');
var sheet = ss.getSheets()[0];
//sheet.appendRow(myArr);
var range = sheet.getRange(4, 4, 3, 3);
Logger.log(range.getValues());
range.setValues(myArr);
}

function test6(){
var car = {
make : 'ford',
model : 'mustang',
year : 2000,
color : 'red',
price : 50000,
tires : true,
drive : function(){
Logger.log('drive') 
},
info : ['turn key','put in gear','press gas','turn wheel as needed']
};
Logger.log(car);
car.drive();
}

function test7(){
message2('hello');
message2('world');
var message1 = function(mes){
Logger.log(mes); //expression 
}
message1('hello');
message1('world');

function message2(mes){
Logger.log(mes); //declaration
}
}

function test8(){
var age = 26;
var okay = (age >= 21) ? 'Beer' : 'Juice';
Logger.log(okay);
function testNum(a){
if(a>0){ return 'positive'; }
else { return 'negative';}

}
Logger.log(testNum(-15));
Logger.log(testNum(15));
}

function test9(){
var myArr = ['test','test2','test3','test4'];
for(var i=0;i<myArr.length;i++){
Logger.log(myArr[i]);
}
var x =10;
do{
Logger.log('counter '+x);
x++;
}while(x<5);
}

//source code triggers
function test10(){
var now = new Date();
VAL++;
Logger.log(now);
Logger.log(VAL);

}

//doGet source code
function doGet(){
Logger.log('running 5');
//var textOutput = ContentService.createTextOutput('hello world');
//return textOutput;
return HtmlService.createHtmlOutputFromFile('index');
}

//webApp source code
function doGet(){
Logger.log('running 5');
//var textOutput = ContentService.createTextOutput('hello world');
//return textOutput;
return HtmlService.createTemplateFromFile('index').evaluate();
}


***********INDEX********************

<!DOCTYPE html>
<html>
<head>
<base target="_top">
</head>
<body>
<h1>Hello World 2</h1>
<div>Current Date <?= new Date() ?></div>
<? if(false) { ?>
hello
<? } else { ?>
bye
<? } ?>
<script>
console.log('hello');
</script>
</body>
</html>
</html>
//FIX THIS ABOVE HTML AS COMMENT MAYBE ^^^^^^^^^^^^^^

function test11(){
var doc = DocumentApp.openById('13F-08lDGdvJ9Mm5XglVQ0YyXeHxnQMouCVqzJnfxl-8');
var body = doc.getBody();
var para = body.getParagraphs();
Logger.log(para);
for(var x=0;x<para.length;x++){
Logger.log(para[x].getText());
}
}


//dialogue and custom ui buttons
function onOpen(){
SpreadsheetApp.getUi().createMenu('Advanced').addItem('calendar', 'addCal').addItem('copy me', 'copyMe').addItem('one', 'one').addItem('two', 'two').addToUi();
}

function one2(){
var ui = SpreadsheetApp.getUi();
var result = ui.alert('title', 'Are you having fun?', ui.ButtonSet.YES_NO);
if(result == ui.Button.YES){ 
ui.alert('great');
}else{
ui.alert('too bad');
}

}

function two2(){
var ui = SpreadsheetApp.getUi();
var result = ui.alert('title', 'Send Email?', ui.ButtonSet.YES_NO);
if(result == ui.Button.YES){ 
var rep = Session.getActiveUser().getEmail();
GmailApp.sendEmail(rep, 'subject', 'You asked for it');
}
}

//document as .pdf 
function onOpen(){
DocumentApp.getUi().createMenu('Advanced').addItem('pdf me', 'pdf').addToUi();
}
function pdf(){
var doc = DocumentApp.getActiveDocument();
var ui = DocumentApp.getUi();
var result = ui.alert('Would you like to save '+doc.getName()+'.pdf as pdf', ui.ButtonSet.YES_NO);
if(result == ui.Button.YES){
var docBlob = doc.getAs('application/pdf');
docBlob.setName(doc.getName()+'.pdf');
var file = DriveApp.createFile(docBlob);
var rep = Session.getActiveUser().getEmail();
var message = "Your PDF is attached";
MailApp.sendEmail(rep, 'subject', message, {
name:'New',
attachments:[file]
})
}
}


function two(){
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var data1 = sheet.getDataRange().getValues();
Logger.log(data1[4]);
var data2 = sheet.getActiveRange().getValues();
Logger.log(data2);
}

function one(){
var ui = SpreadsheetApp.getUi();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var result = ui.prompt('New sheet', ui.ButtonSet.YES_NO);
if(result.getSelectedButton() == ui.Button.YES){
var newName = result.getResponseText();
Logger.log('New name is '+newName);
var eSheet = ss.getSheetByName(newName);
if(eSheet != null){
ss.deleteSheet(eSheet);
}
eSheet = ss.insertSheet();
eSheet.setName(newName);
}else{
Logger.log('No sheet provided');
}
}

function copyMe(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var data = sheet.getActiveRange().getValues();
Logger.log(data);
var newSheet = 'Copied';
var eSheet = ss.getSheetByName(newSheet);
if(eSheet != null){
ss.deleteSheet(eSheet);
}
eSheet = ss.insertSheet();
eSheet.setName(newSheet);
data.forEach(function(row){
eSheet.appendRow(row);
})

}

function addCal(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName('feed');
sheet.deleteRows(1, 100);
ss.appendRow(['Start','End','Date','Title']);
var startTime = new Date();
var endTime = new Date();
endTime.setDate(startTime.getDate() +31);
var cal = CalendarApp.getDefaultCalendar();
var events = cal.getEvents(startTime, endTime);
Logger.log(events);
if(events && events.length > 0){
for(var x=0;x<events.length;x++){
var myDate = Utilities.formatDate(events[x].getStartTime(), Session.getScriptTimeZone(), 'MMM dd yyyy');
var myArr = [events[x].getStartTime(),events[x].getEndTime(),myDate,events[x].getTitle()];
sheet.appendRow(myArr);
}

}else{
//no events
}
}


