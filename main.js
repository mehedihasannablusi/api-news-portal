
// const loadData = () =>{
    
// const url =  `https://openapi.programming-hero.com/api/news/categories`;
// fetch(url)
// .then(res => res.json())
// .then(data => ShowAllnews(data.data.news_category))



// }

// const ShowAllnews = allNewsCategory => {
//   const allNews =  document.getElementById("category-container")
//   allNewsCategory.forEach(news => {

//     const creatTag =  document.createElement("p")
//     creatTag.innerHTML = `

//     <a href=""  onclick="showDetail( ${news.category_name}  )" >  ${news.category_name} </a>
    
//     `
//    allNews.appendChild(creatTag)
 
    


//   })

// }

// const showDetail = category_id =>{
   
// const url = `https://openapi.programming-hero.com/api/news/category/01`
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data.data))


// }




// loadData()


const loadData = () =>{

   const url = ` https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json()).then(data => showData(data.data))
}

const showData = allNews => {
const display =  document.getElementById("category-container")

allNews.news_category.forEach(news => {
   
const creatTag = document.createElement("p");
creatTag.innerHTML = `
<a class ="" href="#" onclick="loadNews('${news.category_id}', '${news.category_name}')" > ${news.category_name} </a>

`
display.appendChild(creatTag)
})
    
}


const loadNews = (category_id , category_name) => {
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url).then(res => res.json()).then(data => showAllNews(data.data,category_name))

}


const showAllNews = (data, category_name) =>{
    console.log(data,category_name)

    document.getElementById("total-news").innerText = data.length
    document.getElementById("news-category").innerText = category_name
}


loadData()


