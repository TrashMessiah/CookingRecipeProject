import axios from 'axios';

const url = `https://www.food2fork.com/api/search`;

async function getResult(query) {
    const key = 'f4100ddf3755d576d2b1b3cc1b5f913e';
    let result = await (axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`));
    console.log(result.data);
}

getResult("Raisins");