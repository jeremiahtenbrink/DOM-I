window.onload = () => {
    
    let msTens = document.getElementById("msTens");
    msTens.textContent = 0;
    let node = msTens;
    for (let i = 0; i < 4; i++){
        node = node.previousElementSibling;
        if (node.id !== "colon"){
            node.textContent = 0;
        }
    }
    let interval = setInterval(() => {
        
    
    
        addMs(msTens);
        
    }, 10);
    
    function addMs (node) {
        if (node.id === "secondTens"){
            node.textContent = 1;
            window.clearInterval(interval);
            return;
        }
        if (node.id === "colon"){
            addMs(node.previousElementSibling);
            return;
        }
        if (node.textContent === "5"){
            node.textContent = "0";
            addMs(node.previousElementSibling);
            return;
        }
        
        
        let number = parseInt(node.textContent);
        number += 1;
        node.textContent = number;
    }
};

