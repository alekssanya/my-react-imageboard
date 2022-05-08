import request from "./generic";
import textAnalizator from "../text-analizator";
const appReqUrl = "app"

class AppReq {
    async getAllThreadsOnBoard(boardName, offset = 0, limit = 10) {
        try {
            const items = await request("get", appReqUrl, { params:{
                boardName: boardName.replace('/', ''),
                offset: offset,
                limit: limit
            }})
            return items.data
        } catch (error) {
            console.log(error)
        }
    }

    async getThread(id, boardName) {
        try {
            const item = await request("get", `${appReqUrl}/${id}?boardName=${boardName}`)
            return item.data
        } catch (error) {
            console.log(error)
        }
    }
    
    async createPost(message) {
        try {
            const {formedText, answers, postTitle} = textAnalizator.formedText(message.message.text)
            message.message.text = formedText
            message.message.answers = answers
            message.message.postTitle = postTitle
            let resp = await request("post", "posts" , message)
            console.log(resp)
            return resp
        } catch (error) {
            console.log(error)
        }
    }

    async createThread(message) {
        try {
            const {formedText, answers, postTitle} = textAnalizator.formedText(message.text)
            message.text = formedText
            message.answers = answers
            message.postTitle = postTitle
            let resp = await request("post", appReqUrl, message)
            return resp
        } catch (error) {
            console.log(error)
        }
    }
}

export default AppReq