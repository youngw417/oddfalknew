const divWhite = document.querySelector('.myStory-1');
const divBlue = document.querySelector('.myStory-2');
const divOrange = document.querySelector('.myStory-3');
const butRight = document.querySelector('.right-button');
// const butLeft = document.querySelector('.left-button');

let count1 = 0;
// let count2 = 0;
butRight.addEventListener('click', () => {
  count1++;
  console.log('count1', count1);
  if (count1 % 3 === 1) {
    divBlue.style.zIndex = 100;
    divOrange.style.zIndex = 50;
    divWhite.style.zIndex = 0;
    TweenMax.to(divBlue, 1, { x: '-=80', y: '+=60' });
    TweenMax.to(divWhite, 1, { x: '+=180', y: '-=120' });
    TweenMax.to(divOrange, 1, { x: '-=80', y: '+=60' });
  } else if (count1 % 3 === 2) {
    divBlue.style.zIndex = 0;
    divOrange.style.zIndex = 100;
    divWhite.style.zIndex = 50;
    TweenMax.to(divOrange, 1, { x: '-=80', y: '+=60' });
    TweenMax.to(divBlue, 1, { x: '+=160', y: '-=120' });
    TweenMax.to(divWhite, 1, { x: '-=80', y: '+=60' });
  } else {
    divBlue.style.zIndex = 50;
    divOrange.style.zIndex = 0;
    divWhite.style.zIndex = 100;
    TweenMax.to(divWhite, 1, { x: '-=80', y: '+=60' });
    TweenMax.to(divOrange, 1, { x: '+=160', y: '-=120' });
    TweenMax.to(divBlue, 1, { x: '-=80', y: '+=60' });
  }
});

// butLeft.addEventListener('click', () => {
//   count2++;
//   console.log('count1', count1);
//   if (count2 % 3 === 1) {
//     divBlue.style.zIndex = 0;
//     divOrange.style.zIndex = 100;
//     divWhite.style.zIndex = 50;
//     TweenMax.to(divWhite, 1, { x: '+=80', y: '-=60' });
//     TweenMax.to(divOrange, 1, { x: '-=160', y: '+=120' });
//     TweenMax.to(divBlue, 1, { x: '+=80', y: '-=60' });
//   } else if (count2 % 3 === 2) {
//     divBlue.style.zIndex = 100;
//     divOrange.style.zIndex = 50;
//     divWhite.style.zIndex = 0;
//     TweenMax.to(divOrange, 1, { x: '+=80', y: '-=60' });
//     TweenMax.to(divBlue, 1, { x: '-=160', y: '+=120' });
//     TweenMax.to(divWhite, 1, { x: '+=80', y: '-=60' });
//   } else {
//     divBlue.style.zIndex = 50;
//     divOrange.style.zIndex = 0;
//     divWhite.style.zIndex = 100;
//     TweenMax.to(divBlue, 1, { x: '+=80', y: '-=60' });
//     TweenMax.to(divWhite, 1, { x: '-=160', y: '+=120' });
//     TweenMax.to(divOrange, 1, { x: '+=80', y: '-=60' });
//   }
// });

// boxWhite.addEventListener('click', () => {
//   boxWhite.style.zIndex = 100;
//   clickBlue.style.zIndex = 50;
//   boxOrange.style.zIndex = 0;
//   TweenMax.to(boxWhite, 1, { x: 0, y: 0 });
//   TweenMax.to(clickBlue, 1, { x: 0, y: 0 });
//   TweenMax.to(boxOrange, 1, { x: 0, y: 0 });
// });

// boxOrange.addEventListener('click', () => {
//   boxOrange.style.zIndex = 100;
//   boxWhite.style.zIndex = 0;
//   TweenMax.to(boxOrange, 1, { x: -100, y: 210 });
//   TweenMax.to(boxWhite, 1, { x: 100, y: -210 });
//   TweenMax.to(clickBlue, 1, { x: 0, y: 0 });
// });
