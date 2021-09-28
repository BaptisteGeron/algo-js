class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
if (((this.topLeftXPos>(otherRectangle.topLeftXPos+otherRectangle.length))||((this.topLeftXPos-this.width)>otherRectangle.topLeftXPos))||((otherRectangle.topLeftYPos-otherRectangle.width)>this.topLeftYPos)||((this.topLeftYPos-this.width)>otherRectangle.topLeftYPos)){
    return false;
}
else {
    return true;
}
    }
}
let rectangleArray= [];
for (i=1;i<1001;i++){
    let topLeftXPos = Math.floor(Math.random() * (1000));
    let topLeftYPos = Math.floor(Math.random() * (1000));
    let length = Math.floor(Math.random() * (10));
    let width = Math.floor(Math.random() * (10));
    let r = new rectangle (topLeftXPos, topLeftYPos, length, width);
    rectangleArray.push(r);
}
console.log(rectangleArray);
for (x=0;x<rectangleArray.length;x++){
for (i=0;i<rectangleArray.length;i++){
    console.log("rectangle " + x +" collides rectangle " + i + " " + rectangleArray[x].collides(rectangleArray[i]));
}
}