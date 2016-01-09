/**
 * Exports array that contains questions for prompting.
 * The array with questions is an array of Inquirer prompt objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * module.exports = [{
 *   type: 'input',
 *   name: 'inputName',
 *   message: 'Message for the input'
 * }];
 */

var whenDatabaseIsChosen = function(databases) {
  result = function (answers) {
    return databases.indexOf(answers['config:database-adapter']) !== -1;
  };
  return result;
};


module.exports = [
  {
    type: 'list',
    name: 'config:database-adapter',
    message: 'Database adapter',
    default: 'Mongodb',
    choices: [
      'Mongodb',
      'Redis',
      'PostgreSQL',
      'MySQL',
      'SQLServer',
      'OrientDB',
      'DynamoDB',
      'FileMaker',
      'Memory',
      'Disk'
    ]
  }, {
    type: 'input',
    name: 'config:database-host',
    message: 'Database host',
    default: 'localhost',
    when: whenDatabaseIsChosen(['Mongodb', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
  }, {
    type: 'input',
    name: 'config:database-name',
    message: 'Database name',
    default: 'sails-diy',
    when: whenDatabaseIsChosen(['Mongodb', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
  }, {
    type: 'input',
    name: 'config:database-username',
    message: 'Database username',
    default: '',
    when: whenDatabaseIsChosen(['Mongodb', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
  }, {
    type: 'password',
    name: 'config:database-password',
    message: 'Database password',
    default: '',
    when: whenDatabaseIsChosen(['Mongodb', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
  }, {
    type: 'input',
    name: 'config:dynamo-access-key-id',
    message: 'DynamoDB Access Key ID',
    default: '',
    when: whenDatabaseIsChosen(['DynamoDB'])
  }, {
    type: 'input',
    name: 'config:dynamo-secret-access-key',
    message: 'DynamoDB Secret Access Key',
    default: '',
    when: whenDatabaseIsChosen(['DynamoDB'])
  }, {
    type: 'input',
    name: 'config:dynamo-region',
    message: 'DynamoDB region',
    default: 'us-west-1',
    when: whenDatabaseIsChosen(['DynamoDB'])
  }, {
    type: 'confirm',
    name: 'config:cors',
    message: 'Enable CORS?',
    default: false
  }
];
