console.log('handler file added');


document.getElementById('btn-update-title')
    .addEventListener('click',function(){
        // console.log('btn clicked');
        const titleTextElement = document.getElementById('title-text');
        // console.log(titleTextElement);
        titleTextElement.innerText = 'Update page title text.';
    })

    document.getElementById('btn-login')
        .addEventListener('click', function(){
            // console.log('login btn clicked');
            const userInfoEl = document.getElementById('users-info');
            userInfoEl.innerText = 'user login successfully' ;
        })


    // set event listener
    document.getElementById('btn-update')
    .addEventListener('click', function(){
        console.log('update');
        // 2. get the text from input field 
        const nameInput = document.getElementById('input-text');
        const name = nameInput.value;
        // console.log('name', name);

        //set the name 
        const namep = document.getElementById('name');
        namep.innerText = name;
    })    