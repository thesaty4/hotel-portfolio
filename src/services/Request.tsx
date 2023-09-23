import RequestService from "../shared/service/RequestService";

export default class Request extends RequestService {
  getSiteInfo<SiteInfo>(): Promise<SiteInfo> {
    return this.get(`/site-info`);
  }
}
