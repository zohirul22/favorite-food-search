const searchField =()=>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)

    searchField.value='';

    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res =>res.json())
    .then(data =>displayFood(data.meals))
}

const displayFood =(meals)=>{
    const displayFood = document.getElementById('display-food')
    displayFood.innerText= '';
    meals.forEach(meal =>{
        // console.log(meal)
       const div =document.createElement('div')
       div.classList.add('col')
       div.innerHTML =`
      
       <div onClick="singleFood('${meal.idMeal}')" class="card">
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0 ,200)}</p>
       </div>
     </div>
   
 
       `
       displayFood.appendChild(div)
    })
}

const singleFood = mealId=>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>singleFoodDisplay(data.meals[0]))
}

const singleFoodDisplay =(meal)=>{
console.log(meal)
const singleFoodDisplay = document.getElementById('single-food')
const div =document.createElement('div');
div.classList.add("card")
div.innerHTML=`
<div class="card">
        <img height="300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0 ,100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Visited Me</a>
        </div>
      </div>
`
singleFoodDisplay.appendChild(div)
}