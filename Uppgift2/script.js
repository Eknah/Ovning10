


const drawCard = function() {


    let fullUri = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
    let divResult = document.querySelector('#divResult');

    fetch(fullUri)
        .then(res => res.json())
        .then(data =>
        {
            //console.log(data.cards[0])

            let card = data.cards[0];
            let imageSrc = card.image;
            let cardValue = card.value;
            let cardSuit = card.suit;

            let img = document.createElement('img');
            img.setAttribute('src', imageSrc);
            img.classList.add('m-3');
            divResult.innerHTML = '';
            divResult.appendChild(img);

            //console.log(imageSrc);

            // let props = data.result[0].properties;
            // let height = props.height;
            // let mass = props.mass;
            // let gender = props.gender;
            // let hairColor = props.hair_color;
            // let s = `Height: ${height},\nMass: ${mass},\nGender: ${gender},\nHair color: ${hairColor}`;
            // taData.value = s;
        })
        .catch(err => console.log(err))
}


let btnDraw = document.querySelector("#btnDraw");

btnDraw.addEventListener('click', drawCard);