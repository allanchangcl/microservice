import { Controller, Get, Post, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';

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

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
