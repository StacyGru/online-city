const SetCategory = (params) => {
    let category_name = "";
    let request = "";

    switch(params.category) {
        case 'system_units':
            category_name = "Системные блоки"
            request = "system_unit_list"
            break

        case 'computer_kits':
            category_name = "Компьютеры в комплекте"
            request = "computer_kit_list"
            break

        case 'monitors':
            category_name = "Мониторы"
            request = "monitor_list"
            break

        case 'special_offers':
            category_name = "Спецпредложения"
            request = "special_offer_list"
            break
    }

    return {category_name, request}
}
export default SetCategory;