var country1 = "Africa";
var country2 = "Europe";
var country3 = "South America";
var country4 = "North America";
var country5 = "Asia";
var country6 = "Australia";
var country1_2008 = 1028;
var country1_2018 = 1235.5;
var country2_2008 = 4965.7;
var country2_2018 = 4209.3;
var country3_2008 = 1132.6;
var country3_2018 = 1261.5;
var country4_2008 = 6600.4;
var country4_2018 = 6035.6;
var country5_2008 = 12954.7;
var country5_2018 = 16274.1;
var country6_2008 = 1993;
var country6_2018 = 2100.5;
var wholeWorld2018 = country1_2018 + country2_2018 + country3_2018 + country4_2018 + country5_2018 + country6_2018;
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener('click', function () { emissions(country1, country1_2018, country1_2008); });
    document.querySelector(".europe").addEventListener('click', function () { emissions(country2, country2_2018, country2_2008); });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(country3, country3_2018, country3_2008); });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(country4, country4_2018, country4_2008); });
    document.querySelector('.asia').addEventListener('click', function () { emissions(country5, country5_2018, country5_2008); });
    document.querySelector('.australia').addEventListener('click', function () { emissions(country6, country6_2018, country6_2008); });
    function emissions(continent, continent2018, continent2008) {
        document.querySelector(".titleRegion").innerHTML = continent;
        document.querySelector(".subtitleRegion").innerHTML = continent;
        document.querySelector(".region2018").innerHTML = continent2018.toString();
        document.querySelector(".regionRelative").innerHTML = Math.round(continent2018 / wholeWorld2018 * 100 * 100) / 100 + "%";
        document.querySelector(".regionGrowthRelative").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        document.querySelector(".regionGrowthAbsolute").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (continent2018 / wholeWorld2018) * 100 + "%");
    }
    ;
});
//# sourceMappingURL=script.js.map