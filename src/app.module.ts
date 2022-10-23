import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { configuration } from './config/configuration'

@Module({
  imports: [
    //MongooseModule.forRoot(`mongodb+srv://${configuration.mongodb.username}:${configuration.mongodb.password}@${configuration.mongodb.clustername}.odqmwhq.mongodb.net/test`,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
