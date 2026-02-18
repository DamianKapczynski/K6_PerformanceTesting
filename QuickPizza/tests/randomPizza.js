import http from "k6/http";
import { check, sleep } from 'k6';
import { base_test } from "../utils/options.js";
import { HttpStatus } from "../utils/enum/httpStatus.js";

const url = 'https://quickpizza.grafana.com/api/pizza';

export const options = base_test;
export default function () {

  let response = http.post(
      url, 
      JSON.stringify({"maxCaloriesPerSlice":1000,"mustBeVegetarian":false,"excludedIngredients":[],"excludedTools":[],"maxNumberOfToppings":5,"minNumberOfToppings":2,"customName":""}),
      headers
    );

    console.log(response);

  check(response, {
    'status 200': (r) => r.status === HttpStatus.OK
  });

  sleep(0.1);
}