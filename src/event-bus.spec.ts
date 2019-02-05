import { Test, TestingModule } from '@nestjs/testing';

import { EventBus } from './event-bus';
import { CQRSModule } from './cqrs.module';
import { EVENT_PUBLISHER_TOKEN } from './providers';
import { IEventPublisher } from './interfaces/events/event-publisher.interface';
import { IEvent } from './interfaces';

describe('EventBus', () => {
  let testingModule: TestingModule;
  let eventBus: EventBus;
  let mockEventPublisher: IEventPublisher;

  beforeEach(async () => {
    mockEventPublisher = { publish: jest.fn() };

    testingModule = await Test.createTestingModule({ imports: [CQRSModule] })
      .overrideProvider(EVENT_PUBLISHER_TOKEN)
      .useValue(mockEventPublisher)
      .compile();

    eventBus = testingModule.get(EventBus);
  });

  describe('publish', () => {
    it('publishes the given event', () => {
      const event: IEvent = {};
      eventBus.publish(event);
      expect(mockEventPublisher.publish).toHaveBeenCalledWith(event);
    });
  });
});
