function addTempLegend(map){
    geojson = this.geojsondat
    if(typeof this.maplegend !== 'undefined'){
        // map.removeLayer(this.legend);
        map.removeControl(this.maplegend);   
        maplegend = undefined;   
    }
    if(typeof this.regioLegend !== 'undefined'){
        // map.removeLayer(this.legend);
        map.removeControl(this.regioLegend);   
        regioLegend = undefined;   
    } 
    if(typeof this.legend2 !== 'undefined'){
        // map.removeLayer(this.legend);
        map.removeControl(this.legend2);   
        legend2 = undefined;   
    } 
    // get unique values from array
    Array.prototype.myUnique = function(){
        var n = {}, r=[];
        for(var i = 0; i < this.length; i++){
            if (!n[this[i]]){
                n[this[i]] = true; 
                r.push(this[i]); 
            }
        }
        return r;
    }

    // legend color gradient
    function getColor(d) {
        return d > 9999 ? '#000000' : 
        d > 80 ? '#9B0A9B' : 
        d > 45.000719 ? '#CECECE' : 
        d > 44.634237 ? '#CCCCCC' : 
        d > 44.26919 ? '#CAC8C9' : 
        d > 43.905577 ? '#C8C5C5' : 
        d > 43.543399 ? '#C7C0C1' : 
        d > 43.182655 ? '#C5BDBD' : 
        d > 42.823345 ? '#C3B9B9' : 
        d > 42.46547 ? '#C1B6B6' : 
        d > 42.109029 ? '#BFB2B2' : 
        d > 41.754022 ? '#BEAEAE' :                                                 
        d > 41.40045 ? '#BCAAAB' : 
        d > 41.048312 ? '#B9A7A7' : 
        d > 40.697609 ? '#B7A3A3' : 
        d > 40.34834 ? '#B69F9F' : 
        d > 40.000505 ? '#B59C9C' : 
        d > 39.654105 ? '#B29999' : 
        d > 39.309139 ? '#B09595' : 
        d > 38.965607 ? '#AF9191' : 
        d > 38.62351 ? '#AD8D8D' : 
        d > 38.282847 ? '#AA8A89' : 
        d > 37.943619 ? '#A98686' : 
        d > 37.605824 ? '#A88282' : 
        d > 37.269465 ? '#A57E7E' : 
        d > 36.934539 ? '#A47B7B' : 
        d > 36.601048 ? '#A27777' : 
        d > 36.268992 ? '#A07373' : 
        d > 35.938369 ? '#9E706F' : 
        d > 35.609181 ? '#9C6B6C' : 
        d > 35.281428 ? '#9A6868' : 
        d > 34.955109 ? '#986464' : 
        d > 34.630224 ? '#966161' : 
        d > 34.306773 ? '#955D5D' : 
        d > 33.984757 ? '#93595A' : 
        d > 33.664176 ? '#915555' : 
        d > 33.345028 ? '#8F5252' : 
        d > 33.027315 ? '#8E4F4E' : 
        d > 32.711037 ? '#8C4B4A' : 
        d > 32.396193 ? '#8A4746' : 
        d > 32.082783 ? '#884343' : 
        d > 31.770807 ? '#86403F' : 
        d > 31.460266 ? '#843C3C' : 
        d > 31.151159 ? '#823838' : 
        d > 30.843487 ? '#803435' : 
        d > 30.537249 ? '#7F3131' : 
        d > 30.232445 ? '#7D2D2D' : 
        d > 29.929076 ? '#7B2929' : 
        d > 29.627141 ? '#792626' : 
        d > 29.326641 ? '#772221' : 
        d > 29.027575 ? '#761E1E' : 
        d > 28.729943 ? '#731A1A' : 
        d > 28.433745 ? '#721616' : 
        d > 28.138982 ? '#701313' : 
        d > 27.845654 ? '#6C0D0D' : 
        d > 27.553759 ? '#680808' : 
        d > 27.2633 ? '#6E0808' : 
        d > 26.974274 ? '#730808' : 
        d > 26.686683 ? '#780808' : 
        d > 26.400526 ? '#7F0808' : 
        d > 26.115804 ? '#870808' : 
        d > 25.832515 ? '#8F0808' : 
        d > 25.550662 ? '#970808' : 
        d > 25.270242 ? '#9F0808' : 
        d > 24.991257 ? '#A70808' : 
        d > 24.713707 ? '#AF0808' : 
        d > 24.437591 ? '#B60808' : 
        d > 24.162909 ? '#BE0808' : 
        d > 23.889661 ? '#C40808' : 
        d > 23.617848 ? '#C80808' : 
        d > 23.347469 ? '#CC0808' : 
        d > 23.078525 ? '#D10908' : 
        d > 22.811015 ? '#D50C08' : 
        d > 22.544939 ? '#D81308' : 
        d > 22.280298 ? '#DB1C08' : 
        d > 22.017091 ? '#DD2508' : 
        d > 21.755319 ? '#DE2E08' : 
        d > 21.494981 ? '#DF3708' : 
        d > 21.236077 ? '#DF3F08' : 
        d > 20.978607 ? '#DF4608' : 
        d > 20.722572 ? '#E04E08' : 
        d > 20.467972 ? '#E05408' : 
        d > 20.214805 ? '#E05908' : 
        d > 19.963073 ? '#E05F08' : 
        d > 19.712776 ? '#E06708' : 
        d > 19.463913 ? '#E06F08' : 
        d > 19.216484 ? '#E07708' : 
        d > 18.970489 ? '#E07F08' : 
        d > 18.725929 ? '#E08708' : 
        d > 18.482804 ? '#E08F08' : 
        d > 18.241112 ? '#E09708' : 
        d > 18.000855 ? '#E09F08' : 
        d > 17.762033 ? '#E0A608' : 
        d > 17.524644 ? '#E0AE08' : 
        d > 17.288691 ? '#E0B408' : 
        d > 17.054171 ? '#E0B908' : 
        d > 16.821086 ? '#E0BF08' : 
        d > 16.589435 ? '#E0C608' : 
        d > 16.359219 ? '#E0CD08' : 
        d > 16.130437 ? '#E0D308' : 
        d > 15.903089 ? '#E0D908' : 
        d > 15.677176 ? '#E0DD08' : 
        d > 15.452697 ? '#E1E008' : 
        d > 15.229652 ? '#E2E308' : 
        d > 15.008042 ? '#DFE508' : 
        d > 14.787866 ? '#D7E608' : 
        d > 14.569125 ? '#CDE608' : 
        d > 14.351818 ? '#C3E608' : 
        d > 14.135945 ? '#BBE508' : 
        d > 13.921507 ? '#B3E308' : 
        d > 13.708503 ? '#A9E108' : 
        d > 13.496933 ? '#A0DE08' : 
        d > 13.286798 ? '#97DB08' : 
        d > 13.078097 ? '#8ED908' : 
        d > 12.870831 ? '#86D608' : 
        d > 12.664999 ? '#7ED308' : 
        d > 12.460601 ? '#76D108' : 
        d > 12.257638 ? '#6ECE08' : 
        d > 12.056109 ? '#67CC08' : 
        d > 11.856014 ? '#5FC908' : 
        d > 11.657354 ? '#59C708' : 
        d > 11.460128 ? '#55C408' : 
        d > 11.264337 ? '#50C008' : 
        d > 11.069979 ? '#4BBB08' : 
        d > 10.877057 ? '#46B608' : 
        d > 10.685568 ? '#41B108' : 
        d > 10.495514 ? '#3CAC08' : 
        d > 10.306895 ? '#39A608' : 
        d > 10.119709 ? '#37A108' : 
        d > 9.933958 ? '#349C08' : 
        d > 9.749642 ? '#2F9708' : 
        d > 9.56676 ? '#259208' : 
        d > 9.385312 ? '#188D09' : 
        d > 9.205298 ? '#0E8B0E' : 
        d > 9.026719 ? '#098A18' : 
        d > 8.849575 ? '#088B25' : 
        d > 8.673864 ? '#088C30' : 
        d > 8.499588 ? '#088C38' : 
        d > 8.326747 ? '#08893F' : 
        d > 8.15534 ? '#088646' : 
        d > 7.985367 ? '#08844B' : 
        d > 7.816828 ? '#08864E' : 
        d > 7.649724 ? '#088A4F' : 
        d > 7.484054 ? '#088F4F' : 
        d > 7.319819 ? '#08944F' : 
        d > 7.157018 ? '#089950' : 
        d > 6.995651 ? '#089F50' : 
        d > 6.835719 ? '#08A450' : 
        d > 6.677221 ? '#08A950' : 
        d > 6.520158 ? '#08AC51' : 
        d > 6.364529 ? '#08AF54' : 
        d > 6.210334 ? '#08B25B' : 
        d > 6.057573 ? '#08B563' : 
        d > 5.906247 ? '#08B86B' : 
        d > 5.756356 ? '#08BC70' : 
        d > 5.607898 ? '#08C173' : 
        d > 5.460876 ? '#08C775' : 
        d > 5.315287 ? '#08CC76' : 
        d > 5.171133 ? '#08D176' : 
        d > 5.028413 ? '#08D575' : 
        d > 4.887128 ? '#08D873' : 
        d > 4.747276 ? '#08DB72' : 
        d > 4.60886 ? '#08DD72' : 
        d > 4.471877 ? '#08E074' : 
        d > 4.336329 ? '#08E27B' : 
        d > 4.202216 ? '#08E385' : 
        d > 4.069537 ? '#08E593' : 
        d > 3.938292 ? '#08E6A2' : 
        d > 3.808481 ? '#08E7B2' : 
        d > 3.680105 ? '#08E8C0' : 
        d > 3.553163 ? '#08EACA' : 
        d > 3.427656 ? '#08EBD1' : 
        d > 3.303583 ? '#08EDD8' : 
        d > 3.180944 ? '#08EEDF' : 
        d > 3.05974 ? '#08EEE5' : 
        d > 2.93997 ? '#08EEEA' : 
        d > 2.821635 ? '#08EDEC' : 
        d > 2.704734 ? '#08EBEB' : 
        d > 2.589267 ? '#08E9E9' : 
        d > 2.475234 ? '#08E6E6' : 
        d > 2.362636 ? '#08E3E3' : 
        d > 2.251473 ? '#08E1E1' : 
        d > 2.141743 ? '#08DEDE' : 
        d > 2.033448 ? '#08DBDB' : 
        d > 1.926588 ? '#08D8D8' : 
        d > 1.821162 ? '#08D5D5' : 
        d > 1.71717 ? '#08D1D1' : 
        d > 1.614612 ? '#08CCCC' : 
        d > 1.513489 ? '#08C8C8' : 
        d > 1.413801 ? '#08C5C5' : 
        d > 1.315546 ? '#08C0C0' : 
        d > 1.218726 ? '#08BBBB' : 
        d > 1.123341 ? '#08B6B6' : 
        d > 1.029389 ? '#08B1B1' : 
        d > 0.936873 ? '#08ACAC' : 
        d > 0.84579 ? '#08A6A9' : 
        d > 0.756142 ? '#08A1A7' : 
        d > 0.667928 ? '#089CA6' : 
        d > 0.581149 ? '#0896A5' : 
        d > 0.495804 ? '#0891A3' : 
        d > 0.411893 ? '#088CA2' : 
        d > 0.329417 ? '#0888A0' : 
        d > 0.248375 ? '#08859F' : 
        d > 0.168767 ? '#08809F' : 
        d > 0.090594 ? '#087B9E' : 
        d > 0.013855 ? '#08769D' : 
        d > -1.00000 ? '#009FFF' : 
        d > -2.00000 ? '#007FFF' : 
        d > -3.00000 ? '#005FFF' : 
        d > -4.00000 ? '#003FFF' : 
        d > -5.000000 ? '#001FE1' : 
        d > -6.00000 ? '#0000FF' : 
        d > -7.00000 ? '#1F00FF' : 
        d > -8.00000 ? '#3F00FF' : 
        d > -9.00000 ? '#6100E6' : 
        d > -10.00000 ? '#9B13E6' : 
        d > -11.00000 ? '#A627E8' : 
        d > -12.00000 ? '#B13BEA' : 
        d > -13.00000 ? '#BC4FEC' : 
        d > -14.00000 ? '#C763EE' : 
        d > -15.00000 ? '#D277F0' : 
        d > -16.00000 ? '#DD8BF2' : 
        d > -17.00000 ? '#E89FF4' : 
        d > -18.00000 ? '#F3B3F6' : 
        d > -19.00000 ? '#FEC7F8' : 
        '#000000';

    } 

    // place legend
    maplegend = L.control({position: 'bottomright'});

    // construct legend from geojson max and min
    maplegend.onAdd = function(map) {
        var result = [];
        for(var i = 0; i<geojson.features.length; i++){
            result.push(geojson.features[i].properties.temp);
        }
        // get unique values
        result = result.myUnique();
        var min = Math.min.apply(null, result),
        max = Math.max.apply(null, result);

        /*
        min = -12
        max = 30
        result = [-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        */

        // to limit max items in legend
        var divide = 15;
        if(result.length > divide){

            var steps = result.length;
            var result = [];
            for (var i = 0; i < parseInt(steps/2); i++) result.push(min+(2*i));

            function checkMaxVal(result){
                if(Math.max.apply(null, result) < max){
                    result.push(Math.max.apply(null, result)+2);
                    checkMaxVal(result);    
                }    
            }
            checkMaxVal(result);
        }

        var div = L.DomUtil.create('div', 'legend'),
        result = result.sort(function(a,b){return a - b}), 
        grades = result.reverse(), 
        labels = [];
        div.innerHTML += '<b>temperature<br></b><i>\u00B0C</i><br>'
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            grades[i] + '<br>';
        }
        return div;
    };

    // add lefend to map
    maplegend.addTo(map);
    addIdxLegend();

}


