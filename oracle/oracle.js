window.onload = chooseAllPics;

const allPix = [
  "oracle_pics/DSC03608.JPG",
  "oracle_pics/DSC03813.JPG",
  "oracle_pics/DSC03556.JPG",
  "oracle_pics/DSC03782.JPG",
  "oracle_pics/DSC03594.JPG",
  "oracle_pics/DSC03421.JPG",
  "oracle_pics/DSC03582.JPG",
  "oracle_pics/DSC03795.JPG",
  "oracle_pics/DSC03554.JPG",
  "oracle_pics/DSC03805.JPG",
  "oracle_pics/DSC03815.JPG",
  "oracle_pics/DSC03578.JPG",
  "oracle_pics/DSC03752.JPG",
  "oracle_pics/DSC03784.JPG",
  "oracle_pics/DSC03592.JPG",
  "oracle_pics/DSC03625.JPG",
  "oracle_pics/DSC03816.JPG",
  "oracle_pics/DSC03744.JPG",
  "oracle_pics/DSC03546.JPG",
  "oracle_pics/DSC03817.JPG",
  "oracle_pics/DSC03522.JPG",
  "oracle_pics/DSC03484.JPG",
  "oracle_pics/DSC03533.JPG",
  "oracle_pics/DSC03725.JPG",
  "oracle_pics/DSC03724.JPG",
  "oracle_pics/DSC03485.JPG",
  "oracle_pics/DSC03446.JPG",
  "oracle_pics/DSC03524.JPG",
  "oracle_pics/DSC03448.JPG",
  "oracle_pics/DSC03529.JPG",
  "oracle_pics/DSC03515.JPG",
  "oracle_pics/DSC03449.JPG",
  "oracle_pics/DSC03502.JPG",
  "oracle_pics/DSC03516.JPG",
  "oracle_pics/DSC03489.JPG",
  "oracle_pics/DSC03538.JPG",
  "oracle_pics/DSC03576.JPG",
  "oracle_pics/DSC03562.JPG",
  "oracle_pics/DSC03414.JPG",
  "oracle_pics/DSC03560.JPG",
  "oracle_pics/DSC03763.JPG",
  "oracle_pics/DSC03561.JPG",
  "oracle_pics/DSC03559.JPG",
  "oracle_pics/DSC03799.JPG",
  "oracle_pics/DSC03772.JPG",
  "oracle_pics/DSC03570.JPG",
  "oracle_pics/DSC03412.JPG"
]
var myPix = new Array();
function choosePic(i) {
    oldpic = document.getElementById("myPicture" + i).src;
    console.log(oldpic)
    var randomPic = allPix[Math.floor(Math.random() * allPix.length)];
    while (myPix.includes(randomPic)) {
        randomPic = allPix[Math.floor(Math.random() * allPix.length)];
    }
    document.getElementById("myPicture" + i).src = randomPic;
    myPix = myPix.filter(function(value, index, arr){ 
        return value.split("/").pop() != oldpic.split("/").pop();
    });
    myPix.push(randomPic);
    console.log(myPix);
    console.log(allPix);
};
function chooseAllPics() {
    choosePic(1);
    choosePic(2);
    choosePic(3);
    choosePic(4);
};
function openInfo() {
    document.getElementById("myInfo").style.display = "block";
};
function closeInfo() {
    document.getElementById("myInfo").style.display = "none";
} 