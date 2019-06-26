import axios from 'axios'
import { urlBase, origin } from 'config'
import Cookie from 'js-cookie'

export default class HttpRequest {
    constructor(resource = '/') {
        if (resource && resource[0] !== '/')
            resource = `/${resource}`
        this.resource = resource
    }

    get __headersBase() {
        return {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
        }
    }

    url(route = '/') {
        if (!route) route = ''
        if (route && route[0] !== '/')
            route = `/${route}`
        return `${urlBase}${route}`
    }

    uri(route = '/') {
        if (!route) route = ''
        if (route && route[0] !== '/')
            route = `/${route}`
        return `${urlBase}${this.resource !== '/' ? this.resource : ''}${route}`
    }

    async login(user, pwd) {
        let res = await axios.post(this.url('login'), { user, pwd }, { headers: this.__headersBase })

        Cookie.set('x-access-token', res.data.access_token)

        return res
    }

    async getHeaders() {
        let { data } = await axios.post(this.url('auth'), {}, { headers: this.__headersBase })

        return {
            ...this.__headersBase,
            'x-refresh-token': data.refresh_token
        }
    }

    async requestGet(url, options = {}) {
        if (typeof(url) === 'object') {
            options = url
            url = null
        }

        let headers = await this.getHeaders()
        let { data } = await axios.get(this.uri(url), { headers, ...options })

        return data
    }

    async requestPost(url, body, options = {}) {
        if (typeof(url) === 'object') {
            options = url
            url = null
        }

        let headers = await this.getHeaders()
        let { data } = await axios.post(this.uri(url), body, { headers, ...options })

        return data
    }

    async requestPut(url, body, options = {}) {
        if (typeof(url) === 'object') {
            options = url
            url = null
        }

        let headers = await this.getHeaders()
        let { data } = await axios.put(this.uri(url), body, { headers, ...options })

        return data
    }

    async requestPatch(url, body, options = {}) {
        if (typeof(url) === 'object') {
            options = url
            url = null
        }

        let headers = await this.getHeaders()
        let { data } = await axios.patch(this.uri(url), body, { headers, ...options })

        return data
    }

    async requestDelete(url, options = {}) {
        if (typeof(url) === 'object') {
            options = url
            url = null
        }

        let headers = await this.getHeaders()
        let { data } = await axios.delete(this.uri(url), { headers, ...options })

        return data
    }

    async findAll(){
        return await this.requestGet()
    }

    async find(page, pageSize, sort) {
        let skip = (page-1) * pageSize

        return await this.requestGet({
            params: {
                skip,
                limit: pageSize,
                sort
            }
        })
    }

    async findCount() {

        return await this.requestGet({
            params: {
                selectCount: 'true'
            }
        })
    }

    async save(body, options={}){
        return await this.requestPost({ ...options }, body)
    }

    async edit(body, options={}){
        return await this.requestPatch(body._id, body, { ...options })
    }

    async delete(id, options={}){
        return await this.requestDelete(id, { ...options })
    }

    async findOne(id, options={}){
        return await this.requestGet(id, { ...options })
    }

}

export const http = new HttpRequest()
