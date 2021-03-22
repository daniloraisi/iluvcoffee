import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../events/entities';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, Flavor } from './entities';

@Module({
  controllers: [CoffeesController],
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  providers: [CoffeesService],
})
export class CoffeesModule {}
