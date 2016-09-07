//格局化日期：yyyy-MM-dd 
 function formatDate(date) { 
 var myyear = date.getFullYear(); 
 var mymonth = date.getMonth()+1; 
 var myweekday = date.getDate(); 

if(mymonth < 10){ 
 mymonth = "0" + mymonth; 
 } 
 if(myweekday < 10){ 
 myweekday = "0" + myweekday; 
 } 
 return (myyear+"-"+mymonth + "-" + myweekday); 
 } 