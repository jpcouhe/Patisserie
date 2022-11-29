import Pastry from "../Js/models/pastry.models.js";
import PastryService from "../Js/services/pastry.service.js"
import {getPastryCard} from "../Js/factories/pastry.factory.js"


const pastryContainer = document.getElementById("pastryList")


PastryService.getAll().forEach(element => {
    let pastryView = getPastryCard(element)

    pastryContainer.innerHTML += pastryView
})