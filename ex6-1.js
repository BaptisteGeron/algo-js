
class circle {
    constructor(xPos, yPos, radius){
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;}

        get area () {
            let surface = Math.PI*Math.pow(this.radius, 2);
            return (surface);
        }
        
        move(xOffset, yOffset) {
           this.xPos+=xOffset;
            this.yPos+=yOffset;
            return ([this.xPos, this.yPos]);
        }
    }


const round1 = new circle (1,1,2);

console.log(round1.area);
console.log(round1.move(3,0)[0] + " " + round1.move(3,0)[1]);
