const API = {
    "dishes": [
        {
            "id": 1,
            "name": "Chicken Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 2,
            "name": "Ham Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 3,
            "name": "Cheese Burger",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 4,
            "name": "Fries",
            "restaurant": "Mc Donalds",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 5,
            "name": "Egg Muffin",
            "restaurant": "Mc Donalds",
            "availableMeals": ["breakfast"]
        },
        {
            "id": 6,
            "name": "Burrito",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 7,
            "name": "Tacos",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 8,
            "name": "Quesadilla",
            "restaurant": "Taco Bell",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 9,
            "name": "Steak",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
        },
        {
            "id": 10,
            "name": "Yakitori",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
        },
        {
            "id": 11,
            "name": "Nankotsu",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
        },
        {
            "id": 12,
            "name": "Piman",
            "restaurant": "BBQ Hut",
            "availableMeals": ["dinner"]
        },
        {
            "id": 13,
            "name": "Vegan Bento",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch"]
        },
        {
            "id": 14,
            "name": "Coleslaw Sandwich",
            "restaurant": "Vege Deli",
            "availableMeals": ["breakfast"]
        },
        {
            "id": 15,
            "name": "Grilled Sandwich",
            "restaurant": "Vege Deli",
            "availableMeals": ["breakfast"]
        },
        {
            "id": 16,
            "name": "Veg. Salad",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 17,
            "name": "Fruit Salad",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 18,
            "name": "Corn Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 19,
            "name": "Tomato Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 20,
            "name": "Minestrone Soup",
            "restaurant": "Vege Deli",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 21,
            "name": "Pepperoni Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 22,
            "name": "Pepperoni Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 23,
            "name": "Hawaiian Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 24,
            "name": "Seafood Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 25,
            "name": "Deep Dish Pizza",
            "restaurant": "Pizzeria",
            "availableMeals": ["dinner"]
        },
        {
            "id": 26,
            "name": "Chow Mein",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 27,
            "name": "Mapo Tofu",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 28,
            "name": "Kung Pao",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 29,
            "name": "Wontons",
            "restaurant": "Panda Express",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 30,
            "name": "Garlic Bread",
            "restaurant": "Olive Garden",
            "availableMeals": ["breakfast", "lunch", "dinner"]
        },
        {
            "id": 31,
            "name": "Ravioli",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 32,
            "name": "Rigatoni Spaghetti",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
        },
        {
            "id": 33,
            "name": "Fettucine Pasta",
            "restaurant": "Olive Garden",
            "availableMeals": ["lunch", "dinner"]
        }
    ]
}

const customerDetails = {
    dish: {

    }

    ,
    serving: {

    },

    noOFpeople: "1",

}



const firspage = document.getElementById("1stpage");
const secondpage = document.getElementById("2ndpage");
const thirdpage = document.getElementById("3rdpage");
const forthdpage = document.getElementById("4thpage");
const firstpageError = document.getElementById("1stpageError")
document.getElementById("1step").style.background = "blue"
document.getElementById("2step").style.background = ""
document.getElementById("3step").style.background = ""
document.getElementById("4step").style.background = ""
secondpage.style.display = "none"
thirdpage.style.display = "none"
forthdpage.style.display = "none"

