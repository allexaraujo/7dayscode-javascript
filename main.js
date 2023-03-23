const form = document.forms["pessoas"];
const fields = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (const eventField of event.target) {

        if (eventField.nodeName === 'INPUT') {
            fields.push(`${eventField.name} : ${eventField.value}`);
        }
    }

    console.log(fields);

}

)
