import _ from "lodash";

export const formatCardNumber = (cardNumber: string) => {
  return _.chunk(cardNumber, 4).map(it => it.join("")).join(" ")
}

export const parseCardNumber = (cardNumber: string) => {
    return cardNumber.replace(/\s/g, "");
}