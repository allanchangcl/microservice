import { Controller, Get, Post, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  constructor(
    private readonly appService: AppService,
    // Inject the math service, add in AppModule also
    private mathService: MathService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Change to microservices
  // @Post('add')
  @MessagePattern('add')
  // async accumulate(@Body('data') data: number[]) {
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
