function deleteByEmail() {
    let email = document.querySelector(`input[name="email"]`).value;

    // select all table cells from the last column
    let rows = Array.from(document.querySelectorAll(`tbody tr`));
    // interate over cells
    let deleted = false;
    for (let row of rows) {
        // if text matches input value => delete row
        if (row.children[1].textContent == email) {
            //(row.querySelectorAll(`td`)[1].textContent)==email){
            //get cell parent (row)
            // remove from parentNode
            row.parentNode.removeChild(row)
            deleted = true;
            document.getElementById(`result`).textContent = `Deleted.`;

        }
    }
    if (deleted != true) {
        document.getElementById(`result`).textContent = `Not Found.`
    }
    //console.log(result)
}
