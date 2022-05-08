import axios from "axios"

const url = "http://localhost:7000/api"
axios.interceptors.request.use(function (config) {
  //config.headers["Bypass-Tunnel-Reminder"] = "123" //для бекенд запросов через
  if (config.method === "post") { console.log(config) }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


const request = async (method, itemUrl, data) => {
  try {
    if (method === "post") {
      let formData = new FormData();
      console.log(data)

      formData.append('message', JSON.stringify(data.message));
      data.mediaFiles.forEach(element => {
        formData.append("mediaFiles", element, element.name)
      });
      let response = await axios({
        method: "post",
        url: `${url}/${itemUrl}`,
        data: formData,
        headers: { "Content-Type": `multipart/form-data;` },
      })
      console.log(response)
      return response
    }
    let response = await axios[method](`${url}/${itemUrl}`, data)
    return response
  } catch (error) {
    console.log(error)
  }
}
export default request