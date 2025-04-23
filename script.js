//initialising the rating
let rating = 0

//changing the ratings image
function updateEmoji(){
    const emojiImg = document.querySelector('#cont div img')
    if (rating > 0){
        emojiImg.src = imagePaths.emojis[rating]
    }
}

//these function used to find the rating
function bad(){
    rating = 1
    updateEmoji();
}
function little_bad(){
    rating = 2
    updateEmoji();
}
function medium(){
    rating = 3
    updateEmoji();
}
function good(){
    rating = 4
    updateEmoji();
}
function very_good(){
    rating = 5
    updateEmoji();
}

//the imgs variable
const imagePaths = {
    emojis: {
      1: '/emojies/1.png',
      2: '/emojies/2.png', 
      3: '/emojies/3.png',
      4: '/emojies/4.png',
      5: '/emojies/5.png'
    }
}