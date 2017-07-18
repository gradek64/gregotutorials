/**
 * Resize Module
 *
 * This script resizes all element in a page which have a class
 * of 'responsive'.
 *
 *
 * Dependencies : ADSPDBLjquery
 *              : hash change events 
 */

(function (){

    window.resize = function(width, height){
        
        var unitW = width;
        var unitH = height;
        var unitHprop;
        var unitWprop;
        var unitLprop;
        var unitRprop;
        var unitTprop;

        var theWidth;
        var theHeight;
        var pattW = /.*?-w(.*?)w-.*/gim;
        var pattH = /.*?-h(.*?)h-.*/gim;
        var lHash = location.hash;
        
        theWidth = pattW.exec(lHash);
        if (theWidth !== null && theWidth[1] !== null && theWidth[1] < unitW){
            theWidth =  Math.ceil(theWidth[1]);
        }

        theHeight = pattH.exec(lHash);
        if (theHeight !== null && theHeight[1] !== null && theHeight[1] < unitH){
            theHeight = parseInt(theHeight[1], 10);
        }
    
        if(typeof theHeight === 'number' && typeof theWidth === 'number'){
        
            unitWprop = theWidth/unitW;
            unitHprop = theHeight/unitH;
            unitLprop = theWidth/unitW;
            unitRprop = theWidth/unitW;
            unitTprop = theHeight/unitH;

            $('.responsive').each(function(){
                var w = parseInt($(this).css('width'), 10);
                var h = parseInt($(this).css('height'), 10);
                var l = parseInt($(this).css('left'),10);
                var t = parseInt($(this).css('top'),10);
                $(this).css('width', (w * unitWprop) + 'px');
                $(this).css('height', (h * unitHprop)+'px');
                $(this).css('top',(t*unitTprop)+'px');
                $(this).css('left',(l*unitLprop)+'px');
            });
        }
        
    };
})();
