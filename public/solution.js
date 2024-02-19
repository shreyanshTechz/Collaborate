function stopwatch(){
    let startTime = 0;
    this.duration = ()=>{
        if(startTime === 0){
            throw new Error("Stopwach has not started yet");
        }
        return new Date().getTime() - startTime;
    };
    this.start = ()=>{
        if(startTime !==0){
            throw new Error("Stopwatch already started");
        }
        startTime = new Date().getTime();
    }
    this.end = ()=>{
        if(startTime === 0){
            throw new Error("Stopwach has not started yet");
        }
        startTime = 0;
    }

    Object.defineProperty(this,'durasex',{
        get : function(){return "HHHHHHH"}
    });
}

