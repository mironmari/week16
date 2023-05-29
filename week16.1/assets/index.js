
 function deleteTags(original) {
  return original.replace(/(<([^>]+)>)/gi, "");
}
let str = "<br>, <col> <embed>, <hr>, <img> и другие";

let cleaned = deleteTags(str);
console.log(cleaned);