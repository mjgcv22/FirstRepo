

let $addBtn = document.querySelector('#addBtn');
$addBtn.addEventListener('click', displayAdd);


let $myProfile = document.getElementById(".myProfile");
$myProfile.addEventListener('click', displayProfile);


//----------------------------------------------------------
function displayAdd(){
    let $addCustomer = document.querySelector('#toDisplay');
    let $showCustomer = document.querySelector('#toShow');
    let type = 'none';

    if($addCustomer.style.display == 'none'){
        $addCustomer.style.display = 'block';    
    }

    if($showCustomer.style.display == 'block'){
        $showCustomer.style.display = 'none';      
    }
}


function displayProfile(){
    let $showCustomer = document.querySelector('#toShow');
    let $addCustomer = document.querySelector('#toDisplay');
    let type = 'none';

    if($showCustomer.style.display == 'none'){
        $showCustomer.style.display = 'block';
    }

    if($addCustomer.style.display == 'block'){
        $addCustomer.style.display = 'none'; 
    }
}
