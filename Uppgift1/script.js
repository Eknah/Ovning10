


const getCharacter = function() {

    let tbName = document.querySelector('#tbName');
    let charName = tbName.value;
    let fullUri = `https://www.swapi.tech/api/people/?name=${charName}`
    let taData = document.querySelector('#taData');

    fetch(fullUri)
        .then(res => res.json())
        .then(data =>
        {
            //console.log(data.result[0].properties)
            let props = data.result[0].properties;
            let height = props.height;
            let mass = props.mass;
            let gender = props.gender;
            let hairColor = props.hair_color;
            let s = `Height: ${height},\nMass: ${mass},\nGender: ${gender},\nHair color: ${hairColor}`;
            taData.value = s;
        })
        .catch(err => console.log(err))
}


let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener('click', getCharacter);