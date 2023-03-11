let moves = movies

let ulsOne = document.querySelector('#goods1')


for (let i = 0; i < moves.length; i++) {
    let lisOne = document.createElement('li')
    lisOne.innerHTML = `
    <div class="score">
        <span>总评分</span>
        <p>${moves[i].rating}</p>
    </div>
    <div class="film">
        <h4><span>${moves[i].name}</span> ${moves[i].nameEn} （${moves[i].year}）</h4>
        <div class="film-content">
            <img src="${moves[i].img}" alt="${moves[i].name} ${moves[i].nameEn} (${moves[i].year})">
            <div class="text">
                <p>${moves[i].length}分钟 - 类型： ${moves[i].movieType}</p>
                <p>导演： ${moves[i].directors[0]}</p>
                <p>主演： ${moves[i].actors[0]} ${moves[i].actors[1]}</p>
                <a href="#">在线播放</a>
            </div>
        </div>
    </div>
    `

    ulsOne.appendChild(lisOne)
}


let populars = data.populars

let ulTwo = document.querySelector('#goods2')


for(let i = 0; i < populars.length; i++){
    let lisTwo = document.createElement('li')

    lisTwo.innerHTML = `
    <img src="${populars[i].cover}" alt="${populars[i].nameCn}">
    <p>${populars[i].nameCn}</p>
    <p>${populars[i].year}</p>
    `

    ulTwo.appendChild(lisTwo)
}