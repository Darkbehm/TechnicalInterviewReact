import http from "../http-common";

class SaleService{

    get(product,brand) {
        return http.get(`/sales/${product}/${brand}`);
    }

}

export default new SaleService();