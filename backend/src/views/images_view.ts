import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.59:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        if (images !== undefined && images !== null) {
            return images.map(image => this.render(image));
        }
    }
};