const firstpagetbtn = document.getElementById("1stpagebtn");
const secondpagebtnP = document.getElementById("2ndpagebtnP");
const secondpagebtnN = document.getElementById("2ndpagebtnN");
const thirdpagebtnP = document.getElementById("3rdpagebtnP");
const thirdpagebtnN = document.getElementById("3rdpagebtnN");
const forthdpagebtnP = document.getElementById("4thpagebtnP");
const forthdpagebtnS = document.getElementById("4thpagebtnS");
const resturantselectbox = document.getElementById("resturantselection")
var ok = false
firstpagetbtn.addEventListener("click", () => {
    document.getElementById("localbox").style.display = "none";
    var n = document.getElementById("meal").options.length;

    if (document.getElementById('noOFpeople').value == '' || document.getElementById('noOFpeople').value > 10 || document.getElementById('noOFpeople').value == "0") {
        error("please enter a no of people which are less than 10 or greater than 0")
    }
    else {
        customerDetails.noOFpeople = document.getElementById('noOFpeople').value
        for (var i = 1; i < n; i++) {
            if (document.getElementById("meal").options[i].selected === true) {
                error()
            }

            else {
                error("options is not selected.")
            }
        }
    }

})
function error(data) {
    document.getElementById("1stpageError").innerHTML = `${data ? data : "your welcome"}`
    if (!data) {
        firspage.style.display = "none"
        document.getElementById("1step").style.background = ""
        secondpage.style.display = "block"
        document.getElementById("2step").style.background = "blue"

    }
}
secondpagebtnP.addEventListener("click", () => {
    document.getElementById("1step").style.background = "blue"
    document.getElementById("2step").style.background = ""
    firspage.style.display = ""
    secondpage.style.display = "none"
})
secondpagebtnN.addEventListener("click", () => {

    document.getElementById("localbox").style.display = "none"
    for (var i = 1; i < resturantselectbox.length; i++) {
        if (resturantselectbox.options[i].selected === true) {
            customerDetails.resturant = resturantselectbox.options[i].value;
            error1()
        }
        error1("please enter a resturant ")

    }
})
function error1(data) {
    document.getElementById("2ndpageError").innerHTML = `${data ? data : "yours welcome"}`
    if (!data) {
        document.getElementById("3step").style.background = "blue"
        document.getElementById("2step").style.background = ""
        secondpage.style.display = "none"
        thirdpage.style.display = ''
    }

}
thirdpagebtnP.addEventListener("click", () => {
    document.getElementById("2step").style.background = "blue"
    document.getElementById("3step").style.background = ""
    secondpage.style.display = ""
    thirdpage.style.display = 'none'
})
var ss = []
thirdpagebtnN.addEventListener("click", () => {
    document.getElementById("localbox").style.display = "none"

    // for (data in (customerDetails.serving)) {
    //     ss.push((customerDetails.serving)[data])
    //     if (((customerDetails.serving)[data]) >customerDetails.noOFpeople) {
    //       document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")           
    //     return false;
    //     }
    //     else {
    document.getElementById('3rdpageError').innerHTML = null;
    document.getElementById("4step").style.background = "blue";
    document.getElementById("3step").style.background = "";
    thirdpage.style.display = 'none';
    forthdpage.style.display = '';
    document.getElementById("details").innerHTML = `
                <h1> Meal:- ${customerDetails.meal}<h1>
                <p> Resturant :- ${customerDetails.resturant}</p>
                <p> no of people :- ${customerDetails.noOFpeople}</p>`

    document.getElementById("tbody").innerHTML = `

                
                <tr> <th>${customerDetails.dish.dish1 ? customerDetails.dish.dish1 : ''}</th>
                <th> ${customerDetails.serving.serving1 ? customerDetails.serving.serving1 : ''}  </th>
                <th> ${customerDetails.dish.noofdish1 ? customerDetails.dish.noofdish1 : ''}  </th>
                </tr>
                <tr> <th>${customerDetails.dish.dish2 ? customerDetails.dish.dish2 : ''}</th>
                <th> ${customerDetails.serving.serving2 ? customerDetails.serving.serving2 : ''}  </th>
                <th> ${customerDetails.dish.noofdish2 ? customerDetails.dish.noofdish2 : ''}  </th>
                </tr>
                <tr> <th>${customerDetails.dish.dish3 ? customerDetails.dish.dish3 : ''}</th>
                <th> ${customerDetails.serving.serving3 ? customerDetails.serving.serving3 : ''}  </th>
                <th> ${customerDetails.dish.noofdish3 ? customerDetails.dish.noofdish3 : ''}  </th>
                </tr>
                <tr> <th>${customerDetails.dish.dish4 ? customerDetails.dish.dish4 : ''}</th>
                <th> ${customerDetails.serving.serving4 ? customerDetails.serving.serving4 : ''}  </th>
                <th> ${customerDetails.dish.noofdish4 ? customerDetails.dish.noofdish4 : ''}  </th>
                </tr>
                <tr> <th>${customerDetails.dish.dish5 ? customerDetails.dish.dish5 : ''}</th>
                <th> ${customerDetails.serving.serving5 ? customerDetails.serving.serving5 : ''}  </th>
                <th> ${customerDetails.dish.noofdish5 ? customerDetails.dish.noofdish5 : ''}  </th>
                </tr>    
                `


})
forthdpagebtnP.addEventListener("click", () => {
    document.getElementById("3step").style.background = "blue"
    document.getElementById("4step").style.background = ""
    forthdpage.style.display = "none"
    thirdpage.style.display = ""
})


