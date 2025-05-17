import axios from "axios"

const url = "http://localhost:7000/api"
axios.interceptors.request.use(function (config) {
  //config.headers["Bypass-Tunnel-Reminder"] = "123" //для localtunnel
     if (config.method === "post") { console.log(config) }
  return config
}, function (error) {
  return Promise.reject(error)
})


const request = async (method, itemUrl, data) => {
  try {
    let response = await axios[method](`${url}/${itemUrl}`, data)
    return response
  } catch (error) {
    console.log(error)
  }
}
export default request