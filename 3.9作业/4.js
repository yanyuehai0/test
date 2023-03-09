let List = data.data.items

console.log(List[0].items);

for (let i = 0; i < List.length; i++) {
    document.write(`
    <div>
        <h1>${List[i].title}</h1>
    <table>
        <thead>
            <tr>
                <th>电影封面</th>
                <th>电影名</th>
                <th>导演</th>
                <th>上映时间</th>
                <th>地区</th>
            </tr>
        </thead>
    <tbody>
`)
    for (let j = 0; j < List[i].items.length; j++) {
        document.write(`
        <tr>
        <td><img src="${List[i].items[j].movieInfo.img}" alt=""></td>
        <td>${List[i].items[j].movieInfo.movieName}</td>
        <td>${List[i].items[j].movieInfo.director}</td>
        <td>${List[i].items[j].movieInfo.releaseDate}</td>
        <td>${List[i].items[j].movieInfo.releaseLocation}</td>
    </tr>
        `)
    }

    document.write(`
        </tbody>
    </table>

    </div>
    `)

}
