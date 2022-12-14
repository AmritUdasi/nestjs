import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DetailsService } from './details/details.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly details: DetailsService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('contract')
  finddata(@Body('token_id') tokenid:string,@Body('contract_address') contractaddress:string){
    return this.appService.finddata(tokenid,contractaddress);
  }   
  }
