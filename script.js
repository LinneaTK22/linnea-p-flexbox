var i = 1; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[1] = "/products/necklace-img/necklace_1.jpeg";
images[2] = "/products/ring-img/1-ring.jpeg";
images[3] = "/products/bracelet-img/2bracelet.jpeg";
images[4] = "/products/earring-img/4-earring.jpeg";
images[5] = "/products/hairaccessories-img/3-hair.jpeg";
images[6] = "/products/organisation-img/5-org.jpeg";
images[7] = "/products/necklace-img/necklace_3.jpeg";
images[8] = "/products/ring-img/4-ring.jpeg";
images[9] = "/products/bracelet-img/6bracelet.jpeg";
images[10] = "/products/earring-img/10-earring.jpeg";
images[11] = "/products/hairaccessories-img/7-hair.jpeg";
images[12] = "/products/organisation-img/6-org.jpeg";
images[13] = "/products/necklace-img/necklace_12.jpeg";
images[14] = "/products/ring-img/7-ring.jpeg";
images[15] = "/products/bracelet-img/8bracelet.jpeg";
images[16] = "/products/earring-img/12-earring.jpeg";
images[17] = "/products/hairaccessories-img/8-hair.";
images[18] = "/products/organisation-img/8-org.jpeg";
images[19] = "/products/necklace-img/necklace_13.jpeg";
images[20] = "/products/ring-img/8-ring.jpeg";
images[21] = "/products/bracelet-img/9bracelet.jpeg";
images[22] = "/products/earring-img/15-earring.jpeg";
images[23] = "/products/hairaccessories-img/9-hair.jpeg";
images[24] = "/products/organisation-img/19-org.jpeg";
images[25] = "/products/necklace-img/necklace_16.jpeg";
images[26] = "/products/ring-img/10-ring.jpeg";
images[27] = "/products/bracelet-img/12bracelet.jpeg";
images[28] = "/products/earring-img/18-earring.jpeg";
images[29] = "/products/hairaccessories-img/10-hair.jpeg";
images[30] = "/products/organisation-img/29-org.jpeg";
images[31] = "/products/necklace-img/necklace_17.jpeg";
images[32] = "/products/ring-img/13-ring.jpeg";
images[33] = "/products/bracelet-img/16bracelet.jpeg";
images[34] = "/products/earring-img/28-earring.jpeg";
images[35] = "/products/hairaccessories-img/11-hair.jpeg";
images[36] = "/products/organisation-img/36-org.jpeg";
images[37] = "/products/necklace-img/necklace_18.jpeg";
images[38] = "/products/ring-img/14-ring.jpeg";
images[39] = "/products/bracelet-img/19bracelet.jpeg";
images[40] = "/products/earring-img/31-earring.jpeg";
images[41] = "/products/hairaccessories-img/12-hair.jpeg";
images[42] = "/products/ring-img/15-ring.jpeg";
images[43] = "/products/necklace-img/necklace_19.jpeg";
images[44] = "/products/ring-img/21-ring.jpeg";
images[45] = "/products/bracelet-img/20bracelet.jpeg";
images[46] = "/products/hairaccessories-img/13-hair.jpeg";
images[47] = "/products/ring-img/26-ring.jpeg";
images[48] = "/products/necklace-img/necklace_23.jpeg";
images[49] = "/products/ring-img/27-ring.jpeg";
images[50] = "/products/bracelet-img/21bracelet.jpeg";
images[51] = "/products/hairaccessories-img/15-hair.jpeg";
images[52] = "/products/ring-img/28-ring.jpeg";
images[53] = "/products/hairaccessories-img/16-hair.jpeg";
images[54] = "/products/necklace-img/necklace_26.jpeg";
images[55] = "/products/ring-img/29-ring.jpeg";
images[56] = "/products/bracelet-img/26bracelet.jpeg";
images[57] = "/products/ring-img/30-ring.jpeg";
images[58] = "/products/hairaccessories-img/17-hair.jpeg";
images[59] = "/products/ring-img/31-ring.jpeg";
images[60] = "/products/necklace-img/necklace_31.jpeg";
images[61] = "/products/hairaccessories-img/20-hair.jpeg";
images[62] = "/products/bracelet-img/31bracelet.jpeg";
images[63] = "/products/hairaccessories-img/22-hair.jpeg";
images[64] = "/products/ring-img/35-ring.jpeg";
images[65] = "/products/hairaccessories-img/23-hair.jpeg";
images[66] = "/products/necklace-img/necklace_33.jpeg";
images[67] = "/products/hairaccessories-img/29-hair.jpeg";
images[68] = "/products/bracelet-img/36bracelet.jpeg";
images[69] = "/products/ring-img/37-ring.jpeg";
images[70] = "/products/hairaccessories-img/33-hair.jpeg";
images[71] = "/products/ring-img/41-ring.jpeg";
images[72] = "/products/necklace-img/necklace_34.jpeg";
images[73] = "/products/ring-img/43-ring.jpeg";
images[74] = "/products/bracelet-img/38bracelet.jpeg";
images[75] = "/products/hairaccessories-img/34-hair.jpeg";
images[76] = "/products/ring-img/48-ring.jpeg";
images[77] = "/products/ring-img/50-ring.jpeg";
images[78] = "/products/hairaccessories-img/36-hair.jpeg";
images[79] = "/products/ring-img/53-ring.jpeg";
images[80] = "/products/bracelet-img/39bracelet.jpeg";
images[81] = "/products/ring-img/56-ring.jpeg";
images[82] = "/products/hairaccessories-img/40-hair.jpeg";
images[83] = "/products/ring-img/57-ring.jpeg";
images[84] = "/products/ring-img/58-ring.jpeg";
images[85] = "/products/hairaccessories-img/44-hair.jpeg";
images[86] = "/products/ring-img/63-ring.jpeg";
images[87] = "/products/hairaccessories-img/45-hair.jpeg";
images[88] = "/products/ring-img/65-ring.jpeg";
images[89] = "/products/ring-img/71-ring.jpeg";
images[90] = "/products/hairaccessories-img/48-hair.jpeg";
images[91] = "/products/ring-img/72-ring.jpeg";
images[92] = "/products/hairaccessories-img/51-hair.jpeg";
images[93] = "/products/hairaccessories-img/52-hair.jpeg";
images[94] = "/products/hairaccessories-img/57-hair.jpeg"; 
images[95] = "/products/hairaccessories-img/67-hair.jpeg";
images[96] = "/products/hairaccessories-img/68-hair.jpeg";

//alert(images.length)
//alert(images[0])
// Change Image
function changeImg(){
    //alert(i +": " + images[i])
	document.getElementById("slideshow").src = images[getRandomInt(images.length -1)+1];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 1;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// Run function when page loads
window.onload=changeImg;

//products slide
const prductContainers = [. . .document.querySelextorAll('.product-container')];
const nxtBtn = [. . .document.querySelextorAll('.nxt-btn')];
const preBtn = [. . .document.querySelextorAll('.pre-btn')];

productContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundigClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})

	preBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})
});