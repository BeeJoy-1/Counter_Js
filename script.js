
let text = document.querySelectorAll(".text")
let arr = Array.from(text)

arr.map((item)=> {

    let count = 0
    function counterUp(){
        count++
        item.innerHTML = count
        if (item.dataset.count == count){
            clearInterval(stop)
        }
    }
    
    let stop =  setInterval(
        function(){
            counterUp()
    },40)

})

