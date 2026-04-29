
import { Controller } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { ScreenService } from './Screen.service';
import { ScreenDto } from './Screen.dto';
import { SCREEN } from '@common/domain/api';

@Controller('Screen')
export class ScreenController extends BaseController<ScreenService, ScreenDto> {
  constructor(private readonly screenService: ScreenService) {
    super(screenService, SCREEN);
  }
}
