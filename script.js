// shuffle all the cards

const shuffle = document.querySelector("#shuffle");
const grid = document.querySelector("#grid");

shuffle.addEventListener("click",()=>{
  const cards = Array.from(grid.children);
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        grid.appendChild(cards[j]);
        cards.splice(j, 1);
      }    
});

