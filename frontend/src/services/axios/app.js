import request from "./generic"
import axios from "axios"

const url = "http://localhost:7000/api"
class AppReq {
    async getAllThreadsOnBoard(boardName, offset = 0, limit = 10) {
        try {
            console.log(offset)
            const items = await request("get", "threads", {
                params: {
                    boardName: boardName.replace('/', ''),
                    offset: offset * limit,
                    limit: limit
                }
            })
            return items.data
        } catch (error) {
            console.log(error)
        }
    }

    async getThread(id, boardName) {
        try {
            const item = await request("get", `threads/${id}?boardName=${boardName}`)
            return item.data
        } catch (error) {
            console.log(error)
        }
    }

    async refreshThread(id, lastPost) {
        try {
            const posts = await request("get", `app/${id}?lastpost=${lastPost}`)
            return posts.data
        } catch (error) {
            console.log(error)
        }
    }

    async getPost(id) {
        try {
            const post = await request("get", `posts/${id}`)
            console.log(post)
            return post
        } catch (error) {
            console.log(error)
        }
    }

    async createPost(message) {
        try {
            let response
            if (message.mediaFiles.length > 0) {
                let formData = new FormData()
                formData.append('message', JSON.stringify(message.message))
                message.mediaFiles.forEach(element => {
                    formData.append("mediaFiles", element, element.name)
                })
                response = await axios({
                    method: "post",
                    url: `${url}/posts`,
                    data: formData,
                    headers: { "Content-Type": `multipart/form-data;` },
                })
                return response
            } else {
                response = await request("post", "posts", message)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async createThread(message) {
        try {
            let response
            if (message.mediaFiles.length > 0) {
                let formData = new FormData()
                formData.append('message', JSON.stringify(message.message))
                message.mediaFiles.forEach(element => {
                    formData.append("mediaFiles", element, element.name)
                })
                response = await axios({
                    method: "post",
                    url: `${url}/threads`,
                    data: formData,
                    headers: { "Content-Type": `multipart/form-data;` },
                })
            } else {
                response = await request("post", "threads", message)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async trackerPanelCount(threads) {
        try {
            let resp = await request("get", `favorite/?threads=${threads}`)
            return resp
        } catch (error) {
            console.log(error)
        }
    }

    async trackerPanelUpdateCount(threadId, lastPost) {
        try {
            let resp = await request("get", `tracker/${threadId}?lastpost=${lastPost}`)
            return resp
        } catch (error) {
            console.log(error)
        }
    }
}

export default AppReq