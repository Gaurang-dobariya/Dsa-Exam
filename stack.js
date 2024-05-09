class stack {

    constructor() {
        
        this.arr = []
        this.size = 6

    }

    IsUnderflow() {
        
        if (this.arr.length == 0) {
            
            console.log("Stack Is Underflow");

        }
    }

    IsOverflow() {
        
        if (this.arr.length > 6) {
            
            console.log("Stack Is OverFlow");

        }
    }

    push(element) {   

        this.arr.push(element)
    }

    print() {
        
        this.arr.map((val , ind) => {
  
            console.log(val);

        })
    }

}

let s1 = new stack()



s1.push(50)
s1.push(5)
s1.push(1)
s1.push(0)
s1.push(6)
s1.push(7)
s1.push(10)

s1.print()






