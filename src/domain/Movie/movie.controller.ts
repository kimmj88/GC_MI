import { Controller } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { MovieService } from './movie.service';
import { MovieDto } from './movie.dto';
import { MOVIE } from '@common/domain/api';

@Controller('Movie')
export class MovieController extends BaseController<MovieService, MovieDto> {
  constructor(private readonly movieService: MovieService) {
    super(movieService, MOVIE);
  }
}
