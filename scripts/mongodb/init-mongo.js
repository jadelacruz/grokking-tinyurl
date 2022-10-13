db = db.getSiblingDB('admin');
db.auth("root", "password");
db = db.getSiblingDB('tinyurl');
db.createUser({
'user': "tinyuser",
'pwd': "tinypwd",
'roles': [{
        'role': 'readWrite',
        'db': 'tinyurl'
    }]
});
db = db.getSiblingDB('tinyurl');
db.createCollection('url');