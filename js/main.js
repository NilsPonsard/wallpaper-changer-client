var currentID = null;

async function update(){

  if (token.length === 0) return;

  let result = await fetch('https://api.wall.nponsard.net/wallpaper',{
    headers :{
      "api-key": token
    }
  })

  let data = await result.json();

  if (data.id !== currentID){
    currentID = data.id;
    applyWallpaper(data.url,data.title,data.user)
  }

}

// update every 60 seconds
setInterval(update,60000);