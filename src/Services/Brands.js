import http from "../http-common";

class BrandService{

    get(id) {
        return http.get(`/brands/${id}`);
    }

}

export default new BrandService();