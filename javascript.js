// soups
function borscht_soup(){
    document.getElementById("s1").style.display="flex";
}
function cream_of_tomato(){
    document.getElementById("s2").style.display="flex";
}
function french_onion_soup(){
    document.getElementById("s3").style.display="flex";
}
function itaalian_wedding_soup(){
    document.getElementById("s4").style.display="flex";
}
function lentil_soup(){
    document.getElementById("s5").style.display="flex";
}
function minestrone_soup(){
    document.getElementById("s6").style.display="flex";
}
function tom_yum_soup(){
    document.getElementById("s7").style.display="flex";
}
function wild_mushroom_soup(){
    document.getElementById("s8").style.display="flex";
}
function chicken_tortilla_soup(){
    document.getElementById("s9").style.display="flex";
}
function egg_dro_soup(){
    document.getElementById("s10").style.display="flex";
}


// NONE


function borschtno(){
    document.getElementById("s1").style.display="none";
}
function cream_of_tomatono(){
    document.getElementById("s2").style.display="none";
}
function french_onion_soupno(){
    document.getElementById("s3").style.display="none";
}
function itaalian_wedding_soupno(){
    document.getElementById("s4").style.display="none";
}
function lentil_soupno(){
    document.getElementById("s5").style.display="none";
}
function minestrone_soupno(){
    document.getElementById("s6").style.display="none";
}
function tom_yum_soupno(){
    document.getElementById("s7").style.display="none";
}
function wild_mushroom_soupno(){
    document.getElementById("s8").style.display="none";
}
function chicken_tortilla_soupno(){
    document.getElementById("s9").style.display="none";
}
function egg_dro_soupno(){
    document.getElementById("s10").style.display="none";
}

// VEG-STARTERS

function showElement(elementid){
    document.getElementById(elementid).style.display="flex";
}
function hideelement(elementid){
    document.getElementById(elementid).style.display="none";
}

let items={
    SB1:{item:"borscht_soup",pri:189},
    SC2:{item:"cream_of_tomato",pri:209},
    SF3:{item:"french_onion_soup",pri:219},
    SI4:{item:"itaalian_wedding_soup",pri:189},
    SL5:{item:"lentil_soup",pri:189},
    SM6:{item:"minestrone_soup",pri:189},
    ST7:{item:"tom_yum_soup",pri:199},
    SW8:{item:"wild_mushroom_soup",pri:219},
    SC9:{item:"chicken_tortilla_soup",pri:249},
    SE10:{item:"egg_dro_soup",pri:149},

    // VEG STARTERS
    VSB1:{item:"baked-veg-spring-roll",pri:149},
    VSC2:{item:"chilli-panner-dry",pri:179},
    VSG3:{item:"gobi-manchuriya",pri:130},
    VSP4:{item:"panner-tikka-skewers",pri:229},
    VSS5:{item:"stuffed-mushrooms",pri:189},
    VSV6:{item:"veg-pa-choistiru-fry",pri:169},
    VSV7:{item:"veg-manchuriya",pri:159},
    VSV8:{item:"veg-pakoda",pri:119},
    VSV9:{item:"vegetable-tempura",pri:249},
    VSH10:{item:"hakka-noodles",pri:129},

    //NON VEG STARTERS

    NVSC1:{item:"chicken-scekh-kabab",pri:219},
    NVSC2:{item:"chocken-satay",pri:239},
    NVSC3:{item:"chicken-spring",pri:179},
    NVSC4:{item:"chilli-prawns",pri:379},
    NVSA5:{item:"amritsari-fidh",pri:389},
    NVSS6:{item:"sesame-chicken",pri:269},
    NVSS7:{item:"spicy-chicken-wing",pri:199},
    NVSS8:{item:"stuffed-crabs",pri:419},
    NVSS9:{item:"szechuan-chicken",pri:249},
    NVSH10:{item:"hakka-noodles",pri:209},


    //VEG MAIN

    VMB1:{item:"bagar-rice",pri:139},
    VMW2:{item:"white-rice",pri:79},
    VMS3:{item:"sambar-sadam",pri:179},
    VMC4:{item:"curd-rice",pri:99},
    VMP5:{item:"paneer-rice",pri:189},
    VMM6:{item:"mushroom-rice",pri:199},
    VMH7:{item:"hyd-veg-biryani",pri:209},
    VMV8:{item:"veg-dum-biryani",pri:219},
    VMK9:{item:"kashmiri-biryani",pri:249},
    VMS10:{item:"subz-biryani",pri:229},
    VMG11:{item:"gongura-chutney",pri:69},
    VMT12:{item:"tomato-dal",pri:109},


    //NON-VEG-MAIN


    NVMH1:{item:"hyderabadi-biryani",pri:229},
    NVMC2:{item:"chettinad-biryani",pri:379},
    NVMA3:{item:"ambur-mutton-biryani",pri:379},
    NVMD4:{item:"dum-biryani",pri:229},
    NVMM5:{item:"mixed-potlam-biryani",pri:489},
    NVMM6:{item:"mutton-curry",pri:229},
    NVMC7:{item:"chepa-pulusu",pri:209},
    NVMH8:{item:"haleem",pri:219},
    NVMK9:{item:"kodi-kura",pri:189},
    NVMH10:{item:"nihari",pri:269},
    NVMP11:{item:"prawn-pulusu",pri:269},
    NVMP12:{item:"prawn-pulav",pri:309},

    //DESERTS


    DA1:{item:"apple-pie",pri:199},
    DC2:{item:"cheese-cake",pri:229},
    DC3:{item:"classic-creamy-kunafa",pri:239},
    DC4:{item:"creme-brulee",pri:199},
    DG5:{item:"gulab-jamun(2pcs)",pri:59},
    DC6:{item:"chocolate-lava-cake",pri:229},
    DM7:{item:"macarons",pri:169},
    DP8:{item:"panna-cotta",pri:219},
    DR9:{item:"rasamalai(4pcs)",pri:149},
    DT10:{item:"tiramisu",pri:239},
    DT11:{item:"tree-leches-cake",pri:219}


}
function final(){
    const product=document.getElementById("sear").value;
    const quantity=parseInt(document.getElementById("num").value);
    if(items.hasOwnProperty(product) && quantity>0){
        const price=items[product].pri
        const total=price*quantity;
        document.getElementById("bill").style.display="flex";
        document.getElementById("item1").innerHTML=`${items[product].item}`
        document.getElementById("item1price").innerHTML=`${price}`
        document.getElementById("quan").innerHTML=`${quantity}`
        document.getElementById("itemp").innerHTML=`${total}`

    }
}



