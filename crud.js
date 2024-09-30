const  Fighterlist_url='http://localhost:3000/users';

let id = "0"
let inputId = "0"

$.get(Fighterlist_url).then(data =>
    data.map(Fighterlist =>  {
        console.log(Fighterlist)
        // if (parseInt(Fighterlist.id) > parseInt(id))
        // {
        //     id = toString(parseInt(Fighterlist.id) + 1)
        // } else id = toString(Fighterlist.id)
        $('#Fighter-list').append(`
            <tr>
                <td> ${Fighterlist.id}</td>
                <td> ${Fighterlist.Full_name}</td>
                <td> ${Fighterlist.Nick_name}</td>
                <td> ${Fighterlist.record}</td>
                <td> ${Fighterlist.fighting_out_of}</td>
                <td> ${Fighterlist.Weight_Class}</td>
                <td><button class= "btn btn-danger" onclick="deleteFighter(${Fighterlist.id})">Delete</button></td>
            </tr>
            `)
        
        }
     
        
    )
)

$('#EditFighterBtn').on ("click",(e)=>{
    e.preventDefault();
    $('#Fighter-list').html('')

    let Full_name = $('#name').val()
    let Nick_name = $('#nickName').val()
    let record = $('#record').val()
    let Weight_Class = $('#Weight-class').val()
    let fighting_out_of = $("#fighting-out-of").val()
    console.log($('name').val());
    console.log("Edit fighter clicked")

    editFighter({"Full_name" : Full_name,
        "Nick_name" : Nick_name,
        "record" : record,
        "fighting_out_of" : fighting_out_of,
        "Weight_Class" : Weight_Class})
    $.get(Fighterlist_url).then(data =>
        data.map(Fighterlist =>  {
            console.log(Fighterlist)
            if (parseInt(Fighterlist.id) > parseInt(id))
            {
                id = toString(parseInt(Fighterlist.id) + 1)
            }
            console.log(typeof Fighterlist.id)
            $('#Fighter-list').append(`
                <tr>
                    <td> ${Fighterlist.id}</td>
                    <td> ${Fighterlist.Full_name}</td>
                    <td> ${Fighterlist.Nick_name}</td>
                    <td> ${Fighterlist.record}</td>
                    <td> ${Fighterlist.fighting_out_of}</td>
                    <td> ${Fighterlist.Weight_Class}</td>
                    <td><button class= "btn btn-danger" onclick="deleteFighter(${Fighterlist.id})">Delete</button></td>
                 
                </tr>
                `)

            
            }
         
            
        )
        
    )

})

    



$('#addFighterBtn').on ("click",(e) =>{
    e.preventDefault();
    $('#Fighter-list').html('')
    
    let Full_name = $('#name').val()
    let Nick_name = $('#nickName').val()
    let record = $('#record').val()
    let Weight_Class = $('#Weight-class').val()
    let fighting_out_of = $("#fighting-out-of").val()
console.log($('#name').val())
    console.log("add fighter clicked")
    $.get(Fighterlist_url).then(data =>
        data.map(Fighterlist =>  {
            console.log(Fighterlist)
            if (parseInt(Fighterlist.id) > parseInt(id))
            {
                id = toString(parseInt(Fighterlist.id) + 1)
            }
            console.log(typeof Fighterlist.id)
            $('#Fighter-list').append(`
                <tr>
                    <td> ${Fighterlist.id}</td>
                    <td> ${Fighterlist.Full_name}</td>
                    <td> ${Fighterlist.Nick_name}</td>
                    <td> ${Fighterlist.record}</td>
                    <td> ${Fighterlist.fighting_out_of}</td>
                    <td> ${Fighterlist.Weight_Class}</td>
                    <td><button class= "btn btn-danger" onclick="deleteFighter(${Fighterlist.id})">Delete</button></td>
                 
                </tr>
                `)

            
            }
         
            
        )
        
    )
  
    

   
    
     

$.post(Fighterlist_url, {
    Full_name : Full_name,
    Nick_name :Nick_name,
    record: record,
    fighting_out_of: fighting_out_of,
    Weight_Class: Weight_Class,
})
.get()
});
function editFighter(data){
    console.log("Editing id:",data);
    const request = $.ajax(`${Fighterlist_url}/${inputId}`,{
        method: "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
 })
};


function deleteFighter( id){
    console.log("deleting id: ", id)
    
    $.ajax(`${Fighterlist_url}/${id}`,{
        method: "DELETE",
       // headers: {'content-type':'application/json'},
        //body: JSON.stringify$(json)
    })
};


/// everything below is to update the list 

 function UpdateList(e) {
    e.preventdefault();
    let id= $("#updateid").val();

    fetch(`${Fighterlist_url}/${id}`,{
        method: "put"
            
        
    })
};

JSON.stringify({
    name: $('#updatename').val(),
    nickName:$('#updatenickName').val(),
    Record: $('#updaterecord').val(),
    WeightClass:$('#updateWeightClass').val(),
     actions:$('#updateActions').val(),
 });

//$('#UpdateList').on ("click",(e) => UpdateList(e)) 


document.getElementById("Edit").addEventListener("input", (e) => {
    inputId = e.target.value;
})