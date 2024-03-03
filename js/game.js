AFRAME.registerComponent("game",{
    schema:{
        elId:{type:"string",default:"fish"}
    },
    update:function(){
        this.isCollide(this.data.elId)
    },
    isCollide:function(elId){
        const element = elId
        element.addEventListener("collide",()=>{
            if(elId.includes("#fishs")){
                console.log("touched fish"+elId)
            }
            else if(elId.includes("#ring")){
                console.log("touched ring"+elId)
            }
        })
    }
})