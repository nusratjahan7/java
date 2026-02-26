 
//  option 2 for click event handler
    function makeYellow(){
        document.body.style.background = "yellow";
    }
    function makeRed(){
        document.body.style.background = "red";
    }
        
    // option: 3 get Element by id and then set onclick
    const btnMakeBlue = document.getElementById('btn-make-blue');
    btnMakeBlue.onclick = function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }
    // Option: 3 diffrent version
    const btnMakePurple = document.getElementById('btn-make-purple');
    btnMakePurple.onclick = makePurple;
    function makePurple (){
        document.body.style.backgroundColor = 'purple';
    }

    // option 4: addEventListener 
    document.getElementById('btn-make-green').addEventListener('click', function makeGreen (){
        document.body.style.backgroundColor = 'green';
    })
     
    document.getElementById('btn-make-gold')
    .addEventListener('click', 
        function(){
        document.body.style.backgroundColor = 'goldenrod';
    })
