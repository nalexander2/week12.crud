
//This function runs a GET request to the Fighterlist_url
//Once it gets the data it maps it out into a table using data.map
import $ from "jquery"

export type ListType = {
    id : number,
    Full_name: string; Nick_name: string; record: string; fighting_out_of: string; Weight_Class: string; 
}

export const  Fighterlist_url='http://localhost:3000/users';

function get()
{
$.get(Fighterlist_url).then(data =>
    data.map((FighterListType: ListType) =>  {
        console.log(FighterListType)
        // if (parseInt(FighterListType.id) > parseInt(id))
        // {
        //     id = toString(parseInt(FighterListType.id) + 1)
        // } else id = toString(FighterListType.id)
        const new_TR = document.createElement("tr")
        new_TR.innerHTML = `
        <tr>
                <td> ${FighterListType.id}</td>
                <td> ${FighterListType.Full_name}</td>
                <td> ${FighterListType.Nick_name}</td>
                <td> ${FighterListType.record}</td>
                <td> ${FighterListType.fighting_out_of}</td>
                <td> ${FighterListType.Weight_Class}</td>
                <td><button class="btn btn-danger" ID="danger")">Delete</button></td>
            </tr>
        `
        document.getElementById("Fighter-list")!.append(new_TR)
        console.log($('#Fighter-ListType'))

        new_TR.querySelector("#danger")!.addEventListener("click", () => {
        deleteFighter(FighterListType.id)
        })
    }   
    )
)
}

//This function deletes the fighter with a id
//Once it deleted the fighter, it will clear the table and re-add the data
async function deleteFighter( id: any){
    console.log("deleting id: ", id)
    
    await $.ajax(`${Fighterlist_url}/${id}`,{
        method: "DELETE",
       // headers: {'content-type':'application/json'},
        //body: JSON.stringify$(json)
    })
    document.getElementById("Fighter-list")!.innerHTML = ''
    get()
};

export default get

