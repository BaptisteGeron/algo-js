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

let a = new rectangle(2,2,2,2);
let b = new rectangle(3,2,2,2);
console.log(a.collides(b));
