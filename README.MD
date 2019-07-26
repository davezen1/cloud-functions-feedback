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
[Install Functions Framework](https://cloud.google.com/functions/docs/functions-framework)

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


