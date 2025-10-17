function calculateGrade(marks){
    if (marks>=90)
        return 'A';
    else if(marks<90 && marks>=75)
        return 'B';
    else if(marks<75 && marks>=60)
        return 'C';
    else if(marks<60 && marks>=40)
        return 'D';
    else 
        return 'F';
}
module.exports={calculateGrade};