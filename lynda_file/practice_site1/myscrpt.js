/**
 * Created by DARCI on 4/18/2017.
 */

var item = document.getAnonymousElementByAttribute("div");

var num_items = item.length;

item.onclick = function () {
    alert("num items were ", num_items)
}