const lunchProvider = []
const dinnerProvider = []
const breakfastProvider = []
const lunch = API.dishes.map((data) => {
    if (data.availableMeals.includes("lunch")) {
        lunchProvider.push(data)
    }
    if (data.availableMeals.includes("dinner")) {
        dinnerProvider.push(data)
    }
    if (data.availableMeals.includes("breakfast")) {
        breakfastProvider.push(data)
    }

})

var meal = document.getElementById('meal')
meal.addEventListener("click", () => {
    for (var i = 1; i < meal.options.length; i++) {
        if (meal.options[i].selected == true) {
            if (meal.options[i].value == "dinner") {
                dinnerProviderresturant()
                customerDetails.meal = meal.options[i].value
            }
            if (meal.options[i].value == "lunch") {
                lunchProviderresturant()
                customerDetails.meal = meal.options[i].value
            }
            if (meal.options[i].value == "breakfast") {
                breakfastProviderresturant()
                customerDetails.meal = meal.options[i].value
            }

        }


    }
})


function dinnerProviderresturant() {
    filterresturant(dinnerProvider)
}
function lunchProviderresturant() {
    filterresturant(lunchProvider)
}
function breakfastProviderresturant() {
    filterresturant(breakfastProvider)
}

function filterresturant(data) {
    var rdata, rdata1, rdata2, rdata3, rdata4;
    var resturantarray = [];
    var pandadish = [];
    var pizzaradish = [];
    var oliveGardendish = [];
    var tacobelldish = [];
    var bbqdish = [];
    var mcdonalsdish = [];
    const dishprovider = {
        panda: pandadish,
        pizzara: pizzaradish,
        oliveG: oliveGardendish,
        tacobe: tacobelldish,
        bbq: bbqdish,
        mcdonal: mcdonalsdish
    }
    data.map(data => {
        if (data.restaurant == "Panda Express") {
            rdata = (data.restaurant)
            pandadish.push(data.name)

        }
        if (data.restaurant == "Pizzeria") {
            rdata1 = (data.restaurant)
            pizzaradish.push(data.name)
        }
        if (data.restaurant == "Olive Garden") {
            rdata2 = (data.restaurant);
            oliveGardendish.push(data.name)
        }
        if (data.restaurant == "Taco Bell") { rdata2 = (data.restaurant); tacobelldish.push(data.name) }
        if (data.restaurant == "BBQ Hut") { rdata3 = (data.restaurant); bbqdish.push(data.name) }
        if (data.restaurant == "Mc Donalds") { rdata4 = (data.restaurant); mcdonalsdish.push(data.name) }
    })
    resturantarray.push(rdata4)
    resturantarray.push(rdata3)
    resturantarray.push(rdata2)
    resturantarray.push(rdata1)
    resturantarray.push(rdata)
    restaurantDisplay(resturantarray, dishprovider)
}

function restaurantDisplay(data, dishprovider) {
    var row;
    data.filter(data => data !== undefined).map(data => {
        row += `<option>${data}</option>`
    });

    resturantselectbox.innerHTML = ` <option>choice a resturant</option>
    ${row}`
    resturantselectbox.addEventListener("click", () => {
        for (var i = 1; i < resturantselectbox.options.length; i++) {
            if (resturantselectbox.options[i].selected == true) {
                if (resturantselectbox.options[i].value == 'Pizzeria') {
                    pizzaraprovidedish(dishprovider)
                    customerDetails.restaurant = resturantselectbox.options[i].value
                }
                if (resturantselectbox.options[i].value == 'Mc Donalds') {
                    mcprovidedish(dishprovider)
                    customerDetails.restaurant = resturantselectbox.options[i].value
                }
                if (resturantselectbox.options[i].value == 'Panda Express') {
                    pandaprovidedish(dishprovider)
                    customerDetails.restaurant = resturantselectbox.options[i].value
                }
                if (resturantselectbox.options[i].value == 'Olive Garden') {
                    oliveprovidedish(dishprovider)
                    customerDetails.restaurant = resturantselectbox.options[i].value
                }
                if (resturantselectbox.options[i].value == 'BBQ Hut') {
                    bbqprovidedish(dishprovider)
                    customerDetails.restaurant = resturantselectbox.options[i].value
                }
            }


        }
    })
}
function pizzaraprovidedish(dishprovider) {
    displaydish(dishprovider.pizzara)
}
function mcprovidedish(dishprovider) {
    displaydish(dishprovider.mcdonal)
}
function pandaprovidedish(dishprovider) {
    displaydish(dishprovider.panda)
}
function oliveprovidedish(dishprovider) {
    displaydish(dishprovider.oliveG)
}
function bbqprovidedish(dishprovider) {
    displaydish(dishprovider.bbq)
}
const selectdish1 = document.getElementById('dishselect1');
const selectdish2 = document.getElementById('dishselect2');
const selectdish3 = document.getElementById('dishselect3');
const selectdish4 = document.getElementById('dishselect4');
var selected_value, selected_value1, selected_value2, selected_value3;
var datas = [];
function displaydish(data) {
    initialadd(data)
    datas.push(data)
}

