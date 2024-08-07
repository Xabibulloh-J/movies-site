var elFilmList = document.querySelector(".js-film-list");

for (var film of films) {
   
   var newItem = document.createElement("li");
   newItem.classList.add("relative");
   newItem.classList.add("w-[350px]");
   newItem.classList.add("py-[15px]")
   newItem.classList.add("bg-[#222933]");
   
   var newSpan = document.createElement("span");
   var newImg = document.createElement("img");
   var newTitle = document.createElement("h3");
   var newType = document.createElement("p");
   
   var filmDate = new Date(film.release_date);
   var day = filmDate.getDate();
   var month = filmDate.getMonth() + 1;
   var year = filmDate.getFullYear();
   newSpan.textContent = `${day}.${month}.${year}`;
   newSpan.classList.add("absolute");
   newSpan.classList.add("left-[15px]");
   newSpan.classList.add("p-[7px]");
   newSpan.classList.add("rounded-[3px]");
   newSpan.classList.add("bg-[#759EB1]");
   newSpan.classList.add("text-[#131A20]");
   
   newImg.src = film.poster;
   newImg.alt = film.overview;
   newImg.title = film.overview;
   newImg.classList.add("w-[320px]");
   newImg.classList.add("mx-auto")
   
   newTitle.textContent = film.title.toUpperCase();
   newTitle.title = film.title;
   newTitle.classList.add("text-[#759EB1]");
   newTitle.classList.add("text-center");
   newTitle.classList.add("text-[24px]");
   newTitle.classList.add("my-[10px]");
   
   newType.textContent = film.genres.join(" ");
   newType.title = film.genres.join(" ");
   newType.classList.add("mt-[10px]");
   newType.classList.add("text-[#759EB1]");
   newType.classList.add("text-center");
   newType.classList.add("text-[18px]");
   
   newItem.append(newSpan, newImg, newTitle, newType);
   
   elFilmList.appendChild(newItem);
};