var country1: string = "Africa";
var country2: string = "Europe";
var country3: string = "South America";
var country4: string = "North America";
var country5: string = "Asia";
var country6: string = "Australia";

var country1_2008: number = 1028;
var country1_2018: number = 1235.5;
var country2_2008: number = 4965.7;
var country2_2018: number = 4209.3;
var country3_2008: number = 1132.6;
var country3_2018: number = 1261.5;
var country4_2008: number = 6600.4;
var country4_2018: number = 6035.6;
var country5_2008: number = 12954.7;
var country5_2018: number = 16274.1;
var country6_2008: number = 1993;
var country6_2018: number = 2100.5;

var wholeWorld2018: number = country1_2018 + country2_2018 + country3_2018 + country4_2018 + country5_2018 + country6_2018;

window.addEventListener("load", function(){

    document.querySelector (".africa").addEventListener('click', function () { emissions(country1, country1_2018, country1_2008) });
    document.querySelector (".europe").addEventListener('click', function () { emissions(country2, country2_2018, country2_2008) });
    document.querySelector ('.southamerica').addEventListener('click', function () { emissions(country3, country3_2018, country3_2008) });
    document.querySelector ('.northamerica').addEventListener('click', function () { emissions(country4, country4_2018, country4_2008) });
    document.querySelector ('.asia').addEventListener('click', function () { emissions(country5, country5_2018, country5_2008) });
    document.querySelector ('.australia').addEventListener('click', function () { emissions(country6, country6_2018, country6_2008) });


function emissions(continent: string, continent2018: number, continent2008: number) {

    document.querySelector (".titleRegion").innerHTML = continent;
    document.querySelector (".subtitleRegion").innerHTML = continent;
    document.querySelector (".region2018").innerHTML = continent2018 .toString(); 
    document.querySelector (".regionRelative").innerHTML = Math.round(continent2018 / wholeWorld2018 *100 *100)/100 + "%";
    document.querySelector (".regionGrowthRelative").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
    document.querySelector (".regionGrowthAbsolute").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();

    document.querySelector (".chart").setAttribute("style", "height:" + (continent2018 / wholeWorld2018) *100 + "%" );
        };

});