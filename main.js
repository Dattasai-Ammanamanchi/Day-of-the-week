let date = new Date();
let dayofweek = date.getDay();
let nameofday;
let quote;

switch (dayofweek) {
    case 0:
        nameofday = 'Sunday';
        quote = 'Time to Chillax and Enjoy binge Sunday vibes';
        break;
    case 1:
        nameofday = 'Monday';
        quote = 'Time to Enjoy the Monday Morning Blues';
        break;
    case 2:
        nameofday = 'Tuesday';
        quote = 'Taco Tuesday';
        break;
    case 3:
        nameofday = 'Wednesday';
        quote ='Two more days to the weekend';
        break;
    case 4:
        nameofday = 'Thursday';
        quote = 'The weekend is almost here';
        break;
    case 5:
        nameofday = 'Friday';
        quote='Weekend is here';
        break;
    case 6:
        nameofday='Saturday';
        quote='Time to party';
        break;                                
}

let weekdaydiv =document.getElementById('weekday');
weekdaydiv.innerHTML=`${nameofday}`;

let phrase = document.getElementById('phrase');
phrase.innerHTML=`${quote}`;