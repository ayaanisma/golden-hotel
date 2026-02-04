// Array of meals (update as needed)
let meals = [
  { name: "rice & chicken", price: 15 },
  { name: "basta", price: 12 },
  { name: "canjera and beer", price: 10 },
  { name: "sanbus", price: 5 },
  { name: "malawax", price: 7 },
  { name: "shaah", price: 3 },
  { name: "mango", price: 5 },
  { name: "banana shake", price: 4 },
  { name: "strawberry", price: 5 },
  { name: "qaro", price: 4 },
  { name: "Breakfast", price: 10 },
  { name: "Lunch", price: 15 },
  { name: "Dinner", price: 20 },
  { name: "Dessert", price: 8 }
];

// Function to order food from homepage
function orderFood(foodName){
  const mealFound = meals.find(m => m.name.toLowerCase() === foodName.toLowerCase());
  if(!mealFound){
    alert("Sorry, the selected meal does not exist!");
    return;
  }
  localStorage.setItem("selectedFood", mealFound.name);
  window.location.href = "booking.html"; // redirect to booking page
}

// Load selected food on booking page
document.addEventListener("DOMContentLoaded", function(){
  const selectedFood = localStorage.getItem("selectedFood");
  if(selectedFood){
    const foodInput = document.getElementById("food-input");
    const selectedFoodText = document.getElementById("selected-food");

    if(foodInput){
      foodInput.value = selectedFood;
    }

    if(selectedFoodText){
      selectedFoodText.innerText = "You selected: " + selectedFood;
    }
  }
});

// Simple validation helpers
function isValidEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone){
  const regex = /^[0-9]{7,15}$/; // 7 to 15 digits
  return regex.test(phone);
}

// Room Booking Form
const roomForm = document.getElementById("roomBookingForm");
if(roomForm){
  roomForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("roomName").value.trim();
    const email = document.getElementById("roomEmail").value.trim();
    const roomPrice = Number(document.getElementById("room").value);
    const nights = Number(document.getElementById("nights").value);

    if(name.length < 2){
      alert("Please enter a valid name!");
      return;
    }
    if(!isValidEmail(email)){
      alert("Please enter a valid email!");
      return;
    }
    if(isNaN(roomPrice) || roomPrice <= 0){
      alert("Please select a valid room!");
      return;
    }
    if(!Number.isInteger(nights) || nights <= 0){
      alert("Please enter a valid number of nights!");
      return;
    }

    const total = roomPrice * nights;
    alert(`Room Booked Successfully!\nName: ${name}\nTotal: $${total}`);
  });
}

// Meal Booking Form
const mealForm = document.getElementById("mealBookingForm");
if(mealForm){
  mealForm.addEventListener("submit", function(e){
    e.preventDefault();
    const mealName = document.getElementById("food-input").value.trim();
    const name = document.getElementById("mealName").value.trim();
    const email = document.getElementById("mealEmail").value.trim();
    const phone = document.getElementById("mealPhone").value.trim();

    if(name.length < 2){
      alert("Please enter a valid name!");
      return;
    }
    if(!isValidEmail(email)){
      alert("Please enter a valid email!");
      return;
    }
    if(!isValidPhone(phone)){
      alert("Please enter a valid phone number!");
      return;
    }

    const mealFound = meals.find(m => m.name.toLowerCase() === mealName.toLowerCase());
    if(!mealFound){
      alert("Selected meal not found!");
      return;
    }

    alert(`Meal Booked Successfully!\nMeal: ${mealFound.name}\nPrice: $${mealFound.price}`);
    localStorage.removeItem("selectedFood");
  });
}
