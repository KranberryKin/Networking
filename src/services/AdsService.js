import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Component } from '../Models/ComponentModel.js'
import { logger } from '../utils/Logger'

class AdsService {
  async getAds() {
    const res = await api.get('/api/ads')
    AppState.ads = res.data.map(a => new Component(a))
    logger.log('ads', AppState.ads)
  }
}

export const adsService = new AdsService()
