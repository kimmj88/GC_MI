
import { Controller } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { ScreeningService } from './Screening.service';
import { ScreeningDto } from './Screening.dto';
import { SCREENING } from '@common/domain/api';

@Controller('Screening')
export class ScreeningController extends BaseController<ScreeningService, ScreeningDto> {
  constructor(private readonly screeningService: ScreeningService) {
    super(screeningService, SCREENING);
  }
}
