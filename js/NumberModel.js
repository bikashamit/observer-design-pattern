class NumberModel{
    constructor(){
        this.number=0;
        this.color='red';
        this.observers=[];
    }
    increment(){
        const color=['orange','red','green','blue']
        this.number++;
        this.color=color[Math.floor(Math.random()*color.length)];
        this.notifyObservers();

    }
    addObserver(o){
        this.observers.push(o);
    }
    notifyObservers(){
        for(let o of this.observers){
            o.update(this);
        }
    }
    
}