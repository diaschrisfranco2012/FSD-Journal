const input=require('./InputModule');
const result=require('./result');
input.getStudentDetail(function(student){
    result.showResult(student);
});
