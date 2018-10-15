import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';

const { env } = process;
const config = {
  connector: 'memory',
  file: env.MEMORY_FILE || '',
  localStorage: '',
  name: 'memory'
};

export class MemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'memory';

  constructor(
    @inject('datasources.config.memory', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
