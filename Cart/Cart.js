let count=0;
function Incrementcount(){
    count=Addnum(count,1);
    displayUpdatedCount(count);
}
function Addnum(num1,num2){
    let ans=num1+num2;
    return ans;
}
function Decrementcount(){
   
    if(count==0){
           count;
    }else{
        count=Addnum(count,-1);
        displayUpdatedCount(count);
    }
}
function displayUpdatedCount(number){
    document.getElementById('counter').innerText=number;
}