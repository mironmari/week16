let userName = document.getElementById('user');
let button = document.getElementById('btn');
let userAvatar = document.getElementById('link');
let comment = document.getElementById('comment-text')


function formatName(str) {
    let result = str.trim();

    if (result === "") {
        return "Аноноим"
    }

    let arr = result.split(" ");

    arr = arr.map(
        (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
    );

   return arr.join(" ");
}

function showImage(src) {
  let image = document.createElement("img");
  image.src = src;

  let resultAvatar = document.getElementById("result3");
  resultAvatar.append(image);

  }

function checkSpam(str) {
    let word = /виагра/gi;
    return str.replace(word, "***");
  }

  button.addEventListener("click", () => {
    document.getElementById("result2").innerHTML = formatName(userName.value);
    userName.value = null

    document.getElementById("result4").innerHTML = checkSpam(comment.value);
    comment.value = null

   showImage(userAvatar.value);
    userAvatar.value = null
});



//let str = document.getElementById('str').innerHTML;

//function deleteTags(str) {
  //  let word = /<\w*\>([^<>]*?)<\/\w*\>/gm;
    //return deleteTags(str);
  //};

//console.log(deleteTags(str));



//    /\<\w*\>/g
//   [^\<\\\/\>]
//    ([^<>\/])
//    /<\w*\>([^<>]*?)<\/\w*\>/gm