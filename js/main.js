
const deninho= document.querySelector(".deninho");
      let x = 0;
      let y = 0;
      const speed = 50;
      let flipped = false;
      let rotate = 0;
      function handleKeyDown(event) {
        // if its not an arrow key, we dont care
        if (!event.key.includes("Arrow")) {
          return;
        }
        switch (event.key) {
          case "ArrowUp":
            y = y - 1;
            rotate = -90;
            break;
          case "ArrowDown":
            y = y + 1;
            rotate = 90;
            break;
          case "ArrowLeft":
            x = x - 1;
            rotate = 0;
            flipped = true;
            break;
          case "ArrowRight":
            x = x + 1;
            rotate = 0;
            flipped = false;
            break;
          default:
            console.log("That is not a valid move");
            break;
        }

        deninho.setAttribute(
          "style",
          `
        --rotateX: ${flipped ? "180deg" : "0"};
        --x: ${x * speed}px;
        --y: ${y * speed}px;
        --rotate: ${rotate}deg;
      `
        );
      }
      window.addEventListener("keydown", handleKeyDown);
      window.onload = changeBackground();

      function changeBackground() {

         images = [
             'url("/img/jungles/deninho-snake.jpg")',
             'url("/img/jungles/Jungle-HD-Pictures.jpeg")',
             'url("/img/jungles/selva-abyss.jpg")'
         ]
         body = document.getElementsByTagName('body')[0];
         body.style.background = images[Math.floor((Math.random() * images.length))];

      }