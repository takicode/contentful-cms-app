import {createClient} from "contentful"
import { useEffect, useState } from "react"


const client = createClient({
  space: "fxqo7f2rqpip",
  environment:"master",
  accessToken: import.meta.env.VITE_API_KEY
})

export const useFetchProjects = () =>{
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])


const getData = async() =>{
  try {
    const response = await client. getEntries({ content_type:"project"})
    console.log(response);
    const project = response.items.map((item)=>{
      console.log(item);
      const  {title, url, image} = item.fields
      const id = item.sys.id
      const img = image?.fields?.file?.url
      return {title,url,id,img}
    })
    setProjects(project)
    setLoading(false)
  } catch (error) {
    console.log(error);
    setLoading(false)
  }
}

useEffect(()=>{
  getData()
},[])

return {loading, projects}
}

