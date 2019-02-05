import { Module } from '@nestjs/common';
import { CommandBus } from './command-bus';
import { EventPublisher } from './event-publisher';
import { EventBus } from './event-bus';
import { eventPublisherProvider } from './providers';

const customProviders = [eventPublisherProvider];

@Module({
  providers: [CommandBus, EventBus, EventPublisher, ...customProviders],
  exports: [CommandBus, EventBus, EventPublisher],
})
export class CQRSModule {}
