// Dark Mode
let darkModu=()=>{
    window.document.classList.toggle("dark_mode"); // toggle
}

// input search
$(document).ready(function(){
    const searchApi=["Adana", "Balıkesir", "Çorum", "Denizli", "Diyarbakır" , "Edirne", "Malatya", "Van"];
    $("#tags").autocomplete({
        source:searchApi
    })
}); //end


// Footer
let newDate=()=>{
    const date=new Date().getFullYear();
    // JS DOM
    //document.getElementById("date_id").innerHTML=new Date().getFullYear();

    // Jquery DOM
    $("#date_id").html(date);
}
newDate()

