
import $ from "jquery"
import {Fighterlist_url}  from './2nd'
import get from "./2nd"

export default function init()
{
    let event = document.getElementById("Edit") as HTMLInputElement

    let inputId : string = "0"

 

    //This function handles the edits it in the db (NOT WORKING)
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
    })

        


    //Simple add fighter
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

    $.post(Fighterlist_url, {
        Full_name : Full_name,
        Nick_name :Nick_name,
        record: record,
        fighting_out_of: fighting_out_of,
        Weight_Class: Weight_Class,
    })
    get()
    });

    //sends a PATCH request to the fighter URL to update the data using the data
    // DOES NOT WORK!
    async function editFighter(data: { Full_name: string | number | string[] | undefined; Nick_name: string | number | string[] | undefined; record: string | number | string[] | undefined; fighting_out_of: string | number | string[] | undefined; Weight_Class: string | number | string[] | undefined; }){
        console.log("Editing id:",data);
        await $.ajax(`${Fighterlist_url}/${inputId}`,{
            method: "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
        // body : JSON.stringify(data)
        })
        document.getElementById("Fighter-list")!.innerHTML = ''
        get()
    };

    /*

    */

    //$('#UpdateList').on ("click",(e) => UpdateList(e)) 

    //updates the inputId for the edit function
    function updID() //any arguments will get ignored since we really dont need them.
    {
    inputId = event.value;
    }

    //Once the script is loaded it will get and display the current fighters
    get()

    //Adds a event listener to the input, once the event has been called it will run the updID function
    event!.addEventListener("input", updID)
}