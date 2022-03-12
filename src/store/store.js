import { autorun, makeAutoObservable, runInAction } from "mobx";
// unexisted module
import service from 'remoteService'

class Store {
  httpService 

  data = null

  constructor(httpService) {
    makeAutoObservable(this, {}, { autoBind: true })

    this.httpService = httpService

    autorun(() => this.getData())
  }

  getData = async () => {
    const data = await this.httpService.get()
    if (!data) return
    runInAction(() => this.data = data)
  }
  
}

export const store = new Store(service)