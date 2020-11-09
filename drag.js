class drag{
    constructor(id){
        this.dragBox = document.getElementById(id);
        this.initx,
        this.inity,
        this.dx,
        this.dy,
        this.offsetx,
        this.offsety //初始坐标 移动距离 坐标偏移距离
        this.width = this.dragBox.offsetWidth
        this.height = this.dragBox.offsetHeight
        this.screenWidth = document.body.offsetWidth 
        this.screenHeight = document.body.offsetHeight
        this.draggle();
    }

    draggle(){
       //监听鼠标按下 监听对象 目标元素
       let that = this
       this.addEvent(this.dragBox,'mousedown',this.down)


       //监听鼠标弹起 监听对象 文档
       this.addEvent(document,'mouseup',this.up)
    }


    addEvent(target,eventName,fn){
        var that = this
        target.addEventListener(eventName,fn.bind(that))
    }
    

    down(e){
        this.initx = e.clientX
        this.inity = e.clientY
        this.offsetx = e.offsetX
        this.offsety = e.offsetY
        //监听鼠标移动 监听对象 文档
        var that = this
        document.onmousemove = this.move.bind(that)
    }

    move(e){
            let movex = e.clientX
            let movey = e.clientY
            let top = movey - this.offsety  
            let left = movex - this.offsetx
            //边界判断
            let minx = 0,miny = 0,maxx = this.screenWidth-this.width,maxy = this.screenHeight-this.height
            left<=minx?left = 0:'' 
            left>=maxx?left = maxx:''
            top<=miny?top = 0:''
            top>=maxy?top = maxy:''
            this.dragBox.style.top = top
            this.dragBox.style.left = left 
    }

    up(){
        document.onmousemove = null;
    }
    
}