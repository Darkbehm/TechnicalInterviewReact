import http from "../http-common";

class ProductService{

    get(id) {
        return http.get(`/products/${id}`);
    }

}

export default new ProductService();