function initialadd(data) {
    var row;
    var no = 1
    data.map((data) => {
        row += `<option>${data}</option>`
    })

    document.getElementById("dishselect").innerHTML = `<option>choice a dish</option> ${row} `

    var dishselect = document.getElementById("dishselect")
    dishselect.addEventListener("click", () => {
        document.getElementById("dishadd").style.display = ""
        for (var i = 1; i < dishselect.options.length; i++) {
            if (dishselect.options[i].selected == true) {
                document.getElementById('dishadd').innerHTML = (dishselect.options[i].value)
                selected_value = (dishselect.options[i].value)
                customerDetails.dish.dish1 = selected_value
                document.getElementById("update").style.display = ""

                document.getElementById("dish1Noofserving").addEventListener("keypress", () => {
                    if ((document.getElementById("dish1Noofserving").value) == '') {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish1Noofserving").value) == 0) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish1Noofserving").value) > customerDetails.noOFpeople) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish1Noofserving").value) > 10) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else {
                        thirdpagebtnN.disabled = false
                        document.getElementById('3rdpageError').innerHTML = null
                        customerDetails.serving.serving1 = (document.getElementById("dish1Noofserving").value)
                    }

                })

                if (toggle) {
                    add(selectdish1)
                    document.getElementById('add').style.display = "none"
                }
                else {
                    document.getElementById('add').style.display = ""
                }
                if (toggle1) {
                    add1(selectdish2)
                }
                if (toggle2) {
                    add2(selectdish3)
                }
                if (toggle3) {
                    add2(selectdish4)
                }
            }
        }
        incre()
    })

}

