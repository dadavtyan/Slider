let images_gallery = document.querySelector(".images-gallery");
let images_selected = document.querySelector(".images-selected");
let images_slider = document.querySelector(".images-slider");
let slider_container = document.querySelector(".slider-container").style;
let body = document.querySelector("body").style;
let isCreate = false;

let imgArray = ["city_1.jpg","city_2.jpg","city_3.jpg","city_4.jpg","city_5.jpg",
    "city_6.jpg","city_7.jpg","city_8.jpg","city_9.jpg","city_10.jpg","city_11.jpg",
    "city_12.jpg","city_13.jpg","city_14.jpg","city_15.jpg","city_16.jpg","city_17.jpg",
    "city_18.jpg","city_19.jpg","city_20.jpg","city_21.jpg","city_22.jpg","city_23.jpg","city_24.jpg","city_25.jpg"];

let imgDirectory = "images/";

for(let i = 0; i < imgArray.length; i++){

    let div = document.createElement("DIV");
    div.className = "img-bg";
    let image = document.createElement("IMG");
    image.setAttribute("src", (imgDirectory + imgArray[i]));
    image.setAttribute("onclick", "onClickImageItem(this)");
    image.setAttribute("name", i);
    div.appendChild(image);
    images_gallery.appendChild(div);

}

function onClickImageItem(img) {

    let startPosition = +img.name;
    slider_container.display = "block";

    if (isCreate) {
        let image_selected = document.querySelector("#selected");
        image_selected.src = img.src;
    } else {
        images_selected.innerHTML += "<img id=\'selected\' src=" + img.src + "></img>";
    }
    body.overflow = "hidden";

    if (!isCreate){
        if (startPosition > imgArray.length - 5) {
            for (let i = startPosition - 4; i < startPosition + 1; i++) {

                let div = document.createElement("DIV");
                div.className = "slider-item active";
                let image = document.createElement("IMG");
                image.setAttribute("src", (imgDirectory + imgArray[i]));
                image.setAttribute("onclick", "onClickSliderItem(this," + startPosition +")");
                image.setAttribute("name", i);
                div.appendChild(image);
                images_slider.appendChild(div);
            }
        }
        else {
            for (let i = 0; i < imgArray.length; i++) {
                let div = document.createElement("DIV");

                if (i >= startPosition && i <= startPosition + 4) {
                    div.className = "slider-item active";
                }
                else {
                    div.className = "slider-item";
                }

                let image = document.createElement("IMG");
                image.setAttribute("src", (imgDirectory + imgArray[i]));
                image.setAttribute("onclick", "onClickSliderItem(this," + startPosition +")");
                image.setAttribute("name", i);
                div.appendChild(image);
                images_slider.appendChild(div);
            }
        }
    } else {

        if (startPosition > imgArray.length - 5) {
            startPosition = imgArray.length - 5;
        }

        for (let i = startPosition; i < startPosition + 5; i++) {
            let slider_item = document.querySelectorAll(".slider-item");
            slider_item[i].classList.add("active");
        }

    }

    console.log(startPosition - imgArray.length );
   // console.log(document.querySelector(".slider-item").length);
    isCreate = true;

}


function onClickSliderItem(img,startPosition) {
    let  selectedPosition = +img.name;
    let slider_item = document.querySelectorAll(".slider-item");
    let image_selected = document.querySelector("#selected");
    image_selected.src = img.src;


    end: for (let i = startPosition; i < selectedPosition; i++) {
                 if (i > imgArray.length - 6)  break end;
                 slider_item[i].classList.remove("active");
    }
   if (selectedPosition <  imgArray.length) {
       end:  for (let i = selectedPosition + 1; i < selectedPosition + 5; i++) {
            if (i > imgArray.length- 1) break end;
            slider_item[i].classList.add("active");
        }
        startPosition = selectedPosition;
    }
    console.log("startPosition : " + startPosition +" selectedPosition : " + selectedPosition );
}


function closeSlider() {
    let slider_item = document.querySelectorAll(".slider-item");
    slider_container.display = "none";
    body.overflow = "overlay";
    for (let i = 0; i < imgArray.length; i++) {
        slider_item[i].classList.remove("active");
    }
    console.log("8569" );
}