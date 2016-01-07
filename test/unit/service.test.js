/**
 * Created by leo on 16-1-5.
 */

var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:service', function(){
  //describe('Should properly scaffold services without any options or arguments', () => {
  //  before(done => test.run(path.join(__dirname, '../../src/service')).on('end', done));
  //
  //  it('Should properly create api files', () => {
  //    assert.file([
  //      'api/services/CipherService.js',
  //      'api/services/HashService.js',
  //      'api/services/ImageService.js',
  //      'api/services/LocationService.js',
  //      'api/services/MailerService.js',
  //      'api/services/PaymentService.js',
  //      'api/services/PusherService.js',
  //      'api/services/SmsService.js',
  //      'api/services/SocialService.js',
  //      'api/services/StorageService.js'
  //    ]);
  //
  //    assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
  //  });
  //
  //  it('Should properly create config files', () => {
  //    assert.file([
  //      'config/services/cipher.js',
  //      'config/services/hash.js',
  //      'config/services/image.js',
  //      'config/services/location.js',
  //      'config/services/mailer.js',
  //      'config/services/payment.js',
  //      'config/services/pusher.js',
  //      'config/services/sms.js',
  //      'config/services/social.js',
  //      'config/services/storage.js'
  //    ]);
  //
  //    assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
  //  });
  //
  //  it('Should properly create test files', () => {
  //    assert.file([
  //      'test/unit/services/CipherService.unit_test.js',
  //      'test/unit/services/HashService.unit_test.js',
  //      'test/unit/services/ImageService.unit_test.js',
  //      'test/unit/services/LocationService.unit_test.js',
  //      'test/unit/services/MailerService.unit_test.js',
  //      'test/unit/services/PaymentService.unit_test.js',
  //      'test/unit/services/PusherService.unit_test.js',
  //      'test/unit/services/SmsService.unit_test.js',
  //      'test/unit/services/SocialService.unit_test.js',
  //      'test/unit/services/StorageService.unit_test.js'
  //    ]);
  //
  //    assert.fileContent('test/unit/services/CipherService.unit_test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
  //  });
  //});
  //
  //describe('Should properly scaffold predefined service', () => {
  //  before(done => {
  //    test
  //      .run(path.join(__dirname, '../../src/service'))
  //      .withArguments(['cipher'])
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', () => {
  //    assert.file([
  //      'api/services/CipherService.js'
  //    ]);
  //
  //    assert.noFile([
  //      'api/services/HashService.js',
  //      'api/services/ImageService.js',
  //      'api/services/LocationService.js',
  //      'api/services/MailerService.js',
  //      'api/services/PaymentService.js',
  //      'api/services/PusherService.js',
  //      'api/services/SmsService.js',
  //      'api/services/SocialService.js',
  //      'api/services/StorageService.js'
  //    ]);
  //
  //    assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
  //  });
  //
  //  it('Should properly create config files', () => {
  //    assert.file([
  //      'config/services/cipher.js'
  //    ]);
  //
  //    assert.noFile([
  //      'config/services/hash.js',
  //      'config/services/image.js',
  //      'config/services/location.js',
  //      'config/services/mailer.js',
  //      'config/services/payment.js',
  //      'config/services/pusher.js',
  //      'config/services/sms.js',
  //      'config/services/social.js',
  //      'config/services/storage.js'
  //    ]);
  //
  //    assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
  //  });
  //
  //  it('Should properly create test files', () => {
  //    assert.file([
  //      'test/unit/services/CipherService.unit_test.js'
  //    ]);
  //
  //    assert.noFile([
  //      'test/unit/services/HashService.unit_test.js',
  //      'test/unit/services/ImageService.unit_test.js',
  //      'test/unit/services/LocationService.unit_test.js',
  //      'test/unit/services/MailerService.unit_test.js',
  //      'test/unit/services/PaymentService.unit_test.js',
  //      'test/unit/services/PusherService.unit_test.js',
  //      'test/unit/services/SmsService.unit_test.js',
  //      'test/unit/services/SocialService.unit_test.js',
  //      'test/unit/services/StorageService.unit_test.js'
  //    ]);
  //
  //    assert.fileContent('test/unit/services/CipherService.unit_test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
  //  });
  //});
  //
  //describe('Should properly scaffold overridden predefined service', () => {
  //  before(done => {
  //    test
  //      .run(path.join(__dirname, '../../src/service'))
  //      .withArguments(['cipher'])
  //      .withOptions({
  //        'new': true
  //      })
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', () => {
  //    assert.file([
  //      'api/services/CipherService.js'
  //    ]);
  //
  //    assert.noFile([
  //      'api/services/HashService.js',
  //      'api/services/ImageService.js',
  //      'api/services/LocationService.js',
  //      'api/services/MailerService.js',
  //      'api/services/PaymentService.js',
  //      'api/services/PusherService.js',
  //      'api/services/SmsService.js',
  //      'api/services/SocialService.js',
  //      'api/services/StorageService.js'
  //    ]);
  //
  //    assert.fileContent('api/services/CipherService.js', /export default \{\}/);
  //  });
  //
  //  it('Should properly create config files', () => {
  //    assert.file([
  //      'config/services/cipher.js'
  //    ]);
  //
  //    assert.noFile([
  //      'config/services/hash.js',
  //      'config/services/image.js',
  //      'config/services/location.js',
  //      'config/services/mailer.js',
  //      'config/services/payment.js',
  //      'config/services/pusher.js',
  //      'config/services/sms.js',
  //      'config/services/social.js',
  //      'config/services/storage.js'
  //    ]);
  //
  //    assert.fileContent('config/services/cipher.js', /cipher: \{\}/);
  //  });
  //
  //  it('Should properly create test files', () => {
  //    assert.file([
  //      'test/unit/services/CipherService.unit_test.js'
  //    ]);
  //
  //    assert.noFile([
  //      'test/unit/services/HashService.unit_test.js',
  //      'test/unit/services/ImageService.unit_test.js',
  //      'test/unit/services/LocationService.unit_test.js',
  //      'test/unit/services/MailerService.unit_test.js',
  //      'test/unit/services/PaymentService.unit_test.js',
  //      'test/unit/services/PusherService.unit_test.js',
  //      'test/unit/services/SmsService.unit_test.js',
  //      'test/unit/services/SocialService.unit_test.js',
  //      'test/unit/services/StorageService.unit_test.js'
  //    ]);
  //
  //    assert.fileContent('test/unit/services/CipherService.unit_test.js', /import Service from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
  //  });
  //});

  describe('Should properly scaffold custom service', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['CustomService'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/services/CustomService.js'
      ]);

      generators.assert.noFile([
        'api/services/CipherService.js',
        'api/services/HashService.js',
        'api/services/ImageService.js',
        'api/services/LocationService.js',
        'api/services/MailerService.js',
        'api/services/PaymentService.js',
        'api/services/PusherService.js',
        'api/services/SmsService.js',
        'api/services/SocialService.js',
        'api/services/StorageService.js'
      ]);

      generators.assert.fileContent('api/services/CustomService.js', /module.exports/);
    });

    it('Should properly create config files', function(){
      generators.assert.file([
        'config/services/custom.js'
      ]);

      generators.assert.noFile([
        'config/services/cipher.js',
        'config/services/hash.js',
        'config/services/image.js',
        'config/services/location.js',
        'config/services/mailer.js',
        'config/services/payment.js',
        'config/services/pusher.js',
        'config/services/sms.js',
        'config/services/social.js',
        'config/services/storage.js'
      ]);

      generators.assert.fileContent('config/services/custom.js', /custom: \{\}/);
    });

    it('Should properly create test files', function() {
      generators.assert.file([
        'test/unit/services/CustomService.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/services/CipherService.test.js',
        'test/unit/services/HashService.test.js',
        'test/unit/services/ImageService.test.js',
        'test/unit/services/LocationService.test.js',
        'test/unit/services/MailerService.test.js',
        'test/unit/services/PaymentService.test.js',
        'test/unit/services/PusherService.test.js',
        'test/unit/services/SmsService.test.js',
        'test/unit/services/SocialService.test.js',
        'test/unit/services/StorageService.test.js'
      ]);

      generators.assert.fileContent('test/unit/services/CustomService.test.js', /Should be tested/)
    });
  });

  //describe('Should properly scaffold all predefined services at once', () => {
  //  before(done => {
  //    test
  //      .run(path.join(__dirname, '../../src/service'))
  //      .withOptions({
  //        'all': true
  //      })
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', () => {
  //    assert.file([
  //      'api/services/CipherService.js',
  //      'api/services/HashService.js',
  //      'api/services/ImageService.js',
  //      'api/services/LocationService.js',
  //      'api/services/MailerService.js',
  //      'api/services/PaymentService.js',
  //      'api/services/PusherService.js',
  //      'api/services/SmsService.js',
  //      'api/services/SocialService.js',
  //      'api/services/StorageService.js'
  //    ]);
  //
  //    assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
  //  });
  //
  //  it('Should properly create config files', () => {
  //    assert.file([
  //      'config/services/cipher.js',
  //      'config/services/hash.js',
  //      'config/services/image.js',
  //      'config/services/location.js',
  //      'config/services/mailer.js',
  //      'config/services/payment.js',
  //      'config/services/pusher.js',
  //      'config/services/sms.js',
  //      'config/services/social.js',
  //      'config/services/storage.js'
  //    ]);
  //
  //    assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
  //  });
  //
  //  it('Should properly create test files', () => {
  //    assert.file([
  //      'test/unit/services/CipherService.unit_test.js',
  //      'test/unit/services/HashService.unit_test.js',
  //      'test/unit/services/ImageService.unit_test.js',
  //      'test/unit/services/LocationService.unit_test.js',
  //      'test/unit/services/MailerService.unit_test.js',
  //      'test/unit/services/PaymentService.unit_test.js',
  //      'test/unit/services/PusherService.unit_test.js',
  //      'test/unit/services/SmsService.unit_test.js',
  //      'test/unit/services/SocialService.unit_test.js',
  //      'test/unit/services/StorageService.unit_test.js'
  //    ]);
  //
  //    assert.fileContent('test/unit/services/CipherService.unit_test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
  //  });
  //});
  //
  //describe('Should properly scaffolds all predefined services with custom options', () => {
  //  before(done => {
  //    test
  //      .run(path.join(__dirname, '../../src/service'))
  //      .withOptions({
  //        'cipher-secret-key': '1234567890',
  //        'image-provider': 'IM',
  //        'location-provider': 'FreeGeoIP',
  //        'mailer-provider': 'SMTP',
  //        'payment-provider': 'BrainTree',
  //        'sms-provider': 'Twilio',
  //        'storage-provider': 'Local',
  //        'all': true
  //      })
  //      .on('end', done);
  //  });
  //
  //  it('Should properly create api files', () => {
  //    assert.file([
  //      'api/services/CipherService.js',
  //      'api/services/HashService.js',
  //      'api/services/ImageService.js',
  //      'api/services/LocationService.js',
  //      'api/services/MailerService.js',
  //      'api/services/PaymentService.js',
  //      'api/services/PusherService.js',
  //      'api/services/SmsService.js',
  //      'api/services/SocialService.js',
  //      'api/services/StorageService.js'
  //    ]);
  //
  //    assert.fileContent('api/services/ImageService.js', /image\('IM'/);
  //    assert.fileContent('api/services/LocationService.js', /location\('FreeGeoIP'/);
  //    assert.fileContent('api/services/MailerService.js', /mailer\('SMTP'/);
  //    assert.fileContent('api/services/PaymentService.js', /payment\('BrainTree'/);
  //    assert.fileContent('api/services/SmsService.js', /sms\('Twilio'/);
  //    assert.fileContent('api/services/StorageService.js', /storage\('Local'/);
  //  });
  //
  //  it('Should properly create config files', () => {
  //    assert.file([
  //      'config/services/cipher.js',
  //      'config/services/hash.js',
  //      'config/services/image.js',
  //      'config/services/location.js',
  //      'config/services/mailer.js',
  //      'config/services/payment.js',
  //      'config/services/pusher.js',
  //      'config/services/sms.js',
  //      'config/services/social.js',
  //      'config/services/storage.js'
  //    ]);
  //
  //    assert.fileContent('config/services/cipher.js', /secretKey: '1234567890'/);
  //  });
  //
  //  it('Should properly create test files', () => {
  //    assert.file([
  //      'test/unit/services/CipherService.unit_test.js',
  //      'test/unit/services/HashService.unit_test.js',
  //      'test/unit/services/ImageService.unit_test.js',
  //      'test/unit/services/LocationService.unit_test.js',
  //      'test/unit/services/MailerService.unit_test.js',
  //      'test/unit/services/PaymentService.unit_test.js',
  //      'test/unit/services/PusherService.unit_test.js',
  //      'test/unit/services/SmsService.unit_test.js',
  //      'test/unit/services/SocialService.unit_test.js',
  //      'test/unit/services/StorageService.unit_test.js'
  //    ]);
  //  });
  //});
});
