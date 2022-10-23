import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { configuration } from './config/configuration'

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://leandro_sillos:asdf321@rocketseatcrudnestjsher.odqmwhq.mongodb.net/test`
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
