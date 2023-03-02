
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


    const loadData = () => {

        const url = ` https://openapi.programming-hero.com/api/news/categories`;
        fetch(url)
            .then(res => res.json()).then(data => showData(data.data))
    }

    const showData = allNews => {
        const display = document.getElementById("category-container")

        allNews.news_category.forEach(news => {

            const creatTag = document.createElement("p");
            creatTag.innerHTML = `
        <a class ="" href="#" onclick="loadNews('${news.category_id}', '${news.category_name}')" > ${news.category_name} </a>

        `
            display.appendChild(creatTag)
        })

    }


    const loadNews = (category_id, category_name) => {

        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        fetch(url).then(res => res.json()).then(data => showAllNews(data.data, category_name))

    }


    const showAllNews = (data, category_name) => {
        console.log(data, category_name)

        document.getElementById("total-news").innerText = data.length
        document.getElementById("news-category").innerText = category_name


        const showNews = document.getElementById("show-news")
        showNews.innerHTML = ''
        data.forEach(singleNews => {

            const divTag = document.createElement("div")

            divTag.classList.add("card", "mb-3")
            divTag.innerHTML = `
                
                <div class="row g-0">
                <div class="col-md-4">
                <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                    <h5 class="card-title">${singleNews.title}</h5>
                    <p class="card-text"> ${singleNews.details.slice(0, 300)} </p>

                    
                </div>
                <div class="card-footer border-0">
                
                <div >
                <div class="d-flex align-item-center"> <img src="${singleNews.author.img}" class="img-fluid rounded-50  height="40" width="40" 
                rounded-50" alt="..." >

                    <div class="ms-5">
                    <p> ${singleNews.author.name} </p>
                    <p> ${singleNews.author.published_date} </p>
                    </div>
                    </div>
                
                </div>
                <div>
                <p></p>
                </div>
                <div></div>
                <div></div>
                </div>
                </div>
            </div>
                
                
                `

            showNews.appendChild(divTag)






        })
    }


    loadData()