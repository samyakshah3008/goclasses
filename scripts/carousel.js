window.addEventListener("load", () => {
  let coursesContainerEle = document.querySelector("#courses-container");
  let coursesElements = document.getElementsByClassName("course");
  console.dir(coursesContainerEle.getBoundingClientRect());
  let dim = coursesContainerEle.getBoundingClientRect();
  console.dir(coursesContainerEle.scrollLeft);
  let count = 0;
  setInterval(() => {
    console.log("calling scroll");
    //translating coursesContainerEle
    console.log(count);
    coursesContainerEle.style.transform = `translateX(${-1 * count}px)`;
    // coursesContainerEle.scrollLeft = (coursesContainerEle.scrollLeft + 1)% coursesContainerEle.scrollWidth;
    count = count + coursesElements[0].offsetWidth + 20;
    if (count > coursesContainerEle.scrollWidth) {
      count = 0;
    }
  }, 3000);

  //detecting right swipe and left swipe
  coursesContainerEle.addEventListener("touchstart", handleTouchStart, false);
  coursesContainerEle.addEventListener("touchmove", handleTouchMove, false);
  let xDown;
  let yDown;
  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        alert("right swipe");
      } else {
        alert("left swipe");
      }
    } else {
      if (yDiff > 0) {
        alert("down swipe");
      } else {
        alert("up swipe");
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
});
