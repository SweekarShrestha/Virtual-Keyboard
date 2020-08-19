for(var i = 0; i < document.querySelectorAll("button").length; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function()
    {
      var buttonId = this.innerHTML;
      playSound(buttonId);
      addAnimation(buttonId);
    }
  );
}

document.addEventListener("keydown", function(event)
  {
    playSound(event.key);
    addAnimation(event.key);
  }
);

function playSound(key)
{
  if(key === "q")
  {
    var audio = new Audio("sound/q.ogg");
    audio.play();
  }
  else if(key === "2")
  {
    var audio = new Audio("sound/2.ogg");
    audio.play();
  }
  else if(key === "w")
  {
    var audio = new Audio("sound/w.ogg");
    audio.play();
  }
  else if(key === "3")
  {
    var audio = new Audio("sound/3.ogg");
    audio.play();
  }
  else if(key === "e")
  {
    var audio = new Audio("sound/e.ogg");
    audio.play();
  }
  else if(key === "r")
  {
    var audio = new Audio("sound/r.ogg");
    audio.play();
  }
  else if(key === "5")
  {
    var audio = new Audio("sound/5.ogg");
    audio.play();
  }
  else if(key === "t")
  {
    var audio = new Audio("sound/t.ogg");
    audio.play();
  }
  else if(key === "7")
  {
    var audio = new Audio("sound/7.ogg");
    audio.play();
  }
  else if(key === "y")
  {
    var audio = new Audio("sound/y.ogg");
    audio.play();
  }
  else if(key === "8")
  {
    var audio = new Audio("sound/9.ogg");
    audio.play();
  }
  else if(key === "u")
  {
    var audio = new Audio("sound/u.ogg");
    audio.play();
  }
  else if(key === "i")
  {
    var audio = new Audio("sound/i.ogg");
    audio.play();
  }
  else if(key === "9")
  {
    var audio = new Audio("sound/9.ogg");
    audio.play();
  }
  else if(key === "o")
  {
    var audio = new Audio("sound/o.ogg");
    audio.play();
  }
  else if(key === "0")
  {
    var audio = new Audio("sound/0.ogg");
    audio.play();
  }
  else if(key === "p")
  {
    var audio = new Audio("sound/p.ogg");
    audio.play();
  }
  else if(key === "z")
  {
    var audio = new Audio("sound/z.ogg");
    audio.play();
  }
  else if(key === "s")
  {
    var audio = new Audio("sound/s.ogg");
    audio.play();
  }
  else if(key === "x")
  {
    var audio = new Audio("sound/x.ogg");
    audio.play();
  }
  else if(key === "d")
  {
    var audio = new Audio("sound/d.ogg");
    audio.play();
  }
  else if(key === "c")
  {
    var audio = new Audio("sound/c.ogg");
    audio.play();
  }
  else if(key === "f")
  {
    var audio = new Audio("sound/f.ogg");
    audio.play();
  }
  else if(key === "v")
  {
    var audio = new Audio("sound/v.ogg");
    audio.play();
  }
  else if(key === "b")
  {
    var audio = new Audio("sound/b.ogg");
    audio.play();
  }
  else if(key === "h")
  {
    var audio = new Audio("sound/h.ogg");
    audio.play();
  }
  else if(key === "n")
  {
    var audio = new Audio("sound/n.ogg");
    audio.play();
  }
  else if(key === "j")
  {
    var audio = new Audio("sound/j.ogg");
    audio.play();
  }
  else if(key === "m")
  {
    var audio = new Audio("sound/m.ogg");
    audio.play();
  }
  else if(key === ",")
  {
    var audio = new Audio("sound/,.ogg");
    audio.play();
  }
  else if(key === "l")
  {
    var audio = new Audio("sound/l.ogg");
    audio.play();
  }
  else if(key === ".")
  {
    var audio = new Audio("sound/..ogg");
    audio.play();
  }
  else if(key === ";")
  {
    var audio = new Audio("sound/;.ogg");
    audio.play();
  }
  else if(key === "/")
  {
    var audio = new Audio("sound/frontslash.ogg");
    audio.play();
  }
  else if(key === "'")
  {
    var audio = new Audio("sound/'.ogg");
    audio.play();
  }
}

function addAnimation(keyEvent)
{
  document.querySelector("."+keyEvent).classList.add("pressed");
  setTimeout(function()
  {
    document.querySelector("."+keyEvent).classList.remove("pressed");
  }
  , 100);
}
