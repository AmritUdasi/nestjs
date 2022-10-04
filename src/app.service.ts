import { Injectable,Inject,CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager'
import axios from 'axios'; 
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager:Cache){}

  getHello(): string {
    return 'Hello World!';
  }
  finddata(tokenid:string,contractadd:string){
    var url='http://192.168.11.86:4000/cubejs-api/v1/load?query={"dimensions": ["get_item_by_id.block_number","get_item_by_id.count","get_item_by_id.supply","get_item_by_id.deleted","get_item_by_id.auctions","get_item_by_id.pending","get_item_by_id.lazySupply","get_item_by_id.bestSellOrder","get_item_by_id.lastUpdatedAt","get_item_by_id.totalStock","get_item_by_id.sellers","get_item_by_id.bestBidOrder","get_item_by_id.self","get_item_by_id.lastSale","get_item_by_id.originOrders","get_item_by_id.ammOrders","get_item_by_id.block_date","get_item_by_id.from_address","get_item_by_id.to_address","get_item_by_id.token_address","get_item_by_id.transaction_hash","get_item_by_id.block_timestamp","get_item_by_id.item_metadata","get_item_by_id.blockchain","get_item_by_id.token_id"],"order": {"get_item_by_id.block_number": "asc"},"filters": [{"member": "get_item_by_id.token_address","operator": "equals","values": ["'+contractadd+'"]},{"member": "get_item_by_id.token_id","operator": "equals","values": ["'+tokenid+'"]}]}';
    var axiosdata = async  () => {
      var response = await axios.get(url);
      return response.data;
    };
    var data = axiosdata();
    return data;
  }
}