var toggle = false
function add(e) {
    document.getElementById('box1').style.display = ""
    thirdpagebtnN.disabled = true
    var row
    if (toggle1) {
        datas[0].map(data => {
            if (data !== selected_value) {
                row += `<option>${data}</option>`
            }
        })
    }
    else {
        datas[0].map(data => {
            if (data !== selected_value) {
                row += `<option>${data}</option>`
            }
        })
    }
    e.addEventListener("click", () => {
        document.getElementById("dish1add").style.display = ""
        for (var i = 1; i < e.options.length; i++) {
            if (e.options[i].selected == true) {
                selected_value1 = (e.options[i].value)
                customerDetails.dish.dish2 = selected_value1
                document.getElementById("update1").style.display = ""
                customerDetails.dish.noofdish1 = 1
                document.getElementById('dish1add').innerHTML = (e.options[i].value)
                document.getElementById('add1').style.display = ""
                document.getElementById('add').style.display = "none"
                if (toggle1) {
                    add1(selectdish2)
                    document.getElementById('add1').style.display = "none"
                }
                else {
                    document.getElementById('add1').style.display = ""
                }
                if (toggle2) {
                    add2(selectdish3)
                }
                if (toggle3) {
                    add2(selectdish4)
                }

                document.getElementById("dish2Noofserving").addEventListener("keypress", () => {
                    if ((document.getElementById("dish2Noofserving").value) == '') {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish2Noofserving").value) == 0) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish2Noofserving").value) > customerDetails.noOFpeople) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish2Noofserving").value) > 10) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else {
                        thirdpagebtnN.disabled = false
                        document.getElementById('3rdpageError').innerHTML = null
                        customerDetails.serving.serving2 = (document.getElementById("dish2Noofserving").value)
                    }

                })
            }

        }
        incre1()
    })
    document.getElementById('dishselect1').innerHTML = `<option>select a dish</option>${row}`
    toggle = true
}
var toggle1 = false
function add1(e) {
    thirdpagebtnN.disabled = true
    document.getElementById("box2").style.display = ""
    var row
    datas[0].map(data => {
        if (data !== selected_value) {
            if (data !== selected_value1) {
                row += `<option>${data}</option>`
            }
        }
    })
    e.addEventListener("click", () => {
        for (var i = 1; i < e.options.length; i++) {
            document.getElementById("dish2add").style.display = ""
            if (e.options[i].selected == true) {
                selected_value2 = (e.options[i].value)
                customerDetails.dish.dish3 = selected_value2
                document.getElementById("update2").style.display = ""
                customerDetails.dish.noofdish2 = 1
                if (toggle2) {
                    add2(selectdish3)
                    document.getElementById('add2').style.display = "none"
                }
                else {
                    document.getElementById('add2').style.display = ""
                }
                if (toggle3) {
                    add2(selectdish4)
                }

                document.getElementById("dish3Noofserving").addEventListener("keypress", () => {
                    if ((document.getElementById("dish3Noofserving").value) == '') {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish3Noofserving").value) == 0) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish3Noofserving").value) > customerDetails.noOFpeople) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish3Noofserving").value) > 10) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else {
                        thirdpagebtnN.disabled = false
                        document.getElementById('3rdpageError').innerHTML = null
                        customerDetails.serving.serving3 = (document.getElementById("dish3Noofserving").value)
                    }

                })
                document.getElementById('dish2add').innerHTML = (e.options[i].value)
                document.getElementById('add1').style.display = "none"
                document.getElementById('add2').style.display = ""
            }
        }
        incre2()
    })
    document.getElementById("dishselect2").innerHTML = `<option>select a dish</option>${row}`
    toggle1 = true
}
var toggle2 = false
function add2(e) {
    thirdpagebtnN.disabled = true
    var row
    document.getElementById("box3").style.display = ""
    datas[0].map(data => {
        if (data !== selected_value) {
            if (data !== selected_value1) {
                if (data !== selected_value2) { row += `<option>${data}</option>` }
            }
        }
    })
    document.getElementById("dishselect3").innerHTML = `<option>select a dish</option>${row}`
    e.addEventListener("click", () => {
        document.getElementById("dish3add").style.display = ""
        for (var i = 1; i < e.options.length; i++) {
            if (e.options[i].selected == true) {
                selected_value3 = (e.options[i].value)
                customerDetails.dish.dish4 = selected_value3
                document.getElementById("update3").style.display = ""
                customerDetails.dish.noofdish3 = 1
                if (toggle3) {
                    add3(selectdish4)
                }
                document.getElementById("dish4Noofserving").addEventListener("keypress", () => {
                    if ((document.getElementById("dish4Noofserving").value) == '') {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish4Noofserving").value) == 0) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish4Noofserving").value) > customerDetails.noOFpeople) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish4Noofserving").value) > 10) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else {
                        thirdpagebtnN.disabled = false
                        document.getElementById('3rdpageError').innerHTML = null
                        customerDetails.serving.serving4 = (document.getElementById("dish4Noofserving").value)
                    }

                })
                document.getElementById('dish3add').innerHTML = (e.options[i].value)
                document.getElementById('add2').style.display = "none"
            }
        }
        incre3()
    })
    toggle2 = true
}
var toggle3 = false
function add3(e) {
    thirdpagebtnN.disabled = true
    var row
    document.getElementById("box4").style.display = ""
    datas[0].map(data => {
        if (data !== selected_value) {
            if (data !== selected_value1) {
                if (data !== selected_value2)
                    if (data !== selected_value3) {
                        { row += `<option>${data}</option>` }
                    }
            }
        }
    })
    document.getElementById("dishselect4").innerHTML = `<option>select a dish</option>${row}`
    e.addEventListener("click", () => {
        document.getElementById("dish4add").style.display = ""
        for (var i = 1; i < e.options.length; i++) {
            if (e.options[i].selected == true) {
                selected_value4 = (e.options[i].value)
                customerDetails.dish.dish5 = selected_value4
                document.getElementById("update4").style.display = ""
                customerDetails.dish.noofdish4 = 1
                document.getElementById("dish5Noofserving").addEventListener("keypress", () => {
                    if ((document.getElementById("dish5Noofserving").value) == '') {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish5Noofserving").value) == 0) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish5Noofserving").value) > customerDetails.noOFpeople) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else if ((document.getElementById("dish5Noofserving").value) > 10) {
                        thirdpagebtnN.disabled = true
                        document.getElementById('3rdpageError').innerHTML = ("please enter a servising less than ' no of people'")
                    }
                    else {
                        thirdpagebtnN.disabled = false
                        document.getElementById('3rdpageError').innerHTML = null
                        customerDetails.serving.serving5 = (document.getElementById("dish5Noofserving").value)
                    }

                })
                document.getElementById('dish4add').innerHTML = (e.options[i].value)
                document.getElementById('add3').style.display = "none"
            }
        }
        incre4()
    })
    toggle3 = true
}




