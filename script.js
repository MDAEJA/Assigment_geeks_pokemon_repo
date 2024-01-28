//-------------------------------------------------------//
let select_type = document.querySelector("#types");
let filter_button = document.querySelector(".filterbutton");
let display_card = document.querySelector(".display-card");
// let inner_img_contianer = document.querySelector('.img-section-div');
let obj = [];
let obj1 = [];
let imgNum = '';
let obj2 = [];
let indx = 0;
let background_color = [
    {'pokemon-nam' :"normal",'clr':'#a4acaf','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' ,'name':'Pidgey','abitity' : 'keen-eye, tangled-feet, big-pecks'},
    {'pokemon-nam' :'fighting','clr':'#d56723','img':'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png', 'name':'Mankey','abitity' : 'vital-spirit, anger-point, defiant'},
    {'pokemon-nam' :'poison','clr':'#b97fc9','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png','name':'Ekans','abitity' : 'intimidate, shed-skin, unnerve' },
    {'pokemon-nam' :'ground','clr':'#f7de3f','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png','name':'Sandslash','abitity' : 'sand-veil, sand-rush' },
    {'pokemon-nam' :'rock','clr':'#a38c21' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png','name':'Rock','abitity' : 'rock -head,sturdy,sand-veil'},
    {'pokemon-nam' :'bug','clr':'#729f3f','img':'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png','name':'ButterFree','abitity' : 'effect-spore, dry-skin, damp' },
    {'pokemon-nam' :'ghost','clr':'#7b62a3' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png','name':'Haunter','abitity' : 'levitate' },
    {'pokemon-nam' :'fire','clr':'#fd7d24','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png','name':'Charizad','abitity' : 'blaze, solar-power' },
    {'pokemon-nam' :'water','clr':'#4592c4','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png','name':'Wartortle','abitity' : 'torrent, rain-dish' },
    {'pokemon-nam' :'grass','clr':'#9bcc50','img' :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png','name':'Bulbasar','abitity' : 'overgrow, chlorophyll' },
    {'pokemon-nam' :'electric','clr':'#eed535','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png','name':'Raichu','abitity' : 'static, lightning-rod' },
    {'pokemon-nam' :'psychic','clr':'#f366b9','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png' ,'name':'DrpwZee','abitity' : 'synchronize, inner-focus, magic-guard' },
    {'pokemon-nam' :'ice','clr':'#51c4e7','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png','name':'Jynx','abitity' : 'oblivious, forewarn, dry-skin'  },
    {'pokemon-nam' :'dragon','clr':'goldenrod' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png','name':'Dratini','abitity' : 'inner-focus, multiscale' },
    {'pokemon-nam' :'fairy','clr':'#fdb9e9' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png','name':'Clefairy','abitity' : 'cute-charm, magic-guard, friend-guard' },
    {'pokemon-nam' :'flying','clr':'#51c4e7','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png' ,'name':'Moltres','abitity' : 'flame-body, vital-spirit' },
    {'pokemon-nam' :'steel','clr':'#51c4e7' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png','name':'Articuno','abitity' : 'static, vital-spirit' },
    {'pokemon-nam' :'dark','clr':'aqua','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png','name':'Snorlax' ,'abitity' : 'intimidate, anger-point, sheer-force' },
    {'pokemon-nam' :'unknown','clr':'blue','img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png','name':'Aerodactyi','abitity' : 'swarm, technician, steadfast'},
    {'pokemon-nam' :'shadow','clr':'grey' ,'img' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png','name':'showlly','abitity' : 'static, vital-spirit' }
];
// console.log(background_color);
window.onload = fetching_data();
bydefault_search();

// fetching the data from source
function fetching_data(){
    fetch("https://pokeapi.co/api/v2/type/",{
        method:'GET'
    })
    .then(response=>response.json())
    .then(responseCheck=>{
        console.log(responseCheck)
        const res = responseCheck.results;
        res.forEach((ele)=>{
            const data = {
                'pokemon_name' : ele.name,
                'pokemon_url' : ele.url
            }
            obj.push(data);
        });
        console.log(obj);
        obj.forEach((get_name_0f_pokemon)=>{
         let create_option = document.createElement("option");
        create_option.innerHTML = `<p>${get_name_0f_pokemon.pokemon_name}</p>`
        select_type.append(create_option);
        })
    })
};
// by default showing images
bydefault_search();
function bydefault_search(){
let bydefault = document.querySelector(".display-card");
bydefault.innerHTML = "";
indx = 0;
console.log(bydefault);
console.log(obj);
background_color.forEach((ele)=>{
    indx++;
    //grand parent
    let flip_cart = document.createElement("div");
    flip_cart.classList.add("flip-card");
    bydefault.append(flip_cart);
// parent

let flip_cart_inner = document.createElement("div")
    flip_cart_inner.classList.add("flip-card-inner");
    flip_cart.append(flip_cart_inner);

    // front div
    let front_div = document.createElement("div");
    front_div.classList.add("flip-card-front");
    front_div.style.backgroundColor = `${ele["clr"]}`
    front_div.innerHTML = `<div class="display-img> <div class="img-nos">#${indx}</div>  <div class="img-size"><img src ="${ele["img"]}"  ></img></div>  
    <div class="pokemonName">${ele['name']}</div>   <div class="pokemonId"><p>${ele["pokemon-nam"]}</p></div>  </div> `
    flip_cart_inner.append(front_div);
    // back div
    let back_div = document.createElement("div");
    back_div.classList.add("flip-card-back");
    back_div.style.backgroundColor = `${ele["clr"]}`
    back_div.innerHTML = `<div class="display-img> <div class="img-no">#${indx}</div>  <div class="img-size"><img src ="${ele["img"]}"  ></img></div>  
    <div class="pokemonName">${ele['name']}</div>  <div class="abilities><p style="background-color:white">Abilities</p></div> <div class="ability-name"><p>${ele["abitity"]}</p></div></div> `
    flip_cart_inner.append(back_div);
})

};

// filter by search context
filter_button.addEventListener("click", filter_by_option);
function filter_by_option(){
    let selectname = document.querySelector("#types").value;
    let filter_search = document.querySelector("#text").value;
      let select_name = "";
    if(filter_search === ""){
        select_name = selectname; 
    }else{
        select_name = filter_search;
    }
    // if(search_name != "Types"){
    imgNum = 0;
    display_card.innerHTML = "";
    obj.forEach((geturl)=>{
if(select_name === `${geturl.pokemon_name}`){
    fetch(geturl.pokemon_url,{
        method:'GET'
    })
    .then(response=>response.json())
    .then(responseChecking=>{
        console.log(responseChecking);
        const res = responseChecking.pokemon;
        console.log(res); 
     res.forEach((ele)=>{
        const data = {
            'attribute-name' : ele.pokemon.name,
            'attribute-url' : ele.pokemon.url
        }
        obj1.push(data);
        //
             //
        fetch(ele.pokemon.url,{
            method:'GET'
        })
        .then(response=>response.json())
        .then(checkResponse=>{
            console.log(checkResponse);
             obj2 = checkResponse.abilities;
             console.log("getting link",obj2);
               let abilities_of_pokemon = "";
             for(let indx = 0; indx < obj2.length; indx++){
                abilities_of_pokemon += " " + obj2[indx].ability.name +" /";
             }
             console.log("get x2 :-",abilities_of_pokemon);
            
            const ser = checkResponse.sprites.front_default;
            console.log(ser);
            imgNum++;
            let clor = "";
            background_color.forEach((ele)=>{
                if(select_name === ele["pokemon-nam"] ){
                 clor = ele.clr;
                
                }
                console.log(clor);
            })
            
         // create grand parent div
            let flip_cart = document.createElement("div");
            flip_cart.classList.add("flip-card");
            display_card.append(flip_cart);

            // parent div
            let flip_cart_inner = document.createElement("div")
            flip_cart_inner.classList.add("flip-card-inner");
            flip_cart.append(flip_cart_inner);



            

            //childre div front 
            let front_div = document.createElement("div");
            front_div.innerHTML = `<div class="display-img">
            <div class="img-no">#${imgNum}</div>
            <div class="img-size"><img src="${ser}"></img></div>
            <div class="pokemonName"><p>${ele.pokemon.name}</P></div>
            <div class="pokemonId"><p>${select_name}</p></div>
            </div>`
            front_div.classList.add("flip-card-front");
            front_div.style.backgroundColor = `${clor}`;
            flip_cart_inner.append(front_div);

            // chilgren back end
            let indx = 0;

     
            let back_div = document.createElement("div");
            back_div.innerHTML = `<div class="display-img">
            <div class="img-nos">#${imgNum}</div>
            <div class="img-sizes" ><img src="${ser}"></img></div>
            <div class="pokemonNames"><p>${ele.pokemon.name}</P></div>
            <div class="abilities"><p style="background-color:white">Abilities</p><div>
            
            <div class="ability-name"><p>${abilities_of_pokemon}</p></div>
            </div>`
            
            back_div.classList.add("flip-card-back");
            back_div.style.backgroundColor = `${clor}`;
            flip_cart_inner.append(back_div);

        })
     })
    })
}
})
};

// reset button
let reset = document.querySelector(".reset");
reset.addEventListener("click",bydefault_search);






