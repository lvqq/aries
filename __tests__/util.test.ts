import { describe, test, expect } from '@jest/globals';
import { formatValidNamesByPath, defineConfig, AriesConfig } from '../src';

describe('util_test', () => {
  test('format_valid_names_by_path', () => {
    expect(formatValidNamesByPath('/pet/{petId}/uploadImage')).toBe('PetPetIdUploadImage');
  });

  test('define_config', () => {
    const config: AriesConfig = {
      output: './output',
      url: './swagger',
    };
    expect(defineConfig(config)).toBe(config);
  });
});
