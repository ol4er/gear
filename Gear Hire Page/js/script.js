//nah ok so here's the thing.
//chuck every item of hire into a code - have an index that turns em into objects. spit the objects out into pretty html and shit
/*eslint-env browser*/
//    Cameras

var cameras = [];
var rates = [];

var lighting = [];


var c1 = {equipName: "Canon EOS C100 HD Camera", 
            hireRate: "200", 
            type: "camera"};
var c21 = {equipName: "Canon 5D Mark IV Camera", 
            hireRate: "200", 
            type: "camera"};
var c15 = {equipName: "Black Magic 4K Camera", 
            hireRate: "200", 
            type: "camera"};
var c20 = {equipName: "DJI Osmo 4K Camera", 
            hireRate: "200", 
            type: "camera"};
var c18 = {equipName: "Panasonic 4K Camcorder", 
            hireRate: "200", 
            type: "camera"};
var c3 = {equipName: "Sony PMW-EXI HD Camera", 
            hireRate: "200", 
            type: "camera"};
var c4 = {equipName: "Canon Legaria HV40 HDV Camcorder", 
            hireRate: "200", 
            type: "camera"};
//Lenses
var c13 = {equipName: "Canon Prime Lens Kit ", 
            hireRate: "66", 
            type: "lens"};
var c12 = {equipName: "Canon EF 100mm f/2.8L Macro IS USM Lens", 
            hireRate: "66", 
            type: "lens"};
var c10 = {equipName: "Canon EF 16-35mm f/2.8L II USM Wide Angle Lens", 
            hireRate: "66", 
            type: "lens"};
var c19 = {equipName: "Canon 24-70mm f2.8L", 
            hireRate: "66", 
            type: "lens"};
var c11 = {equipName: "Canon 24-105mm f/4L IS USM Lens", 
            hireRate: "66", 
            type: "lens"};
var c9 = {equipName: "Canon EF 70-200mm f/2.8L IS II USM Lens", 
            hireRate: "66", 
            type: "lens"};
var c14 = {equipName: "Lensbaby Pro-Effects Kit", 
            hireRate: "66", 
            type: "lens"};

//Camera Support -- check var codes from here down, fix all above
var t1 = {equipName: "Miller Fluid Head Tripod", 
            hireRate: "44", 
            type: "tripod"};
var t2 = {equipName: "Manfrotto Monopod", 
            hireRate: "44", 
            type: "tripod"};
var t3 = {equipName: "Redrock DSLR Cinema Bundle ", 
            hireRate: "44", 
            type: "tripod"};
var t11 = {equipName: "Redrock Micro Shoulder Mount", 
            hireRate: "44", 
            type: "tripod"};
var t4 = {equipName: "Digi Dolly V2 Kit", 
            hireRate: "44", 
            type: "tripod"};
var c7 = {equipName: "Rockn V-7SDI 7\" LED Camera Top", 
            hireRate: "44", 
            type: "tripod"};
var c7 = {equipName: "VF-4 LCD Viewfinder", 
            hireRate: "44", 
            type: "tripod"};
var t10 = {equipName: "Dinkum Systems Pack", 
            hireRate: "44", 
            type: "tripod"};
var t9 = {equipName: "Phone Accessories Kit", 
            hireRate: "44", 
            type: "tripod"}; 
//steadicam
var t6 = {equipName: "Steadicam Smoothee", 
            hireRate: "44", 
            type: "stabilise"};
var t13 = {equipName: "Autopilot Stabilisation System", 
            hireRate: "44", 
            type: "stabilise"};
//Lighting
var l1 = {equipName: "Dedolight Basic Tungsten 3 Light Kit 150W", 
            hireRate: "44", 
            type: "lighting"};
var l2 = {equipName: "Ianiro Redhead Lighting Kit", 
            hireRate: "44", 
            type: "lighting"};
