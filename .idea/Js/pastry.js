import Pastry from "../Js/models/pastry.models.js";
import PastryService from "../Js/services/pastry.service.js"
import {getOnePastryCard} from "../Js/factories/pastry.factory.js";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const pastryId = +urlParams.get("id")

const pastryContainer = document.getElementById("item")

PastryService.getById(pastryId).forEach(element => {
    console.log(element)
    let pastryView = getOnePastryCard(element)
    pastryContainer.innerHTML += pastryView
})
