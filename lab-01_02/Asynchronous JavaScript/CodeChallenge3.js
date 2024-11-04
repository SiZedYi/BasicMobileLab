const wait = (seconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  };
const loadNPause = async(imgPath) => {
    try{
        const img = document.createElement("img");
        img.src = imgPath;
        img.addEventListener("load", function(){
            document.querySelector(".images").appendChild(img);
        });
        img.addEventListener("error", function(){
            throw new Error("Image not found");
        });
        await wait(2);
        img.style.display = "none";
        await wait(2);
    }
    catch(err){
        console.error(err);
    }
}



const loadAll = async (imgArr) => {
    try {
      await imgArr.reduce((promise, img) => {
        return promise.then(() => loadNPause(img));
      }, Promise.resolve());
    } catch (err) {
      console.error(err);
    }
  };

window.onload = async () => {
    await loadAll(["spy.jpg", "spy2.jpg", "spy3.jpg"]);
}