document.getElementById('box1').style.display = "none"
document.getElementById('box2').style.display = "none"
document.getElementById('box3').style.display = "none"
document.getElementById('box4').style.display = "none"
document.getElementById('add1').style.display = "none"
document.getElementById('add2').style.display = "none"
document.getElementById('add3').style.display = "none"
document.getElementById('update').style.display = "none"
document.getElementById('update1').style.display = "none"
document.getElementById('update2').style.display = "none"
document.getElementById('update3').style.display = "none"
document.getElementById('update4').style.display = "none"

//  for increment and decrement and delete 

var no = 0, no1 = 0, no2 = 0, no3 = 0;
document.getElementById("incre").addEventListener("click", incre = () => {
    no += 1
    customerDetails.dish.noofdish1 = no
    document.getElementById("value").innerHTML = no
    if (document.getElementById("value").innerHTML > 1) {
        document.getElementById('3rdpageError1').innerHTML = null
    }
})
document.getElementById("decre").addEventListener("click", () => {
    no -= 1
    if (no == 0) {
        document.getElementById('3rdpageError1').innerHTML = 'must be dish items is 1'
        no = 1
    }
    else {
        customerDetails.dish.noofdish1 = no
        document.getElementById("value").innerHTML = no
    }
})
document.getElementById("incre1").addEventListener("click",incre1 = () => {
    no1 += 1
    document.getElementById("value1").innerHTML = no1
    customerDetails.dish.noofdish2 = no1
    if (document.getElementById("value1").innerHTML > 1) {
        document.getElementById('3rdpageError1').innerHTML = null
    }
})
document.getElementById("decre1").addEventListener("click", () => {
    no1 -= 1
    if (no1 == 0) {
        document.getElementById('3rdpageError1').innerHTML = 'must be dish items is 1'
        no1 = 1
    }
    else {
        customerDetails.dish.noofdish2 = no1
        document.getElementById("value1").innerHTML = no1
    }
})

document.getElementById("incre2").addEventListener("click", incre2 = () => {
    no2 += 1
    document.getElementById("value2").innerHTML = no2
    customerDetails.dish.noofdish3 = no2
    if (document.getElementById("value2").innerHTML > 1) {
        document.getElementById('3rdpageError1').innerHTML = null
    }
})
document.getElementById("decre2").addEventListener("click", () => {
    no2 -= 1
    if (no2 == 0) {
        document.getElementById('3rdpageError1').innerHTML = 'must be dish items is 1'
        no2 = 1
    }
    else {
        customerDetails.dish.noofdish3 = no2
        document.getElementById("value2").innerHTML = no2
    }
})

document.getElementById("incre3").addEventListener("click", incre3 = () => {
    no3 += 1
    document.getElementById("value3").innerHTML = no3
    customerDetails.dish.noofdish4 = no3
    if (document.getElementById("value3").innerHTML > 1) {
        document.getElementById('3rdpageError1').innerHTML = null
    }
})
document.getElementById("decre3").addEventListener("click", () => {
    no3 -= 1
    if (no3 == 0) {
        document.getElementById('3rdpageError1').innerHTML = 'must be dish items is 1'
        no3 = 1
    }
    else {
        customerDetails.dish.noofdish4 = no3
        document.getElementById("value3").innerHTML = no3
    }
})

