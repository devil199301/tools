import { FilesystemModule } from './filesystem.module';

describe('FilesystemModule', () => {
  let filesystemModule: FilesystemModule;

  beforeEach(() => {
    filesystemModule = new FilesystemModule();
  });

  it('should create an instance', () => {
    expect(filesystemModule).toBeTruthy();
  });
});
