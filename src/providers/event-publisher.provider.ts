import { ValueProvider } from '@nestjs/common/interfaces';

import { DefaultPubSub } from '../utils/default-pubsub';

export const EVENT_PUBLISHER_TOKEN = Symbol();

export const eventPublisherProvider: ValueProvider = {
  provide: EVENT_PUBLISHER_TOKEN,
  useValue: new DefaultPubSub(),
};