document.getElementById("incre4").addEventListener("click", incre4 = () => {
    no4 += 1
    document.getElementById("value4").innerHTML = no4
    customerDetails.dish.noofdish5 = no4
    if (document.getElementById("value4").innerHTML > 1) {
        document.getElementById('3rdpageError1').innerHTML = null
    }
})
document.getElementById("decre4").addEventListener("click", () => {
    no4 -= 1
    if (no4 == 0) {
        document.getElementById('3rdpageError1').innerHTML = 'must be dish items is 1'
        no4 = 1
    }
    else {
        customerDetails.dish.noofdish5 = no4
        document.getElementById("value4").innerHTML = no4
    }
})



// for delete dish

document.getElementById("dele").addEventListener("click", () => {
    document.getElementById("dishadd").style.display = "none"
    document.getElementById("update").style.display = "none"
    customerDetails.dish.dish1 = null
    customerDetails.serving.serving1 = null
    customerDetails.dish.noofdish1 = null
})
document.getElementById("dele1").addEventListener("click", () => {
    document.getElementById("dish1add").style.display = "none"
    document.getElementById("update1").style.display = "none"
    customerDetails.dish.dish2 = null
    customerDetails.serving.serving2 = null
    customerDetails.dish.noofdish2 = null
})
document.getElementById("dele2").addEventListener("click", () => {
    document.getElementById("dish2add").style.display = "none"
    document.getElementById("update2").style.display = "none"
    customerDetails.dish.dish3 = null
    customerDetails.serving.serving3 = null
    customerDetails.dish.noofdish3 = null
})
document.getElementById("dele3").addEventListener("click", () => {
    document.getElementById("dish3add").style.display = "none"
    document.getElementById("update3").style.display = "none"
    customerDetails.dish.dish4 = null
    customerDetails.serving.serving4 = null
    customerDetails.dish.noofdish4 = null
})
document.getElementById("dele4").addEventListener("click", () => {
    document.getElementById("dish4add").style.display = "none"
    document.getElementById("update4").style.display = "none"
    customerDetails.dish.dish5 = null
    customerDetails.serving.serving5 = null
    customerDetails.dish.noofdish5 = null
})
// for local data shopwing

forthdpagebtnS.addEventListener("click", () => {

    localStorage.setItem("details", JSON.stringify(customerDetails))
    document.getElementById("localboc").style.display = ""
})

const localData = JSON.parse(localStorage.getItem("details"))
document.getElementById("local").innerHTML = `
    <h1> Meal:- ${localData.meal}<h1>
    <p> Resturant :- ${localData.resturant}</p>
    <p> no of people :- ${localData.noOFpeople}</p>`

document.getElementById("tbody1").innerHTML = `

    
      <tr> <th>${localData.dish.dish1 ? localData.dish.dish1 : ''}</th>
    <th> ${localData.serving.serving1 ? localData.serving.serving1 : ''}  </th>
      <th> ${localData.dish.noofdish1 ? localData.dish.noofdish1 : ''}  </th>
    </tr>
    
      <tr> <th>${localData.dish.dish2 ? localData.dish.dish2 : ''}</th>
    <th> ${localData.serving.serving2 ? localData.serving.serving2 : ''}  </th>
      <th> ${localData.dish.noofdish2 ? localData.dish.noofdish2 : ''}  </th>
    </tr>
    
      <tr> <th>${localData.dish.dish3 ? localData.dish.dish3 : ''}</th>
    <th> ${localData.serving.serving3 ? localData.serving.serving3 : ''}  </th>
      <th> ${localData.dish.noofdish3 ? localData.dish.noofdish3 : ''}  </th>
    </tr>
      <tr> <th>${localData.dish.dish4 ? localData.dish.dish4 : ''}</th>
    <th> ${localData.serving.serving4 ? localData.serving.serving4 : ''}  </th>
      <th> ${localData.dish.noofdish4 ? localData.dish.noofdish4 : ''}  </th>
     </tr>`

thirdpagebtnN.disabled = true