class ElementObserver{
    constructor(elementId){
        this.element=document.getElementById(elementId);

    }
    
    update(model){    //dependency injection make sure it's of type model otherwise dont't accept it.
        this.element.innerHTML=model.number;
        this.element.style.backgroundColor=model.color;
    }
    
}