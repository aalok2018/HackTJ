/*var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue")
            
SelectValue.innerHTML = slider.value;
slider.oninput = function()
{
    SelectValue.innerHTML = this.value;
    selector.style.left = this.value + "pm";
}*/
/*var year = new Date.getFullYear();
var month = new Date.getMonth();
var day = new Date.getDay();
var hour = new Date.getHour();
var currentTime = new Date().getTime();
if(Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) >= 12) {

}*/
chrome.storage.local.get(['Hour'], function(result) {
    var ex = document.getElementById("Hour");
    ex.value = result.Hour;
});
chrome.storage.local.get(['Minute'], function(result) {
    var ak = document.getElementById("Minute");
    ak.value = result.Minute;
});
chrome.storage.local.get(['DorN'], function(result) {
    var zz = document.getElementById("DorN");
    zz.value = result.DorN;
});
window.addEventListener("click", ev => {
    // it should work
    myFunction();
});

/*window.addEventListener('load',Init,false);
    function Init()
    {
        document.getElementById("close").addEventListener("click", saveData());
    }*/
    
function saveData()
{
    chrome.storage.local.set({"Hour":document.getElementById("Hour")}, function()
    {
        console.log('Value is set to: ' + document.getElementById("Hour"));
    });
    chrome.storage.local.set({"Minute":document.getElementById("Minute")}, function()
    {
        console.log('Value is set to: ' + document.getElementById("Minute"));
    });
    chrome.storage.local.set({"DorN":document.getElementById("DorN")}, function()
    {
        console.log('Value is set to: ' + document.getElementById("DorN"));
    });
    /*window.close();*/
}
function myFunction() 
{    
    var interval = setInterval(function() {
        var currentTime = (new Date).getTime();
        var mRes = document.getElementById("Minute");
        var minute = mRes.options[mRes.selectedIndex].text;
        var hRes = document.getElementById("Hour");
        var hour = hRes.options[hRes.selectedIndex].text;
        var ampmRes = document.getElementById("DorN");
        var ampm = ampmRes.options[ampmRes.selectedIndex].text;
        var date = (new Date).getDate();
        var month = (new Date).getMonth();
        if(ampm == "P.M.") {
            var temp = parseInt(hour);
            temp = temp + 12;
            hour = temp.toString();
        }
        if(month==0) {
            month = "Jan";
        }
        if(month==1) {
            month = "Feb";
        }
        if(month==2) {
            month = "Mar";
        }
        if(month==3) {
            month = "Apr";
        }
        if(month==4) {
            month = "May";
        }
        if(month==5) {
            month = "Jun";
        }
        if(month==6) {
            month = "Jul";
        }
        if(month==7) {
            month = "Aug";
        }
        if(month==8) {
            month = "Sep";
        }
        if(month==9) {
            month = "Oct";
        }
        if(month==10) {
            month = "Nov";
        }
        if(month==11) {
            month = "Dec";
        }
        var year = (new Date).getFullYear();
        var futureDate = new Date(month.concat(" ", date, ", ", year, " ", hour, ":", minute));
        var difference = futureDate - currentTime;
        /*console.log("" + difference);*/
        if(difference < 0) {
            difference = difference + 86400000;
        }
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        document.getElementById("bedtime").innerHTML = "Bedtime in: " + hours + "h " + minutes + "m " + seconds + "s ";
        /*console.log("submitted");*/        
        if(difference <= 2000) {
            clearInterval(interval);
            showAlert();
            function showAlert() {
                alert("Time to sleep!!!");
            }
        }
    }, 1000);
}

/*window.addEventListener("click", ev => {
    // it should work
    document.getElementById("close").addEventListener("click", myClose());
});

function myClose() 
{
    var storage = 0;
    window.close();
}*/

