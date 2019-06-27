var navList = document.getElementById('nav-list').getElementsByTagName('li');
for (var i = 0 ; i<navList.length;i++){
    navList[i].onmousemove = function(){
        if(this.className != 'show'){
            this.className = "show"
        }
    }
    navList[i].onmouseout = function(){
        if(this.className != ''){
            this.className = ""
        }
    }
}