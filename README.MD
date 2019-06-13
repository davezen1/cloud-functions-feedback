# Universal Feedback Service

Cloud Function using Firestore to store user feedback.

## Using

## Author

David Hodge

## Development

Use Google Cloud Functions Emulator

```
npm install --save --save-exact @google-cloud/firestore
```

```
npm install -g @google-cloud/functions-emulator
```
[Functions Emulator](https://cloud.google.com/functions/docs/emulator)

```
export GOOGLE_APPLICATION_CREDENTIALS=/Users/myname/.cred/myserviceaccount.json
functions start
functions deploy feedback --trigger-http
```

If using zsh functions probably won't work. Start bash and run functions there or find the path for functions with the command: sh -c 'which functions' and perhaps set an alias:

```
alias gcpfunctions="/Users/USER/.nvm/versions/node/v8.11.1/bin/functions"
```

Run locally (With Functions Emulator)

```
curl --header "Content-Type: application/json" \
--request POST \
--data '{"usappid":"APPID", "user":"USER", "feedback":"FEEDBACK HERE"}' \
http://localhost:8010/PROJECT/us-east4/feedback
```

OR

Note Functions Emulator has been deprecated use [Functions Framework](https://cloud.google.com/functions/docs/functions-framework)

```
npm install -g @google-cloud/functions-framework
```

```
export GOOGLE_APPLICATION_CREDENTIALS=/Users/myname/.cred/myserviceaccount.json

functions-framework --target=feedback
```
Run locally with Functions Framework

```
curl --header "Content-Type: application/json" \
--request POST \
--data '{"usappid":"APPID", "user":"USER", "feedback":"FEEDBACK"}' \
http://localhost:8080
```
## Deploy

### CLI

Manual Deployment
 ```gcloud functions deploy feedback --trigger-http --runtime=nodejs10 --region=us-east1```

### Cloud Build 

Automated CI/CD See cloudbuild.yaml


