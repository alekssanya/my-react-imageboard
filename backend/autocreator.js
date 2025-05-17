const axios = require('axios')
const url = `http://localhost:${PORT}/api/`;
const boardList = ["b", "o", "soc", "media", "r", "api", "rf", "int", "po", "news", "hry", "au", "bi", "biz", "bo", "c", "em", "fa", "fiz", "fl", "ftb", "hh", "hi", "me", "mg", "mlp", "mo", "mov", "mu", "ne", "psy", "re", "sci", "sf", "sn", "sp", "spc", "tv", "un", "w", "wh", "wm", "wp", "zog", "de", "di", "diy", "mus", "pa", "p", "wrk", "trv", "gd", "hw", "mobi", "pr", "ra", "s", "t", "web", "bg", "cg", "gsg", "ruvn", "tes", "v", "vg", "wr", "a", "fd", "ja", "ma", "vn"]

async function createBoards() {
    await axios({
        method: 'post',
        url: url + 'boards/',
        data: {
            body: boardList
        }
    })

    console.log("доски запилены")
}

async function createThreads() {
    for (let index = 0; index < 20; index++) {
        for (let j = 0; j < boardList.length; j++) {
            await axios({
                method: 'post',
                url: url + 'ac/' + boardList[j]
            })
        }
    }

    console.log("треды запилены")
}

async function createPosts() {
    for (let index = 0; index < boardList.length; index++) {
        await axios({
            method: 'get', url: url + 'ac', data: {
                boardName: boardList[index]
            }
        }).then(async (response) => {
            const resp = response.data
            for (let index = 0; index < 10; index++) {
                for (let k = 0; k < resp.length; k++) {
                    let str = " это пост доски = " + resp[k].boardName + " тред ид = " + resp[k].id
                    let text = str
                    let randomCounter = Math.floor(Math.random() * 100)
                    for (let qwe = 0; qwe < randomCounter; qwe++) {
                        text += str
                    }
                    await axios({
                        method: 'post',
                        url: url + 'ac',
                        data: {
                            text: text,
                            IP: "123.123.123.123",
                            ThreadId: resp[k].id,
                            boardName: resp[k].boardName,
                            postTitle: text.slice(0, 51),
                        }
                    })
                }
            }
        })
    }
    console.log("посты запилены")
}


async function autocreator() {
    await createBoards()
    await createThreads()
    await createPosts()
}

autocreator()