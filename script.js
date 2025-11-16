const juiceInfo = document.querySelector(".juice-info"); //hold name n descrptn
const title = document.querySelector("h1"); //name of juice
const juiceDescription = document.querySelector(".juice-description");// descrptn of juice 
const juiceArray = document.querySelectorAll(".juice-bunch"); //that 4 static bottles after descrptn
const juiceWheel= document.querySelector(".juice-wheel"); //wheel of juices 
const fruitsWheel= document.querySelector(".fruits-wheel"); // wheel of fruits

let currentJuice = juiceArray[0];

const juiceData = [
    {
        name: "Plum Juice",
        description: "Plum juice is a sweet and slightly tangy drink made from fresh, ripe plums. It has a rich, deep color and a smooth, fruity taste. This juice is full of vitamins, fiber, and natural antioxidants that help keep the body healthy. Drinking plum juice can support digestion and give you a refreshing boost of energy. It is a tasty and nutritious drink for any time of the day.",
		backgroundColor: "linear-gradient(90deg ,rgb(88, 0, 99),rgb(193, 89, 237) )",
    },
	{
    name: "Strawberry Juice",
    description: "Strawberry juice is a sweet and refreshing drink made from fresh, ripe strawberries. It has a bright red color and a naturally fruity flavor that many people enjoy. This juice is rich in vitamins and antioxidants, which help keep the body healthy. Drinking strawberry juice gives you a cool, tasty, and energizing feeling. It is a delicious and healthy choice for any time of the day.",
	backgroundColor: "linear-gradient(90deg,rgb(255, 22, 61),pink)",
    },
   
    {
        name: "Orange Juice",
        description: "Orange juice is a fresh and tasty drink made from juicy oranges. It has a sweet, tangy flavor that feels refreshing and energizing. The bright orange color shows that it is full of vitamin C and other healthy nutrients. Drinking orange juice helps boost your immunity, keeps you hydrated, and gives you a natural burst of energy. It is a healthy and delicious drink for any time of the day.",
		backgroundColor: "linear-gradient(90deg,rgb(237, 143, 1),rgb(210, 193, 94) )",
    },   
   {
        name: "Kiwi Juice",
        description: "Kiwi juice is a fresh and tasty drink made from ripe kiwis. It has a light sweet-and-sour flavor that feels very refreshing. The juice is bright green and full of important nutrients like vitamin C. Drinking kiwi juice helps keep you healthy, hydrated, and energized. It is a delicious and natural choice for any time of the day.",
        backgroundColor: "linear-gradient(90deg,rgb(95, 107, 0),rgb(107,199 , 88 )",
    },
    
];


juiceArray.forEach((element, index) => {
    element.addEventListener("click", () => {

      document.querySelector("main").style.background =
        juiceData[index].backgroundColor;
     const newDeg = -45 -index * 90;

      juiceWheel.style.transform = `rotate(${newDeg}deg)`;
      fruitsWheel.style.transform = `rotate(${newDeg}deg)`;

      title.innerHTML = juiceData[index].name;
      juiceDescription.innerHTML = juiceData[index].description;
      
      currentJuice.classList.remove("activePhoto");
      element.classList.add("activePhoto");
      currentJuice = element;
      juiceInfo.classList.add("fade-in");

      setTimeout(() => {
        juiceInfo.classList.remove("fade-in");
      }, 1000);
    });
  });