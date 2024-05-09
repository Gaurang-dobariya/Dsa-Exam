class Queue {

    constructor() {

        this.arr = []
        this.size = 6

    }

    Underflow() {
        
        if (this.arr.length === 0) {
            
            console.log("Queue is Underflow");

        }
    }

    push(element) {

        if (this.arr.length < 6) {

            this.arr.push(element)

        }
    }

    Overflow() {
        
        if (this.arr.length < 6) {

         console.log("Queue is Overflow");


        }
    }

    print() {

        this.arr.map((val, ind) => {

            console.log(val);

        })
    }

    removeElement(index) {

        for (let i = index; i < this.arr.length; i++) {

            this.arr[i] = this.arr[i + 1]
        }

        this.arr.length = this.arr.length - 1
    } 
    
    addElement(index, element) {

        for (let i = this.arr.length - 1; i >= index; i--) {

            this.arr[i + 1] = this.arr[i]

        }
        this.arr[index] = element

        console.log(this.arr);
    }

}

let Q1 = new Queue()

Q1.push(0)
Q1.push(5)
Q1.push(2)
Q1.push(10)
Q1.push(6)

Q1.print()