var l5 = {equipName: "6 Tube Fluoro Lamp Daylight", 
            hireRate: "44", 
            type: "lighting"};
var l3 = {equipName: "Lightek 1x1 LED Panel", 
            hireRate: "44", 
            type: "lighting"};
var l12 = {equipName: "LED On-Camera Light", 
            hireRate: "44", 
            type: "lighting"};
var l13 = {equipName: "3 Light LED Kit", 
            hireRate: "44", 
            type: "lighting"};
var l4 = {equipName: "V-Lock Batteries", 
            hireRate: "44", 
            type: "lighting"};
var l7 = {equipName: "HMI - 150W Light (5600K)", 
            hireRate: "44", 
            type: "lighting"};
var l7b = {equipName: "HMI Gobo Attachment", 
            hireRate: "44", 
            type: "lighting"};
var l14 = {equipName: "Avenger C-Stand (3.25m)", 
            hireRate: "44", 
            type: "lighting"};
var l9 = {equipName: "Reflector 5-in-1 or Silver/White/Gold", 
            hireRate: "44", 
            type: "lighting"};
var l10 = {equipName: "Reflector Holder", 
            hireRate: "44", 
            type: "lighting"};
var l11 = {equipName: "Super Clamps", 
            hireRate: "44", 
            type: "lighting"};
var u1 = {equipName: "Green Screen", 
            hireRate: "44", 
            type: "lighting"};
var u5 = {equipName: "Background System", 
            hireRate: "44", 
            type: "lighting"};
//sound
var s8 = {equipName: "Zoom F8 Multitrack Field Recorder", 
            hireRate: "44", 
            type: "sound"};
var s4 = {equipName: "Zoom H4 Next Handy Recorder", 
            hireRate: "44", 
            type: "sound"};
var s3 = {equipName: "Azden FMX-42 4 Channel Field Mixer", 
            hireRate: "44", 
            type: "sound"};
var s6 = {equipName: "Beachtek DXA-5DA and DXA-2T XLR Adapter", 
            hireRate: "44", 
            type: "sound"};
var s1a = {equipName: "Sennheiser ME66 Boom kit ", 
            hireRate: "44", 
            type: "sound"};
var s1b = {equipName: "Sennheiser 416 Boom kit", 
            hireRate: "44", 
            type: "sound"};
var s1c = {equipName: "Rode NTG-1 Boom kit", 
            hireRate: "44", 
            type: "sound"};
var s1d = {equipName: "Rode NTG-3 Boom kit", 
            hireRate: "44", 
            type: "sound"};
var s2 = {equipName: "Sennheiser EW100 G3 Wireless Microphone", 
            hireRate: "44", 
            type: "sound"};
var s10 = {equipName: "Rode Lavalier Lapel Microphone", 
            hireRate: "44", 
            type: "sound"};
var s7 = {equipName: "Tama Microphone Stand ", 
            hireRate: "44", 
            type: "sound"};
var s9 = {equipName: "Rechargable AA Batteries + Charger ", 
            hireRate: "44", 
            type: "sound"};
var s2b = {equipName: "Wireless Transmitter Belt", 
            hireRate: "44", 
            type: "sound"};
    //Projectors
var p1 = {equipName: "Optoma DLP Full HD Projector", 
            hireRate: "44", 
            type: "projector"};
//unit kits    
var u2 = {equipName: "Safety Kit", 
            hireRate: "44", 
            type: "unit"};
var u3 = {equipName: "Catering Kit", 
            hireRate: "44", 
            type: "unit"};
var u4 = {equipName: "Wardrobe Kit", 
            hireRate: "44", 
            type: "unit"};

//Add new gear here
//After creating equipment variable, add var to below list
var gearList = [c1,c10,c21,c15];

//testing output of data AGGRESIVELY
alert(gearList[4].equipName);

//cameras = gearList.filter(gearList[2].type == "camera")

    var max = gearList.length;
