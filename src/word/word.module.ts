import { Module } from '@nestjs/common';
import { WordController } from './controller/word.controller';
import { WordService } from './service/word.service';
import { FilmModule } from 'src/film/film.module';

@Module({
  imports: [FilmModule],
  controllers: [WordController],
  providers: [WordService],
  exports: [],
})
export class WordModule {}
