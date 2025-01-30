let count = 0;



function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if (count == 10) {
        alert("Your instagram post gained 10 followers! Congratulations!");
    }else if (count == 20){
        alert("Your instagram post gained 20 followers! You're almost there!");
    }
}

function increaseCount() {
    count++;
    console.log(`Count: ${count}`);
    displayCount();
    checkCountValue();
}

function resetCount() {
    count = 0;
    displayCount();
    alert("Count reset to 0");
}