//Object.values(object var) returns the object in an array eg 
function gearFunc() {
    for(i = 0; i < max; i++){
    var gearArr = (Object.values(gearList[i]));
    if (gearArr[2] == "camera"){
    cameras.push(" <br>" + gearArr[0]); //god fix this plz
    } else if (gearArr[2] == "lighting"){
        lighting.push(gearArr[0]);}
    else {return;}
}
}
gearFunc();
//var sound = [];


//add all variables to sub category array, use loop to generate each list. with h3 head, then name & rate in p. 
//    if xyz.type == "camera"){ 
//    cameras.push(c100) 
//    }

document.getElementById("gearList").innerHTML = cameras;
console.log(lighting);
//document.getElementById("gearList").innerHTML = lighting;
// cant be innerHTML 2 of the same ID, the latter will overwrite


document.getElementById("rateList").innerHTML = rates;


//function equipment() {
//    
//    document.getElementById("gearList2").innerHTML = gear.cameras
//
//}
// make an object for each piece of equipment, then stick it in an array.
//     Canon EOS C100 HD Camera
//     Canon 5D Mark IV Camera
//     Black Magic 4K Camera
//     Canon 60D Kit
//     DJI Osmo 4K Camera
//     Panasonic 4K Camcorder 
//     Sony PMW-EXI HD Camera 
//     Canon Legaria HV40 HDV Camcorder 
//     Richo Theta 360 VR Digital Camera 
//    
//    Lenses
//     Canon Prime Lens Kit 
//     Canon EF 100mm f/2.8L Macro IS USM Lens 
//     Canon EF 16-35mm f/2.8L II USM Wide Angle Lens 
//     Canon 24-70mm f2.8L 
//     Canon 24-105mm f/4L IS USM Lens 
//     Canon EF 70-200mm f/2.8L IS II USM Lens 
//     Lensbaby Pro-Effects Kit 
//    
//    Camera Support
//     Miller Fluid Head Tripod 
//     Manfrotto Monopod 
//     Redrock DSLR Cinema Bundle 
//     Redrock Micro Shoulder Mount 
//     Digi Dolly V2 Kit 
//     Rockn V-7SDI 7" LED Camera Top 
//     VF-4 LCD Viewfinder 
//     Dinkum Systems Pack 
//     Phone Accessories Kit 
//    
//    Steadicam
//     Steadicam Pilot 
//     Steadicam Smoothee 
//    
//    Lighting
//     Dedolight Basic Tungsten 3 Light Kit 150W 
//     Ianiro Redhead Lighting Kit 
//     6 Tube Fluoro Lamp Daylight 
//     Lightek 1x1 LED Panel 
//     LED On-Camera Light 
//     3 Light LED Kit 
//     V-Lock Batteries 
//     HMI - 150W Light (5600K) 
//     HMI Gobo Attachment 
//     Avenger C-Stand (3.25m) 
//     Reflector 5-in-1 or Silver/White/Gold 
//     Reflector Holder 
//     Super Clamps 
//     Green Screen 
//     Background System 
//     Smoke Machine 
//    
//    Sound
//     Zoom F8 Multitrack Field Recorder 
//     Zoom H4 Next Handy Recorder 
//     Azden FMX-42 4 Channel Field Mixer 
//     Beachtek DXA-5DA and DXA-2T XLR Adapter 
//     Sennheiser ME66 Boom kit 
//     Sennheiser 416 Boom kit 
//     Rode NTG-1 Boom kit 
//     Rode NTG-3 Boom kit 
//     Sennheiser EW100 G3 Wireless Microphone 
//     Rode Lavalier Lapel Microphone 
//     Tama Microphone Stand 
//     Rechargable AA Batteries + Charger 
//     Wireless Transmitter Belt 
//    
//    Projectors
//     Optoma DLP Full HD Projector 
//    
//    Unit/On-Set Kits
//     Safety Kit 
//     Catering Kit 
//     Wardrobe Kit 