function addIdxLegend(){
    function getColorP(d) {
        return d == '-3' ? '#4575b4' :
        d == '-2'  ? '#91bfdb' :
        d == '-1'  ? '#e0f3f8' :
        d == '0'  ? '#ffffbf' :
        d == '1'  ? '#fee090' :
        d == '2'  ? '#fc8d59' :
        d == '3'  ? '#d73027' :
        '#9F0000';
    }

    legend2 = L.control({position: 'topright'});
    legend2.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'legendIdx'),
        grades = [3, 2, 1, 0, -1, -2, -3],
        labels = [];
        div.innerHTML += '<b>index</b><br>'
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i class="circle" style="background:' + getColorP(grades[i]) + '"></i> ' +
            grades[i] + '<br>';
        }

        return div;
    };

    legend2.addTo(map);
    var mHeight=parseInt($('#map').height());
    var lHeight=parseInt($('.legendIdx').height())+110;
    $('.legendIdx').css({'top':mHeight-lHeight+'px'})
}



function addRegioLegend(map){
    if(typeof this.maplegend !== 'undefined'){
        // map.removeLayer(this.legend);
        map.removeControl(this.maplegend);   
        maplegend = undefined;   
    } 
    if(typeof this.legend2 !== 'undefined'){
        // map.removeLayer(this.legend);
        map.removeControl(this.legend2);   
        legend2 = undefined;   
    } 



    // legend color gradient
    function getColor(d) {
        return d > 9999 ? '#000000' : 
        d > 0.99 ? '#a50026' : 
        d > 0.98 ? '#d73027' : 
        d > 0.97 ? '#f46d43' : 
        d > 0.96 ? '#fdae61' : 
        d > 0.95 ? '#fee090' : 
        d > 0.94 ? '#ffffbf' : 
        d > 0.93 ? '#e0f3f8' : 
        d > 0.92 ? '#abd9e9' : 
        d > 0.91 ? '#74add1' : 
        d > 0.90 ? '#4575b4' : 
        d > 0.85 ? '#313695' : 
        '#000000';
    }

    // place legend
    regioLegend = L.control({position: 'bottomright'});

    // construct legend from geojson max and min
    regioLegend.onAdd = function(map) {
        var result = [0.9,0.91,0.92,0.93,0.94,0.95,0.96,0.97,0.98,0.99,1.0]

        var div = L.DomUtil.create('div', 'legend'),
        result = result.sort(function(a,b){return a - b}), 
        grades = result.reverse(), 
        labels=[];
        div.innerHTML += '<b>R<sup>2</sup></b></br>'
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            grades[i] + '<br>';
        }
        return div;
    };

    // add lefend to map
    regioLegend.addTo(map);  
    
    addIdxLegend();
    $('.legendIdx').css({'left':'27px'})
}
