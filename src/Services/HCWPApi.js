import axios from 'axios';

export default class HCWPApi {

    static baseUrl() {
        return "http://iphoneislam.com/wp-json/wp/v2"

        // "http://www.hamalatcom.com/wp-json/wp/v2"
    }

    static getPosts() {
        // return axios.get(this.baseUrl() + '/posts');
        return fetch(this.baseUrl() + '/posts' );
    }

    static getPostsByCategory( categoryId ) {
        // return axios.get(this.baseUrl() + '/posts?categories=' + parseInt( categoryId ));

        return fetch(this.baseUrl() + '/posts?categories=' + parseInt( categoryId ) );

    }

    static getPostMedia(mediaId) {
        return fetch(this.baseUrl() + '/media/' + parseInt( mediaId ) );
    }

    static getCategories() {
        // return axios.get(this.baseUrl() + '/categories');
        return fetch(this.baseUrl() + '/categories' );
    }
}