var express = require('express');
require("dotenv/config");
var bodyParser = require('body-parser');

const app = express();

const fs = require('fs');

app.get('/read', (req, res) => {
    let rawdata = fs.readFileSync('./web-api/student.json');
    let student = JSON.parse(rawdata);
    console.log(student);
    res.status(200).send(student);
});

app.get('/users/:id', (req, res) => {
    // let rawdata = fs.readFileSync(path.join(__dirname,'users.json'));
    let rawdata = fs.readFileSync('./web-api/users.json');
    let student = JSON.parse(rawdata);
    
    let currentUser = student.filter((x) => {
        return x.id == req.params.id;
    });
    res.status(200).send(currentUser);
});

app.get('/write', (req, res) => {
    let newStudent = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
    let data = JSON.stringify(newStudent, null, 4);
    fs.writeFileSync('student-2.json', data);
    res.status(201).send(newStudent);
});









// let jsonData = require('./student.json');

// console.log(jsonData);

// let data = JSON.stringify(student, null, 2);

// //fileSync read
// var fs = require('fs');
// // 
// fs.readFile('web-api/student.json', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });
// //fs write

// app.get('/write/', (req,res) => {
  


// let student = { 
//     name: 'Mike',
//     age: 23, 
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda' 
// };
 
// let data = JSON.stringify(student);
// fs.writeFileSync('student-2.json', data);
// });


// // let student = { 
// //     name: 'Mike',
// //     age: 23, 
// //     gender: 'Male',
// //     department: 'English',
// //     car: 'Honda' 
// // };
 
// // let data = JSON.stringify(student, null, 2);

// // fs.writeFileSync('student-3.json', data, (err) => {
// //     if (err) throw err;
// //     console.log('Data written to file');
// // });

// // console.log('This is after the write call');

// // const app = express();

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/users/:number', (req, res) => {
//     var id = req.params.number;
//     console.log(id);
//     res.send(id);
// });

// app.post('/users', function (req, res) {
 
//     res.send(req.body);
//   });
//   app.put('/users', function (req, res) {
//     res.send('Got a PUT request at /user')
//   })

var port = process.env.PORT;

app.listen(port, () => {
    console.log(`API is listenig on port  ${port}!`);
});