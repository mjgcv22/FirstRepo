let $addBtn = document.querySelector('#addBtn');
$addBtn.addEventListener('click', displayAdd);

function displayAdd(){
    let $addCustomer = document.querySelector('#toDisplay');
    let type = 'none';

    if($addCustomer.style.display == 'none'){
        $addCustomer.style.display = 'block';
    }
    // console.log("click");
    
    // bugs navbar ----will fix!!!
    let container1Tag = document.getElementsByClassName('container1');
    $('.container1').height(2381.46);
    // let body = document.body, html = document.documentElement;
    // body.style.height = 'inherit';

}



