
const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.static('abc'));
let databaseinfo={
	host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'saurabh',
	port:3306
};

const connection = mysql.createConnection(databaseinfo);
app.get("/Bookid",(req,resp)=>{
	let input = req.query.Bookid;
	console.log(input);
	let output={bookfoundstatus:true,itemdetails:{Bookname:req.query.Bookname,Price:req.query.Price}};




let bookid = 103;
let bookname="Shyamchi Aai"
let price=1000;

// connection.query("insert into book (bookid,bookname,price) values (?,?,?)", [bookid,bookname,price], (err, rows) => {
connection.query("select * from book where bookid=?", [input], (err, rows) => {
	// if (err) {
	// 	result = err;
	// 	console.log("trouble " + err);
	// } 
	
	if (rows.length > 0) {
		// result = err;
		// console.log("trouble " + err);
		output.bookfoundstatus=false;
	} 
	// else {
	// 	result = res1;
	// 	console.log("success" + result)
	// 	console.log(res1)
	// 	console.log("affected rows: " + res1.affectedRows);
	// }
	
	// console.log("38 " + );
	resp.send(output);
});
}
);











app.listen(8081, function () {
    console.log("server listening at port 8081...");
});