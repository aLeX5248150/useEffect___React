import React, { useState, useEffect } from 'react';


function DataFetcher() {

const [data, setData] = useState([])

useEffect(() => {
const serverInfo = [
    {id: 1, title: 'Первый пост', img: 'https://avatars.mds.yandex.net/i?id=8c99528137f9af0e1f6777929bf7cadd_l-10695851-images-thumbs&n=13'},
    {id: 2, title: 'Второй пост', img: 'https://avatars.mds.yandex.net/i?id=60ad3cda7b09c42cd161a09a1d7fe6f4d64afca0-5306827-images-thumbs&n=13'},
    {id: 3, title: 'Третий пост', img: 'https://img.freepik.com/free-photo/illustration-japanese-city_23-2151852266.jpg?semt=ais_hybrid&w=740'},
    {id: 4, title: 'Четвёртый пост', img: 'https://avatars.mds.yandex.net/get-yapic/43978/g2HGjYKIVIVRh2wuDfbPjHdkko-1/orig'},
  ]
setTimeout(() => {
    setData(serverInfo)
   }, 2000)     
  }, [])

return(
<div>
    {data.length > 0 ? (
        // <ul>     ТАК ТОЖЕ МОЖНО!
        //     <li id={data[0].id}>{data[0].title}
        //         <img src={data[0].img} alt="" />
        //     </li>
        //       <li id={data[1].id}>{data[1].title}
        //         <img src={data[1].img} alt="" />
        //     </li>
        //       <li id={data[2].id}>{data[2].title}
        //         <img src={data[2].img} alt="" />
        //     </li>
        //       <li id={data[3].id}>{data[3].title}
        //         <img src={data[3].img} alt="" />
        //     </li>
        // </ul>
       <ul>
          {data.map(post => (
            <li key={post.id}><p>{post.title}</p> <br /> <img src={post.img} alt="" /></li>
          ))}
       </ul>
    )
    : 'Загрузка...'}
</div>
    )
}

export default DataFetcher