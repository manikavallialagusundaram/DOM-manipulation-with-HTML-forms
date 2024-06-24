document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();


    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    function getSelectedFood() {
        const foodSelect = document.getElementById('food');
        const selectedOptions = [...foodSelect.selectedOptions].map(option => option.value);
        return selectedOptions.join(', ');
    }

    // Append data to table
    const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>${pincode}</td>
                    <td>${gender}</td>
                    <td>${getSelectedFood()}</td>
                    <td>${state}</td>
                    <td>${country}</td>
                `;

    // Clear form fields
    document.getElementById('myForm').reset();
});